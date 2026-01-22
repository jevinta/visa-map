#!/usr/bin/env node

/**
 * Script to parse Wikipedia visa requirement pages and generate code for visaData.js
 * 
 * Usage: node scripts/parse-wikipedia-visa.js <wikipedia-url> [passport-code]
 * 
 * Example: node scripts/parse-wikipedia-visa.js https://en.wikipedia.org/wiki/Visa_requirements_for_Algerian_citizens DZ
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load country names mapping from visaData.js
const visaDataPath = join(__dirname, '../src/visaData.js');
const visaDataContent = readFileSync(visaDataPath, 'utf-8');

// Extract country names object
const countryNamesMatch = visaDataContent.match(/export const countryNames = \{([\s\S]*?)\};/);
if (!countryNamesMatch) {
  console.error('Could not find countryNames in visaData.js');
  process.exit(1);
}

// Parse country names into a map
const countryNames = {};
const countryNameLines = countryNamesMatch[1].split('\n');
countryNameLines.forEach(line => {
  const match = line.match(/\s+([A-Z]{2}(?:-[A-Z]+)?):\s+'([^']+)',?/);
  if (match) {
    countryNames[match[1]] = match[2];
  }
});

// Reverse mapping: country name -> ISO code
const countryNameToCode = {};
Object.entries(countryNames).forEach(([code, name]) => {
  countryNameToCode[name.toLowerCase()] = code;
  // Also add common variations
  if (name.includes('United States')) {
    countryNameToCode['united states'] = code;
    countryNameToCode['usa'] = code;
  }
  if (name.includes('United Kingdom')) {
    countryNameToCode['united kingdom'] = code;
    countryNameToCode['uk'] = code;
  }
});

// Mapping from Wikipedia visa requirement text to VISA_TYPES
const visaTypeMapping = {
  'visa not required': 'VISA_FREE',
  'visa-free': 'VISA_FREE',
  'freedom of movement': 'VISA_FREE',
  'right of abode': 'RIGHT_OF_ABODE',
  'compact of free association': 'RIGHT_OF_ABODE',
  'electronic travel authorization': 'ETA',
  'eta': 'ETA',
  'visa on arrival': 'VISA_ON_ARRIVAL',
  'visa available on arrival': 'VISA_ON_ARRIVAL',
  'visa required': 'VISA_REQUIRED',
  'evisa': 'E_VISA',
  'e-visa': 'E_VISA',
  'electronic visa': 'E_VISA',
  'visa available both on arrival or online': 'E_VISA',
  'travel restricted': 'TRAVEL_RESTRICTED',
  'admission refused': 'TRAVEL_RESTRICTED',
};

// Mapping from country name variations to ISO codes
const countryVariations = {
  'united states': 'US',
  'usa': 'US',
  'united kingdom': 'GB',
  'uk': 'GB',
  'russia': 'RU',
  'russian federation': 'RU',
  'south korea': 'KR',
  'korea, republic of': 'KR',
  'north korea': 'KP',
  'democratic republic of the congo': 'CD',
  'dr congo': 'CD',
  'congo (kinshasa)': 'CD',
  'republic of the congo': 'CG',
  'congo': 'CG',
  'congo (brazzaville)': 'CG',
  'bosnia and herzegovina': 'BA',
  'bosnia': 'BA',
  'north macedonia': 'MK',
  'macedonia': 'MK',
  'south sudan': 'SS',
  'central african republic': 'CF',
  'equatorial guinea': 'GQ',
  'somaliland': 'SO-SL',
  'dominican republic': 'DO',
  'côte d\'ivoire': 'CI',
  'ivory coast': 'CI',
  'cape verde': 'CV',
  'east timor': 'TL',
  'timor-leste': 'TL',
  'myanmar': 'MM',
  'burma': 'MM',
  'eswatini': 'SZ',
  'swaziland': 'SZ',
  'czech republic': 'CZ',
  'czechia': 'CZ',
};

function normalizeCountryName(name) {
  if (!name) return null;
  
  // Remove common prefixes/suffixes and clean up
  let normalized = name
    .toLowerCase()
    .trim()
    .replace(/\[.*?\]/g, '') // Remove Wikipedia citations [1], [2], etc.
    .replace(/\(.*?\)/g, '') // Remove parentheses content
    .replace(/^the\s+/i, '') // Remove "The" prefix
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  return normalized;
}

function findCountryCode(countryName) {
  if (!countryName) return null;
  
  const normalized = normalizeCountryName(countryName);
  
  // Check variations first
  if (countryVariations[normalized]) {
    return countryVariations[normalized];
  }
  
  // Check exact match in countryNames (case-insensitive)
  const code = Object.keys(countryNames).find(
    code => countryNames[code].toLowerCase() === normalized
  );
  if (code) return code;
  
  // Check normalized matches (handle special characters)
  const normalizedCode = Object.keys(countryNames).find(code => {
    const name = countryNames[code].toLowerCase()
      .replace(/[^\w\s]/g, '') // Remove special characters
      .replace(/\s+/g, ' ')
      .trim();
    const normalizedName = normalized
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    return name === normalizedName;
  });
  if (normalizedCode) return normalizedCode;
  
  // Check partial matches (be more careful)
  for (const [code, name] of Object.entries(countryNames)) {
    const nameLower = name.toLowerCase();
    // Only match if one contains the other and they're reasonably similar
    if ((nameLower.includes(normalized) && normalized.length > 3) || 
        (normalized.includes(nameLower) && nameLower.length > 3)) {
      // Avoid false matches - check if it's a reasonable match
      const similarity = Math.min(normalized.length, nameLower.length) / Math.max(normalized.length, nameLower.length);
      if (similarity > 0.7) {
        return code;
      }
    }
  }
  
  return null;
}

function parseVisaRequirement(text) {
  if (!text) return null;
  
  const normalized = text.toLowerCase().trim();
  
  // Check for exact matches first
  for (const [key, visaType] of Object.entries(visaTypeMapping)) {
    if (normalized.includes(key)) {
      return visaType;
    }
  }
  
  // Check for partial matches
  if (normalized.includes('not required') || normalized.includes('free')) {
    return 'VISA_FREE';
  }
  if (normalized.includes('required') && !normalized.includes('not required')) {
    return 'VISA_REQUIRED';
  }
  if (normalized.includes('arrival')) {
    return 'VISA_ON_ARRIVAL';
  }
  if (normalized.includes('electronic') || normalized.includes('e-')) {
    return 'E_VISA';
  }
  
  return null;
}

async function fetchWikipediaPage(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error fetching Wikipedia page:', error);
    throw error;
  }
}

function parseWikipediaTable(html) {
  const $ = cheerio.load(html);
  const results = [];
  
  // Find the main visa requirements table (usually has class "wikitable sortable")
  const tables = $('table.wikitable.sortable, table.wikitable');
  
  if (tables.length === 0) {
    console.error('Could not find visa requirements table');
    return results;
  }
  
  // Use the first wikitable (usually the main one)
  const table = tables.first();
  const rows = table.find('tr');
  
  let countryColIndex = -1;
  let visaColIndex = -1;
  let headerFound = false;
  
  rows.each((index, row) => {
    const $row = $(row);
    const cells = $row.find('th, td');
    
    // Check if this is a header row
    if ($row.find('th').length > 0) {
      cells.each((cellIndex, cell) => {
        const cellText = $(cell).text().toLowerCase().trim();
        if (cellText.includes('country') || cellText.includes('territory')) {
          countryColIndex = cellIndex;
        }
        if (cellText.includes('visa requirement') || 
            (cellText.includes('requirement') && !cellText.includes('allowed stay'))) {
          visaColIndex = cellIndex;
        }
      });
      headerFound = true;
      return;
    }
    
    // Skip if we haven't found headers yet
    if (!headerFound) return;
    
    if (cells.length === 0) return;
    
    // Get country name
    const countryCell = cells.eq(countryColIndex >= 0 ? countryColIndex : 0);
    if (countryCell.length === 0) return;
    
    let countryName = countryCell.text()
      .replace(/\[.*?\]/g, '') // Remove citations
      .trim();
    
    // Also check for links in the cell
    if (!countryName && countryCell.find('a').length > 0) {
      countryName = countryCell.find('a').first().text().trim();
    }
    
    if (!countryName || countryName.length < 2) return;
    
    // Skip section headers
    const lowerName = countryName.toLowerCase();
    if (lowerName.includes('independent countries') ||
        lowerName.includes('territories') ||
        lowerName.includes('dependent') ||
        lowerName.includes('disputed') ||
        lowerName.includes('notes') ||
        lowerName === 'country' ||
        lowerName === 'territory') {
      return;
    }
    
    // Get visa requirement
    const visaCell = cells.eq(visaColIndex >= 0 ? visaColIndex : 1);
    if (visaCell.length === 0) return;
    
    let visaRequirement = visaCell.text()
      .replace(/\[.*?\]/g, '') // Remove citations
      .trim();
    
    // Also check for links in the cell
    if (!visaRequirement && visaCell.find('a').length > 0) {
      visaRequirement = visaCell.find('a').first().text().trim();
    }
    
    if (!visaRequirement) return;
    
    results.push({
      country: countryName,
      requirement: visaRequirement
    });
  });
  
  return results;
}

function generateCode(passportCode, entries) {
  const code = [];
  code.push(`// ${passportCode} Passport holders`);
  code.push(`// Source: Wikipedia`);
  code.push(`visaRequirements.${passportCode} = {`);
  code.push(`  ...visaRequirements.${passportCode},`);
  
  // Group by visa type for better organization
  const grouped = {};
  entries.forEach(entry => {
    if (!grouped[entry.visaType]) {
      grouped[entry.visaType] = [];
    }
    grouped[entry.visaType].push(entry);
  });
  
  // Output visa-free first, then others
  const order = ['VISA_FREE', 'RIGHT_OF_ABODE', 'ETA', 'VISA_ON_ARRIVAL', 'E_VISA', 'VISA_REQUIRED', 'TRAVEL_RESTRICTED'];
  
  order.forEach(visaType => {
    if (grouped[visaType] && grouped[visaType].length > 0) {
      const comment = visaType === 'VISA_FREE' ? '// Visa-free countries' :
                     visaType === 'RIGHT_OF_ABODE' ? '// Right of abode countries' :
                     visaType === 'ETA' ? '// ETA countries' :
                     visaType === 'VISA_ON_ARRIVAL' ? '// Visa on arrival countries' :
                     visaType === 'E_VISA' ? '// E-visa countries' :
                     visaType === 'VISA_REQUIRED' ? '// Visa required countries' :
                     '// Travel restricted countries';
      code.push(`  ${comment}`);
      
      grouped[visaType].forEach(entry => {
        const countryName = countryNames[entry.code] || entry.originalName;
        code.push(`  ${entry.code}: VISA_TYPES.${visaType}, // ${countryName}`);
      });
    }
  });
  
  code.push(`};`);
  code.push('');
  
  return code.join('\n');
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 1) {
    console.error('Usage: node scripts/parse-wikipedia-visa.js <wikipedia-url> [passport-code]');
    console.error('Example: node scripts/parse-wikipedia-visa.js https://en.wikipedia.org/wiki/Visa_requirements_for_Algerian_citizens DZ');
    process.exit(1);
  }
  
  const url = args[0];
  let passportCode = args[1];
  
  // Try to extract passport code from URL if not provided
  if (!passportCode) {
    const urlMatch = url.match(/Visa_requirements_for_(\w+)_citizens/);
    if (urlMatch) {
      const countryName = urlMatch[1];
      // Try to find the code
      passportCode = Object.keys(countryNames).find(code => 
        countryNames[code].toLowerCase().includes(countryName.toLowerCase())
      );
    }
  }
  
  if (!passportCode) {
    console.error('Could not determine passport code. Please provide it as second argument.');
    console.error('Available codes:', Object.keys(countryNames).slice(0, 20).join(', '), '...');
    process.exit(1);
  }
  
  console.log(`Fetching Wikipedia page: ${url}`);
  console.log(`Passport code: ${passportCode}`);
  console.log('');
  
  try {
    const html = await fetchWikipediaPage(url);
    const tableData = parseWikipediaTable(html);
    
    console.log(`Found ${tableData.length} entries in table`);
    console.log('');
    
    // Process entries
    const processed = [];
    const notFound = [];
    
    tableData.forEach(entry => {
      const code = findCountryCode(entry.country);
      const visaType = parseVisaRequirement(entry.requirement);
      
      if (code && visaType) {
        processed.push({
          code,
          originalName: entry.country,
          visaType,
          requirement: entry.requirement
        });
      } else {
        notFound.push({
          country: entry.country,
          requirement: entry.requirement,
          code: code || 'NOT_FOUND',
          visaType: visaType || 'NOT_FOUND'
        });
      }
    });
    
    console.log(`Successfully processed: ${processed.length} entries`);
    if (notFound.length > 0) {
      console.log(`\nCould not process ${notFound.length} entries:`);
      notFound.slice(0, 10).forEach(entry => {
        console.log(`  - ${entry.country}: ${entry.requirement} (code: ${entry.code}, visa: ${entry.visaType})`);
      });
      if (notFound.length > 10) {
        console.log(`  ... and ${notFound.length - 10} more`);
      }
    }
    
    console.log('\n' + '='.repeat(80));
    console.log('Generated code:');
    console.log('='.repeat(80));
    console.log(generateCode(passportCode, processed));
    console.log('='.repeat(80));
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
