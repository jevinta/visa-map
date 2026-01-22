// Visa requirement types
export const VISA_TYPES = {
  VISA_FREE: 'visa_free',
  ETA: 'eta', // Electronic Travel Authorization
  VISA_ON_ARRIVAL: 'visa_on_arrival',
  E_VISA: 'e_visa',
  VISA_REQUIRED: 'visa_required',
  TRAVEL_RESTRICTED: 'travel_restricted'
};

// Color mapping for visa types
export const VISA_COLORS = {
  [VISA_TYPES.VISA_FREE]: '#10b981', // green
  [VISA_TYPES.ETA]: '#06b6d4', // cyan/teal for ETA
  [VISA_TYPES.VISA_ON_ARRIVAL]: '#3b82f6', // blue
  [VISA_TYPES.E_VISA]: '#8b5cf6', // purple
  [VISA_TYPES.VISA_REQUIRED]: '#ef4444', // red
  [VISA_TYPES.TRAVEL_RESTRICTED]: '#000000', // black
  default: '#e5e7eb' // gray for no data
};

// Complete list of all countries with ISO 3166-1 alpha-2 codes
export const countryNames = {
  AD: 'Andorra',
  AE: 'United Arab Emirates',
  AF: 'Afghanistan',
  AG: 'Antigua and Barbuda',
  AI: 'Anguilla',
  AL: 'Albania',
  AM: 'Armenia',
  AO: 'Angola',
  AQ: 'Antarctica',
  AR: 'Argentina',
  AS: 'American Samoa',
  AT: 'Austria',
  AU: 'Australia',
  AW: 'Aruba',
  AX: 'Åland Islands',
  AZ: 'Azerbaijan',
  BA: 'Bosnia and Herzegovina',
  BB: 'Barbados',
  BD: 'Bangladesh',
  BE: 'Belgium',
  BF: 'Burkina Faso',
  BG: 'Bulgaria',
  BH: 'Bahrain',
  BI: 'Burundi',
  BJ: 'Benin',
  BL: 'Saint Barthélemy',
  BM: 'Bermuda',
  BN: 'Brunei',
  BO: 'Bolivia',
  BQ: 'Caribbean Netherlands',
  BR: 'Brazil',
  BS: 'Bahamas',
  BT: 'Bhutan',
  BV: 'Bouvet Island',
  BW: 'Botswana',
  BY: 'Belarus',
  BZ: 'Belize',
  CA: 'Canada',
  CC: 'Cocos Islands',
  CD: 'DR Congo',
  CF: 'Central African Republic',
  CG: 'Republic of the Congo',
  CH: 'Switzerland',
  CI: 'Côte d\'Ivoire',
  CK: 'Cook Islands',
  CL: 'Chile',
  CM: 'Cameroon',
  CN: 'China',
  CO: 'Colombia',
  CR: 'Costa Rica',
  CU: 'Cuba',
  CV: 'Cape Verde',
  CW: 'Curaçao',
  CX: 'Christmas Island',
  CY: 'Cyprus',
  CZ: 'Czechia',
  DE: 'Germany',
  DJ: 'Djibouti',
  DK: 'Denmark',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  DZ: 'Algeria',
  EC: 'Ecuador',
  EE: 'Estonia',
  EG: 'Egypt',
  EH: 'Western Sahara',
  ER: 'Eritrea',
  ES: 'Spain',
  ET: 'Ethiopia',
  FI: 'Finland',
  FJ: 'Fiji',
  FK: 'Falkland Islands',
  FM: 'Micronesia',
  FO: 'Faroe Islands',
  FR: 'France',
  GA: 'Gabon',
  GB: 'United Kingdom',
  GD: 'Grenada',
  GE: 'Georgia',
  GF: 'French Guiana',
  GG: 'Guernsey',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GL: 'Greenland',
  GM: 'Gambia',
  GN: 'Guinea',
  GP: 'Guadeloupe',
  GQ: 'Equatorial Guinea',
  GR: 'Greece',
  GS: 'South Georgia',
  GT: 'Guatemala',
  GU: 'Guam',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HK: 'Hong Kong',
  HM: 'Heard Island and McDonald Islands',
  HN: 'Honduras',
  HR: 'Croatia',
  HT: 'Haiti',
  HU: 'Hungary',
  ID: 'Indonesia',
  IE: 'Ireland',
  IL: 'Israel',
  IM: 'Isle of Man',
  IN: 'India',
  IO: 'British Indian Ocean Territory',
  IQ: 'Iraq',
  IR: 'Iran',
  IS: 'Iceland',
  IT: 'Italy',
  JE: 'Jersey',
  JM: 'Jamaica',
  JO: 'Jordan',
  JP: 'Japan',
  KE: 'Kenya',
  KG: 'Kyrgyzstan',
  KH: 'Cambodia',
  KI: 'Kiribati',
  KM: 'Comoros',
  KN: 'Saint Kitts and Nevis',
  KP: 'North Korea',
  KR: 'South Korea',
  KW: 'Kuwait',
  KY: 'Cayman Islands',
  KZ: 'Kazakhstan',
  LA: 'Laos',
  LB: 'Lebanon',
  LC: 'Saint Lucia',
  LI: 'Liechtenstein',
  LK: 'Sri Lanka',
  LR: 'Liberia',
  LS: 'Lesotho',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  LV: 'Latvia',
  LY: 'Libya',
  MA: 'Morocco',
  MC: 'Monaco',
  MD: 'Moldova',
  ME: 'Montenegro',
  MF: 'Saint Martin',
  MG: 'Madagascar',
  MH: 'Marshall Islands',
  MK: 'North Macedonia',
  ML: 'Mali',
  MM: 'Myanmar',
  MN: 'Mongolia',
  MO: 'Macau',
  MP: 'Northern Mariana Islands',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MS: 'Montserrat',
  MT: 'Malta',
  MU: 'Mauritius',
  MV: 'Maldives',
  MW: 'Malawi',
  MX: 'Mexico',
  MY: 'Malaysia',
  MZ: 'Mozambique',
  NA: 'Namibia',
  NC: 'New Caledonia',
  NE: 'Niger',
  NF: 'Norfolk Island',
  NG: 'Nigeria',
  NI: 'Nicaragua',
  NL: 'Netherlands',
  NO: 'Norway',
  NP: 'Nepal',
  NR: 'Nauru',
  NU: 'Niue',
  NZ: 'New Zealand',
  OM: 'Oman',
  PA: 'Panama',
  PE: 'Peru',
  PF: 'French Polynesia',
  PG: 'Papua New Guinea',
  PH: 'Philippines',
  PK: 'Pakistan',
  PL: 'Poland',
  PM: 'Saint Pierre and Miquelon',
  PN: 'Pitcairn Islands',
  PR: 'Puerto Rico',
  PS: 'Palestine',
  PT: 'Portugal',
  PW: 'Palau',
  PY: 'Paraguay',
  QA: 'Qatar',
  RE: 'Réunion',
  RO: 'Romania',
  RS: 'Serbia',
  RU: 'Russia',
  RW: 'Rwanda',
  SA: 'Saudi Arabia',
  SB: 'Solomon Islands',
  SC: 'Seychelles',
  SD: 'Sudan',
  SE: 'Sweden',
  SG: 'Singapore',
  SH: 'Saint Helena',
  SI: 'Slovenia',
  SJ: 'Svalbard and Jan Mayen',
  SK: 'Slovakia',
  SL: 'Sierra Leone',
  SM: 'San Marino',
  SN: 'Senegal',
  SO: 'Somalia',
  SR: 'Suriname',
  SS: 'South Sudan',
  ST: 'São Tomé and Príncipe',
  SV: 'El Salvador',
  SX: 'Sint Maarten',
  SY: 'Syria',
  SZ: 'Eswatini',
  TC: 'Turks and Caicos Islands',
  TD: 'Chad',
  TF: 'French Southern Territories',
  TG: 'Togo',
  TH: 'Thailand',
  TJ: 'Tajikistan',
  TK: 'Tokelau',
  TL: 'Timor-Leste',
  TM: 'Turkmenistan',
  TN: 'Tunisia',
  TO: 'Tonga',
  TR: 'Turkey',
  TT: 'Trinidad and Tobago',
  TV: 'Tuvalu',
  TW: 'Taiwan',
  TZ: 'Tanzania',
  UA: 'Ukraine',
  UG: 'Uganda',
  UM: 'United States Minor Outlying Islands',
  US: 'United States',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VA: 'Vatican City',
  VC: 'Saint Vincent and the Grenadines',
  VE: 'Venezuela',
  VG: 'British Virgin Islands',
  VI: 'United States Virgin Islands',
  VN: 'Vietnam',
  VU: 'Vanuatu',
  WF: 'Wallis and Futuna',
  WS: 'Samoa',
  XK: 'Kosovo',
  YE: 'Yemen',
  YT: 'Mayotte',
  ZA: 'South Africa',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
};

