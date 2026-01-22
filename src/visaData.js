// Visa requirement types
export const VISA_TYPES = {
  VISA_FREE: 'visa_free',
  VISA_ON_ARRIVAL: 'visa_on_arrival',
  E_VISA: 'e_visa',
  VISA_REQUIRED: 'visa_required',
  NOT_ALLOWED: 'not_allowed'
};

// Color mapping for visa types
export const VISA_COLORS = {
  [VISA_TYPES.VISA_FREE]: '#10b981', // green
  [VISA_TYPES.VISA_ON_ARRIVAL]: '#3b82f6', // blue
  [VISA_TYPES.E_VISA]: '#8b5cf6', // purple
  [VISA_TYPES.VISA_REQUIRED]: '#f59e0b', // amber
  [VISA_TYPES.NOT_ALLOWED]: '#ef4444', // red
  default: '#e5e7eb' // gray for no data
};

// Sample visa data structure
// Format: { countryCode: { passportCode: visaType } }
// This is a simplified sample - you'll want to expand this with real data
export const visaRequirements = {
  // US Passport holders
  US: {
    CA: VISA_TYPES.VISA_FREE, // Canada
    MX: VISA_TYPES.VISA_FREE, // Mexico
    GB: VISA_TYPES.VISA_FREE, // UK
    FR: VISA_TYPES.VISA_FREE, // France
    DE: VISA_TYPES.VISA_FREE, // Germany
    IT: VISA_TYPES.VISA_FREE, // Italy
    ES: VISA_TYPES.VISA_FREE, // Spain
    JP: VISA_TYPES.VISA_FREE, // Japan
    KR: VISA_TYPES.VISA_FREE, // South Korea
    SG: VISA_TYPES.VISA_FREE, // Singapore
    AU: VISA_TYPES.VISA_FREE, // Australia
    NZ: VISA_TYPES.VISA_FREE, // New Zealand
    BR: VISA_TYPES.VISA_FREE, // Brazil
    AR: VISA_TYPES.VISA_FREE, // Argentina
    CL: VISA_TYPES.VISA_FREE, // Chile
    TH: VISA_TYPES.VISA_ON_ARRIVAL, // Thailand
    ID: VISA_TYPES.VISA_FREE, // Indonesia
    IN: VISA_TYPES.E_VISA, // India
    CN: VISA_TYPES.VISA_REQUIRED, // China
    RU: VISA_TYPES.VISA_REQUIRED, // Russia
  },
  // UK Passport holders
  GB: {
    US: VISA_TYPES.VISA_FREE,
    CA: VISA_TYPES.VISA_FREE,
    MX: VISA_TYPES.VISA_FREE,
    FR: VISA_TYPES.VISA_FREE,
    DE: VISA_TYPES.VISA_FREE,
    IT: VISA_TYPES.VISA_FREE,
    ES: VISA_TYPES.VISA_FREE,
    JP: VISA_TYPES.VISA_FREE,
    KR: VISA_TYPES.VISA_FREE,
    SG: VISA_TYPES.VISA_FREE,
    AU: VISA_TYPES.VISA_FREE,
    NZ: VISA_TYPES.VISA_FREE,
    BR: VISA_TYPES.VISA_FREE,
    TH: VISA_TYPES.VISA_ON_ARRIVAL,
    ID: VISA_TYPES.VISA_FREE,
    IN: VISA_TYPES.E_VISA,
    CN: VISA_TYPES.VISA_REQUIRED,
    RU: VISA_TYPES.VISA_REQUIRED,
  },
  // EU Passport holders (using FR as example)
  FR: {
    US: VISA_TYPES.VISA_FREE,
    CA: VISA_TYPES.VISA_FREE,
    MX: VISA_TYPES.VISA_FREE,
    GB: VISA_TYPES.VISA_FREE,
    DE: VISA_TYPES.VISA_FREE,
    IT: VISA_TYPES.VISA_FREE,
    ES: VISA_TYPES.VISA_FREE,
    JP: VISA_TYPES.VISA_FREE,
    KR: VISA_TYPES.VISA_FREE,
    SG: VISA_TYPES.VISA_FREE,
    AU: VISA_TYPES.VISA_FREE,
    NZ: VISA_TYPES.VISA_FREE,
    BR: VISA_TYPES.VISA_FREE,
    TH: VISA_TYPES.VISA_ON_ARRIVAL,
    ID: VISA_TYPES.VISA_FREE,
    IN: VISA_TYPES.E_VISA,
    CN: VISA_TYPES.VISA_REQUIRED,
    RU: VISA_TYPES.VISA_REQUIRED,
  },
  // Canadian Passport holders
  CA: {
    US: VISA_TYPES.VISA_FREE,
    MX: VISA_TYPES.VISA_FREE,
    GB: VISA_TYPES.VISA_FREE,
    FR: VISA_TYPES.VISA_FREE,
    DE: VISA_TYPES.VISA_FREE,
    IT: VISA_TYPES.VISA_FREE,
    ES: VISA_TYPES.VISA_FREE,
    JP: VISA_TYPES.VISA_FREE,
    KR: VISA_TYPES.VISA_FREE,
    SG: VISA_TYPES.VISA_FREE,
    AU: VISA_TYPES.VISA_FREE,
    NZ: VISA_TYPES.VISA_FREE,
    BR: VISA_TYPES.VISA_FREE,
    TH: VISA_TYPES.VISA_ON_ARRIVAL,
    ID: VISA_TYPES.VISA_FREE,
    IN: VISA_TYPES.E_VISA,
    CN: VISA_TYPES.VISA_REQUIRED,
    RU: VISA_TYPES.VISA_REQUIRED,
  },
  // Australian Passport holders
  AU: {
    US: VISA_TYPES.VISA_FREE,
    CA: VISA_TYPES.VISA_FREE,
    MX: VISA_TYPES.VISA_FREE,
    GB: VISA_TYPES.VISA_FREE,
    FR: VISA_TYPES.VISA_FREE,
    DE: VISA_TYPES.VISA_FREE,
    IT: VISA_TYPES.VISA_FREE,
    ES: VISA_TYPES.VISA_FREE,
    JP: VISA_TYPES.VISA_FREE,
    KR: VISA_TYPES.VISA_FREE,
    SG: VISA_TYPES.VISA_FREE,
    NZ: VISA_TYPES.VISA_FREE,
    BR: VISA_TYPES.VISA_FREE,
    TH: VISA_TYPES.VISA_ON_ARRIVAL,
    ID: VISA_TYPES.VISA_FREE,
    IN: VISA_TYPES.E_VISA,
    CN: VISA_TYPES.VISA_REQUIRED,
    RU: VISA_TYPES.VISA_REQUIRED,
  },
  // Japanese Passport holders
  JP: {
    US: VISA_TYPES.VISA_FREE,
    CA: VISA_TYPES.VISA_FREE,
    MX: VISA_TYPES.VISA_FREE,
    GB: VISA_TYPES.VISA_FREE,
    FR: VISA_TYPES.VISA_FREE,
    DE: VISA_TYPES.VISA_FREE,
    IT: VISA_TYPES.VISA_FREE,
    ES: VISA_TYPES.VISA_FREE,
    KR: VISA_TYPES.VISA_FREE,
    SG: VISA_TYPES.VISA_FREE,
    AU: VISA_TYPES.VISA_FREE,
    NZ: VISA_TYPES.VISA_FREE,
    BR: VISA_TYPES.VISA_FREE,
    TH: VISA_TYPES.VISA_ON_ARRIVAL,
    ID: VISA_TYPES.VISA_FREE,
    IN: VISA_TYPES.E_VISA,
    CN: VISA_TYPES.VISA_REQUIRED,
    RU: VISA_TYPES.VISA_REQUIRED,
  },
  // Indian Passport holders
  IN: {
    US: VISA_TYPES.VISA_REQUIRED,
    CA: VISA_TYPES.VISA_REQUIRED,
    GB: VISA_TYPES.VISA_REQUIRED,
    FR: VISA_TYPES.VISA_REQUIRED,
    DE: VISA_TYPES.VISA_REQUIRED,
    IT: VISA_TYPES.VISA_REQUIRED,
    ES: VISA_TYPES.VISA_REQUIRED,
    JP: VISA_TYPES.VISA_REQUIRED,
    TH: VISA_TYPES.VISA_ON_ARRIVAL,
    ID: VISA_TYPES.VISA_FREE,
    SG: VISA_TYPES.VISA_FREE,
    NP: VISA_TYPES.VISA_FREE, // Nepal
    BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
    LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka
    MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
    CN: VISA_TYPES.VISA_REQUIRED,
    RU: VISA_TYPES.VISA_REQUIRED,
  },
  // Chinese Passport holders
  CN: {
    US: VISA_TYPES.VISA_REQUIRED,
    CA: VISA_TYPES.VISA_REQUIRED,
    GB: VISA_TYPES.VISA_REQUIRED,
    FR: VISA_TYPES.VISA_REQUIRED,
    DE: VISA_TYPES.VISA_REQUIRED,
    IT: VISA_TYPES.VISA_REQUIRED,
    ES: VISA_TYPES.VISA_REQUIRED,
    JP: VISA_TYPES.VISA_REQUIRED,
    TH: VISA_TYPES.VISA_ON_ARRIVAL,
    ID: VISA_TYPES.VISA_FREE,
    SG: VISA_TYPES.VISA_FREE,
    KR: VISA_TYPES.VISA_FREE,
    RU: VISA_TYPES.VISA_FREE,
    IN: VISA_TYPES.E_VISA,
  },
};

// Country names mapping
export const countryNames = {
  US: 'United States',
  CA: 'Canada',
  MX: 'Mexico',
  GB: 'United Kingdom',
  FR: 'France',
  DE: 'Germany',
  IT: 'Italy',
  ES: 'Spain',
  JP: 'Japan',
  KR: 'South Korea',
  SG: 'Singapore',
  AU: 'Australia',
  NZ: 'New Zealand',
  BR: 'Brazil',
  AR: 'Argentina',
  CL: 'Chile',
  TH: 'Thailand',
  ID: 'Indonesia',
  IN: 'India',
  CN: 'China',
  RU: 'Russia',
  NP: 'Nepal',
  BD: 'Bangladesh',
  LK: 'Sri Lanka',
  MV: 'Maldives',
};

// Get visa requirement for a passport holder visiting a country
export function getVisaRequirement(passportCode, countryCode) {
  if (!passportCode || !countryCode) return null;
  if (passportCode === countryCode) return VISA_TYPES.VISA_FREE; // Same country
  
  const passportData = visaRequirements[passportCode];
  if (!passportData) return null;
  
  return passportData[countryCode] || null;
}
