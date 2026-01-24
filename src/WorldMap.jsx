import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import { getVisaRequirement, VISA_COLORS, VISA_TYPES, countryNames, passportNames } from './visaData';

// Using world-atlas TopoJSON - we'll handle different property formats
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Country name to ISO code mapping (for cases where TopoJSON doesn't have ISO codes)
// Includes abbreviations and alternative names used by world-atlas TopoJSON
const countryNameToCode = {
  'United States of America': 'US',
  'United States': 'US',
  'Canada': 'CA',
  'Mexico': 'MX',
  'United Kingdom': 'GB',
  'France': 'FR',
  'Germany': 'DE',
  'Italy': 'IT',
  'Spain': 'ES',
  'Japan': 'JP',
  'South Korea': 'KR',
  'Korea, Republic of': 'KR',
  'Singapore': 'SG',
  'Australia': 'AU',
  'New Zealand': 'NZ',
  'Brazil': 'BR',
  'Argentina': 'AR',
  'Chile': 'CL',
  'Thailand': 'TH',
  'Indonesia': 'ID',
  'India': 'IN',
  'China': 'CN',
  'Russia': 'RU',
  'Russian Federation': 'RU',
  'Nepal': 'NP',
  'Bangladesh': 'BD',
  'Sri Lanka': 'LK',
  'Maldives': 'MV',
  // Abbreviated and alternative names
  'Dominican Rep.': 'DO',
  'Dominican Republic': 'DO',
  'Bosnia and Herzegovina': 'BA',
  'Bosnia & Herzegovina': 'BA',
  'Bosnia': 'BA',
  'Macedonia': 'MK',
  'North Macedonia': 'MK',
  'FYROM': 'MK',
  'South Sudan': 'SS',
  'S. Sudan': 'SS',
  'Central African Republic': 'CF',
  'Central African Rep.': 'CF',
  'C.A.R.': 'CF',
  'CAR': 'CF',
  'Democratic Republic of the Congo': 'CD',
  'DR Congo': 'CD',
  'Congo (Kinshasa)': 'CD',
  'Congo, Democratic Republic of': 'CD',
  'Congo, Dem. Rep.': 'CD',
  'Zaire': 'CD',
  'Republic of the Congo': 'CG',
  'Congo': 'CG',
  'Congo (Brazzaville)': 'CG',
  'Congo, Republic of': 'CG',
  'Congo, Rep.': 'CG',
  'Equatorial Guinea': 'GQ',
  'Eq. Guinea': 'GQ',
  'Equat. Guinea': 'GQ',
  'Somaliland': 'SO-SL',
};

const WorldMap = ({ selectedPassports }) => {
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Helper function to get country code from geography properties
  const getCountryCode = (geo) => {
    const props = geo.properties || {};
    
    // Debug: log first country's properties to see what we have
    if (!window._debugLogged && Object.keys(props).length > 0) {
      console.log('Sample geography properties:', props);
      console.log('Available keys:', Object.keys(props));
      window._debugLogged = true;
    }
    
    // Try different possible property names for ISO country codes
    // Some TopoJSON files use ISO_A2, others use ISO_A3, some use different formats
    let code = props.ISO_A2 || props.iso_a2 || props.ISO_A2_L || props.ISO_A2_E;
    
    // Try ISO_A3 and convert to ISO_A2 if needed (e.g., USA -> US)
    if (!code && props.ISO_A3) {
      const iso3ToIso2 = {
        'USA': 'US', 'CAN': 'CA', 'MEX': 'MX', 'GBR': 'GB', 'FRA': 'FR',
        'DEU': 'DE', 'ITA': 'IT', 'ESP': 'ES', 'JPN': 'JP', 'KOR': 'KR',
        'SGP': 'SG', 'AUS': 'AU', 'NZL': 'NZ', 'BRA': 'BR', 'ARG': 'AR',
        'CHL': 'CL', 'THA': 'TH', 'IDN': 'ID', 'IND': 'IN', 'CHN': 'CN',
        'RUS': 'RU', 'NPL': 'NP', 'BGD': 'BD', 'LKA': 'LK', 'MDV': 'MV',
        'DOM': 'DO', 'BIH': 'BA', 'MKD': 'MK', 'SSD': 'SS', 'CAF': 'CF',
        'COD': 'CD', 'COG': 'CG', 'GNQ': 'GQ'
      };
      code = iso3ToIso2[props.ISO_A3];
    }
    
    // If still no code, try to get it from country name
    if (!code) {
      const name = props.NAME || props.NAME_LONG || props.NAME_EN || props.name || props.ADMIN;
      if (name) {
        // First try exact match in countryNameToCode
        code = countryNameToCode[name];
        
        // If not found, try case-insensitive match in countryNameToCode
        if (!code) {
          code = Object.keys(countryNameToCode).find(
            key => key.toLowerCase() === name.toLowerCase()
          ) ? countryNameToCode[Object.keys(countryNameToCode).find(
            key => key.toLowerCase() === name.toLowerCase()
          )] : null;
        }
        
        // If still not found, try exact match in countryNames
        if (!code) {
          code = Object.keys(countryNames).find(
            key => countryNames[key].toLowerCase() === name.toLowerCase()
          );
        }
        
        // If still not found, try normalized match (remove punctuation, extra spaces)
        if (!code) {
          const normalizedName = name.toLowerCase().replace(/[.,]/g, '').replace(/\s+/g, ' ').trim();
          code = Object.keys(countryNames).find(
            key => {
              const countryName = countryNames[key].toLowerCase().replace(/\s+/g, ' ').trim();
              return countryName === normalizedName;
            }
          );
        }
        
        // If still not found, try smart partial matching for known abbreviations
        if (!code) {
          const normalizedName = name.toLowerCase().replace(/[.,]/g, '').trim();
          // Specific known abbreviations
          if (normalizedName.includes('dominican') && normalizedName.includes('rep')) {
            code = 'DO';
          } else if (normalizedName.includes('bosnia') || normalizedName.includes('herzegovina')) {
            code = 'BA';
          } else if (normalizedName.includes('macedonia') && !normalizedName.includes('north')) {
            code = 'MK';
          } else if (normalizedName.includes('south') && normalizedName.includes('sudan')) {
            code = 'SS';
          } else if (normalizedName.includes('central') && normalizedName.includes('african')) {
            code = 'CF';
          } else if ((normalizedName.includes('democratic') || normalizedName.includes('dr')) && 
                     (normalizedName.includes('congo') || normalizedName.includes('zaire'))) {
            code = 'CD';
          } else if (normalizedName.includes('congo') && !normalizedName.includes('democratic') && 
                     !normalizedName.includes('dr') && !normalizedName.includes('zaire')) {
            code = 'CG';
          } else if (normalizedName.includes('equatorial') && normalizedName.includes('guinea')) {
            code = 'GQ';
          }
        }
      }
    }
    
    return code || null;
  };

  // Helper function to get country name from geography properties
  const getCountryName = (geo) => {
    const props = geo.properties || {};
    const countryCode = getCountryCode(geo);
    const name = props.NAME || props.NAME_LONG || props.NAME_EN || props.name || props.ADMIN;
    return name || countryNames[countryCode] || countryCode || 'Unknown';
  };

  const getCountryColor = (geo) => {
    const countryCode = getCountryCode(geo);
    
    // Handle null or invalid country codes
    if (!countryCode) {
      return VISA_COLORS.default;
    }
    
    if (!selectedPassports || selectedPassports.length === 0) {
      return VISA_COLORS.default;
    }

    // If multiple passports selected, use the best (most favorable) visa status
    let bestStatus = null;
    let bestPriority = Infinity;

    const statusPriority = {
      [VISA_TYPES.RIGHT_OF_ABODE]: 0, // Right of abode is the best status
      [VISA_TYPES.VISA_FREE]: 1,
      [VISA_TYPES.ETA]: 2, // ETA is easier than visa on arrival but requires pre-authorization
      [VISA_TYPES.VISA_ON_ARRIVAL]: 3,
      [VISA_TYPES.E_VISA]: 4,
      [VISA_TYPES.VISA_REQUIRED]: 5,
      [VISA_TYPES.TRAVEL_RESTRICTED]: 6,
    };

    selectedPassports.forEach(passport => {
      const requirement = getVisaRequirement(passport, countryCode);
      if (requirement && statusPriority[requirement] < bestPriority) {
        bestStatus = requirement;
        bestPriority = statusPriority[requirement];
      }
    });

    return bestStatus ? VISA_COLORS[bestStatus] : VISA_COLORS.default;
  };

  const handleMouseEnter = (geo, event) => {
    const countryCode = getCountryCode(geo);
    const countryName = getCountryName(geo);
    
    setHoveredCountry(countryCode);
    
    if (!selectedPassports || selectedPassports.length === 0) {
      setTooltipContent(countryName || 'Unknown Country');
    } else {
      const requirements = selectedPassports.map(passport => {
        const requirement = getVisaRequirement(passport, countryCode);
        const passportName = passportNames[passport] || countryNames[passport] || passport || 'Unknown';
        let statusText = 'No Data';
        if (requirement) {
          if (requirement === VISA_TYPES.ETA) {
            statusText = 'ETA (Electronic Travel Authorization)';
          } else if (requirement === VISA_TYPES.RIGHT_OF_ABODE) {
            statusText = 'Right of Abode';
          } else {
            statusText = requirement.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          }
        }
        return `${passportName}: ${statusText}`;
      }).join('\n');
      
      setTooltipContent(`${countryName || 'Unknown Country'}\n${requirements}`);
    }
    
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
    setTooltipContent('');
  };

  return (
    <div className="relative w-full h-full">
      <ComposableMap
        projectionConfig={{
          scale: 147,
          center: [0, 20]
        }}
        className="w-full h-full"
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl} key={selectedPassports?.join(',') || 'none'}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryCode = getCountryCode(geo);
                const isHovered = hoveredCountry === countryCode;
                const fillColor = getCountryColor(geo);
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fillColor}
                    stroke="#ffffff"
                    strokeWidth={isHovered ? 2 : 0.5}
                    style={{
                      default: {
                        fill: fillColor,
                        outline: 'none',
                        transition: 'fill 0.3s ease',
                      },
                      hover: {
                        fill: fillColor,
                        outline: 'none',
                        stroke: '#000000',
                        strokeWidth: 2,
                        cursor: 'pointer',
                      },
                      pressed: {
                        outline: 'none',
                      },
                    }}
                    onMouseEnter={(event) => handleMouseEnter(geo, event)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      
      {tooltipContent && (
        <div
          className="fixed rounded-lg border border-slate-700/50 bg-slate-800/95 px-4 py-3 text-sm text-slate-100 shadow-xl shadow-black/20 backdrop-blur-sm z-50 pointer-events-none whitespace-pre-line"
          style={{
            left: `${tooltipPosition.x + 10}px`,
            top: `${tooltipPosition.y + 10}px`,
            maxWidth: '300px',
          }}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  );
};

export default WorldMap;