// Passport types - includes both country passports and special passport types
// This is what users can select as their passport
export const passportNames = {
  // All country passports (using ISO codes)
  ...countryNames,
  
  // Special British passport types
  'GB-BNO': 'British National (Overseas)',
  'GB-BOC': 'British Overseas Citizen',
  'GB-BOT': 'British Overseas Territories Citizen',
  'GB-BS': 'British Subject',
  'GB-BP': 'British Protected Person',
  
  // Special Chinese passport types
  'CN-HK': 'Hong Kong SAR',
  'CN-MO': 'Macau SAR',
  'CN-TW': 'Taiwan',
  
  // EU/EEA passports (some countries may have different rules)
  'EU': 'European Union (General)',
  
  // Other special cases
  'UN': 'United Nations Laissez-Passer',
  'XX-REF': 'Refugee Travel Document',
  'XX-STATELESS': 'Stateless Person Document',
};

// Get all passport codes (countries + special passports)
const allPassportCodes = Object.keys(passportNames);

// Initialize visa requirements structure for all passport types
// Each passport will have an empty object that can be populated with visa data
export const visaRequirements = {};

// Initialize empty visa requirement objects for all passports
allPassportCodes.forEach(passportCode => {
  visaRequirements[passportCode] = {};
});

// US Passport holders - Comprehensive visa requirements
// Source: https://en.wikipedia.org/wiki/Visa_requirements_for_United_States_citizens
visaRequirements.US = {
  ...visaRequirements.US,
  // Americas
  CA: VISA_TYPES.VISA_FREE, // Canada
  MX: VISA_TYPES.VISA_FREE, // Mexico
  BR: VISA_TYPES.VISA_FREE, // Brazil
  AR: VISA_TYPES.VISA_FREE, // Argentina
  CL: VISA_TYPES.VISA_FREE, // Chile
  CO: VISA_TYPES.VISA_FREE, // Colombia
  PE: VISA_TYPES.VISA_FREE, // Peru
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  PY: VISA_TYPES.VISA_FREE, // Paraguay
  BO: VISA_TYPES.VISA_FREE, // Bolivia
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  CU: VISA_TYPES.VISA_REQUIRED, // Cuba
  GY: VISA_TYPES.VISA_FREE, // Guyana
  SR: VISA_TYPES.VISA_FREE, // Suriname
  GF: VISA_TYPES.VISA_FREE, // French Guiana
  // Caribbean
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  DM: VISA_TYPES.VISA_FREE, // Dominica
  GD: VISA_TYPES.VISA_FREE, // Grenada
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  KN: VISA_TYPES.ETA, // Saint Kitts and Nevis (ETA required)
  HT: VISA_TYPES.VISA_FREE, // Haiti
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  CW: VISA_TYPES.VISA_FREE, // Curaçao
  AW: VISA_TYPES.VISA_FREE, // Aruba
  // Europe
  GB: VISA_TYPES.ETA, // United Kingdom (ETA required)
  IE: VISA_TYPES.VISA_FREE, // Ireland
  FR: VISA_TYPES.VISA_FREE, // France
  DE: VISA_TYPES.VISA_FREE, // Germany
  IT: VISA_TYPES.VISA_FREE, // Italy
  ES: VISA_TYPES.VISA_FREE, // Spain
  PT: VISA_TYPES.VISA_FREE, // Portugal
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  BE: VISA_TYPES.VISA_FREE, // Belgium
  AT: VISA_TYPES.VISA_FREE, // Austria
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  SE: VISA_TYPES.VISA_FREE, // Sweden
  NO: VISA_TYPES.VISA_FREE, // Norway
  DK: VISA_TYPES.VISA_FREE, // Denmark
  FI: VISA_TYPES.VISA_FREE, // Finland
  IS: VISA_TYPES.VISA_FREE, // Iceland
  GR: VISA_TYPES.VISA_FREE, // Greece
  PL: VISA_TYPES.VISA_FREE, // Poland
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  HU: VISA_TYPES.VISA_FREE, // Hungary
  RO: VISA_TYPES.VISA_FREE, // Romania
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  HR: VISA_TYPES.VISA_FREE, // Croatia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LV: VISA_TYPES.VISA_FREE, // Latvia
  EE: VISA_TYPES.VISA_FREE, // Estonia
  MT: VISA_TYPES.VISA_FREE, // Malta
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MC: VISA_TYPES.VISA_FREE, // Monaco
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  SM: VISA_TYPES.VISA_FREE, // San Marino
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  AD: VISA_TYPES.VISA_FREE, // Andorra
  RS: VISA_TYPES.VISA_FREE, // Serbia
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  AL: VISA_TYPES.VISA_FREE, // Albania
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  XK: VISA_TYPES.VISA_FREE, // Kosovo
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  MD: VISA_TYPES.VISA_FREE, // Moldova
  GE: VISA_TYPES.VISA_FREE, // Georgia
  AM: VISA_TYPES.VISA_FREE, // Armenia
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  // Asia
  JP: VISA_TYPES.VISA_FREE, // Japan
  KR: VISA_TYPES.VISA_FREE, // South Korea
  SG: VISA_TYPES.VISA_FREE, // Singapore
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  TH: VISA_TYPES.VISA_FREE, // Thailand
  ID: VISA_TYPES.VISA_FREE, // Indonesia
  PH: VISA_TYPES.VISA_FREE, // Philippines
  VN: VISA_TYPES.VISA_FREE, // Vietnam
  KH: VISA_TYPES.VISA_FREE, // Cambodia
  LA: VISA_TYPES.VISA_FREE, // Laos
  MM: VISA_TYPES.VISA_FREE, // Myanmar
  BN: VISA_TYPES.VISA_FREE, // Brunei
  TL: VISA_TYPES.VISA_FREE, // Timor-Leste
  TW: VISA_TYPES.VISA_FREE, // Taiwan
  HK: VISA_TYPES.VISA_FREE, // Hong Kong
  MO: VISA_TYPES.VISA_FREE, // Macau
  IN: VISA_TYPES.E_VISA, // India
  CN: VISA_TYPES.VISA_REQUIRED, // China
  PK: VISA_TYPES.VISA_REQUIRED, // Pakistan
  BD: VISA_TYPES.VISA_REQUIRED, // Bangladesh
  LK: VISA_TYPES.VISA_FREE, // Sri Lanka
  MV: VISA_TYPES.VISA_FREE, // Maldives
  NP: VISA_TYPES.VISA_FREE, // Nepal
  BT: VISA_TYPES.VISA_REQUIRED, // Bhutan
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  IR: VISA_TYPES.VISA_REQUIRED, // Iran
  IQ: VISA_TYPES.VISA_REQUIRED, // Iraq
  SY: VISA_TYPES.VISA_REQUIRED, // Syria
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  AE: VISA_TYPES.VISA_FREE, // UAE
  QA: VISA_TYPES.VISA_FREE, // Qatar
  KW: VISA_TYPES.VISA_FREE, // Kuwait
  BH: VISA_TYPES.VISA_FREE, // Bahrain
  OM: VISA_TYPES.VISA_FREE, // Oman
  JO: VISA_TYPES.VISA_FREE, // Jordan
  IL: VISA_TYPES.ETA, // Israel (ETA required)
  PS: VISA_TYPES.VISA_FREE, // Palestine
  LB: VISA_TYPES.VISA_FREE, // Lebanon
  TR: VISA_TYPES.VISA_FREE, // Turkey
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  MN: VISA_TYPES.VISA_FREE, // Mongolia
  // Oceania
  AU: VISA_TYPES.ETA, // Australia (ETA required)
  NZ: VISA_TYPES.ETA, // New Zealand (NZeTA required)
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  PG: VISA_TYPES.VISA_FREE, // Papua New Guinea
  SB: VISA_TYPES.VISA_FREE, // Solomon Islands
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  NC: VISA_TYPES.VISA_FREE, // New Caledonia
  PF: VISA_TYPES.VISA_FREE, // French Polynesia
  WS: VISA_TYPES.VISA_FREE, // Samoa
  TO: VISA_TYPES.VISA_FREE, // Tonga
  PW: VISA_TYPES.VISA_FREE, // Palau
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MH: VISA_TYPES.VISA_FREE, // Marshall Islands
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  TV: VISA_TYPES.VISA_FREE, // Tuvalu
  NR: VISA_TYPES.VISA_FREE, // Nauru
  // Africa
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  MA: VISA_TYPES.VISA_FREE, // Morocco
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  EG: VISA_TYPES.VISA_FREE, // Egypt
  KE: VISA_TYPES.ETA, // Kenya (ETA required)
  TZ: VISA_TYPES.VISA_FREE, // Tanzania
  UG: VISA_TYPES.VISA_FREE, // Uganda
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  ET: VISA_TYPES.VISA_FREE, // Ethiopia
  GH: VISA_TYPES.VISA_FREE, // Ghana
  SN: VISA_TYPES.VISA_FREE, // Senegal
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GW: VISA_TYPES.VISA_FREE, // Guinea-Bissau
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  ST: VISA_TYPES.VISA_FREE, // São Tomé and Príncipe
  GA: VISA_TYPES.VISA_FREE, // Gabon
  CG: VISA_TYPES.VISA_FREE, // Republic of the Congo
  CM: VISA_TYPES.VISA_FREE, // Cameroon
  GQ: VISA_TYPES.VISA_FREE, // Equatorial Guinea
  BI: VISA_TYPES.VISA_FREE, // Burundi
  MW: VISA_TYPES.VISA_FREE, // Malawi
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  BW: VISA_TYPES.VISA_FREE, // Botswana
  NA: VISA_TYPES.VISA_FREE, // Namibia
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  KM: VISA_TYPES.VISA_FREE, // Comoros
  MG: VISA_TYPES.VISA_FREE, // Madagascar
  MZ: VISA_TYPES.ETA, // Mozambique (ETA required)
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
  CD: VISA_TYPES.VISA_REQUIRED, // DR Congo
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SS: VISA_TYPES.VISA_REQUIRED, // South Sudan
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  DJ: VISA_TYPES.VISA_REQUIRED, // Djibouti
  SO: VISA_TYPES.VISA_REQUIRED, // Somalia
  LY: VISA_TYPES.VISA_REQUIRED, // Libya
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  BF: VISA_TYPES.VISA_REQUIRED, // Burkina Faso
  CI: VISA_TYPES.VISA_REQUIRED, // Côte d'Ivoire
  GN: VISA_TYPES.VISA_REQUIRED, // Guinea
  SL: VISA_TYPES.VISA_REQUIRED, // Sierra Leone
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  NG: VISA_TYPES.VISA_REQUIRED, // Nigeria
  BJ: VISA_TYPES.VISA_REQUIRED, // Benin
  TG: VISA_TYPES.VISA_REQUIRED, // Togo
};

// UK Passport holders
visaRequirements.GB = {
  ...visaRequirements.GB,
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
};

// EU Passport holders (using FR as example)
visaRequirements.FR = {
  ...visaRequirements.FR,
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
};

// Canadian Passport holders
visaRequirements.CA = {
  ...visaRequirements.CA,
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
};

// Australian Passport holders
visaRequirements.AU = {
  ...visaRequirements.AU,
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
};

// Japanese Passport holders
visaRequirements.JP = {
  ...visaRequirements.JP,
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
};

// Indian Passport holders
visaRequirements.IN = {
  ...visaRequirements.IN,
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
};

// Chinese Passport holders
visaRequirements.CN = {
  ...visaRequirements.CN,
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
};

// Get visa requirement for a passport holder visiting a country
export function getVisaRequirement(passportCode, countryCode) {
  if (!passportCode || !countryCode) return null;
  
  // Handle special passport codes that map to countries
  let normalizedPassportCode = passportCode;
  if (passportCode === 'CN-HK') normalizedPassportCode = 'HK';
  if (passportCode === 'CN-MO') normalizedPassportCode = 'MO';
  if (passportCode === 'CN-TW') normalizedPassportCode = 'TW';
  
  // Same country check (handle special cases)
  if (normalizedPassportCode === countryCode) return VISA_TYPES.VISA_FREE;
  if (passportCode === countryCode) return VISA_TYPES.VISA_FREE;
  
  const passportData = visaRequirements[passportCode];
  if (!passportData) return null;
  
  return passportData[countryCode] || null;
}
