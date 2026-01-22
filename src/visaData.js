// Visa requirement types
export const VISA_TYPES = {
  VISA_FREE: 'visa_free',
  RIGHT_OF_ABODE: 'right_of_abode', // Right of abode / Compact of Free Association
  ETA: 'eta', // Electronic Travel Authorization
  VISA_ON_ARRIVAL: 'visa_on_arrival',
  E_VISA: 'e_visa',
  VISA_REQUIRED: 'visa_required',
  TRAVEL_RESTRICTED: 'travel_restricted'
};

// Color mapping for visa types
export const VISA_COLORS = {
  [VISA_TYPES.VISA_FREE]: '#10b981', // green
  [VISA_TYPES.RIGHT_OF_ABODE]: '#22c55e', // bright green for right of abode
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
  'SO-SL': 'Somaliland', // Somaliland (unrecognized state)
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

// All destination country codes for default coverage
const allCountryCodes = Object.keys(countryNames);

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
  BR: VISA_TYPES.E_VISA, // Brazil (e-visa available)
  AR: VISA_TYPES.VISA_FREE, // Argentina
  CL: VISA_TYPES.VISA_FREE, // Chile
  CO: VISA_TYPES.VISA_FREE, // Colombia
  PE: VISA_TYPES.VISA_FREE, // Peru
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  PY: VISA_TYPES.VISA_FREE, // Paraguay
  BO: VISA_TYPES.VISA_FREE, // Bolivia
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  CU: VISA_TYPES.E_VISA, // Cuba (e-visa available)
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
  AZ: VISA_TYPES.VISA_ON_ARRIVAL, // Azerbaijan (visa on arrival)
  BY: VISA_TYPES.E_VISA, // Belarus (e-visa available)
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  // Asia
  JP: VISA_TYPES.VISA_FREE, // Japan
  KR: VISA_TYPES.VISA_FREE, // South Korea
  SG: VISA_TYPES.VISA_FREE, // Singapore
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  TH: VISA_TYPES.VISA_FREE, // Thailand
  ID: VISA_TYPES.VISA_FREE, // Indonesia
  PH: VISA_TYPES.VISA_FREE, // Philippines
  VN: VISA_TYPES.E_VISA, // Vietnam (e-visa available)
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia (visa on arrival)
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos (visa on arrival)
  MM: VISA_TYPES.E_VISA, // Myanmar (e-visa available)
  BN: VISA_TYPES.VISA_FREE, // Brunei
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste (visa on arrival)
  TW: VISA_TYPES.VISA_FREE, // Taiwan
  HK: VISA_TYPES.VISA_FREE, // Hong Kong
  MO: VISA_TYPES.VISA_FREE, // Macau
  IN: VISA_TYPES.E_VISA, // India
  CN: VISA_TYPES.VISA_REQUIRED, // China
  PK: VISA_TYPES.E_VISA, // Pakistan (e-visa available)
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh (visa on arrival)
  LK: VISA_TYPES.VISA_FREE, // Sri Lanka
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives (visa on arrival)
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal (visa on arrival)
  BT: VISA_TYPES.E_VISA, // Bhutan (e-visa available)
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  KP: VISA_TYPES.TRAVEL_RESTRICTED, // North Korea (travel restricted)
  IR: VISA_TYPES.VISA_REQUIRED, // Iran
  IQ: VISA_TYPES.E_VISA, // Iraq (e-visa available)
  SY: VISA_TYPES.E_VISA, // Syria (e-visa available)
  YE: VISA_TYPES.E_VISA, // Yemen (e-visa available)
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia (visa on arrival)
  AE: VISA_TYPES.VISA_FREE, // UAE
  QA: VISA_TYPES.VISA_FREE, // Qatar
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait (visa on arrival)
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain (visa on arrival)
  OM: VISA_TYPES.VISA_FREE, // Oman
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan (visa on arrival)
  IL: VISA_TYPES.ETA, // Israel (ETA required)
  PS: VISA_TYPES.VISA_FREE, // Palestine
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon (visa on arrival)
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
  PG: VISA_TYPES.E_VISA, // Papua New Guinea (e-visa available)
  SB: VISA_TYPES.VISA_ON_ARRIVAL, // Solomon Islands (visa on arrival)
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  NC: VISA_TYPES.VISA_FREE, // New Caledonia
  PF: VISA_TYPES.VISA_FREE, // French Polynesia
  WS: VISA_TYPES.VISA_FREE, // Samoa
  TO: VISA_TYPES.VISA_ON_ARRIVAL, // Tonga (visa on arrival)
  PW: VISA_TYPES.RIGHT_OF_ABODE, // Palau (Compact of Free Association)
  FM: VISA_TYPES.RIGHT_OF_ABODE, // Micronesia (Compact of Free Association)
  MH: VISA_TYPES.RIGHT_OF_ABODE, // Marshall Islands (Compact of Free Association)
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu (visa on arrival)
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  // Africa
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  MA: VISA_TYPES.VISA_FREE, // Morocco
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt (visa on arrival)
  KE: VISA_TYPES.ETA, // Kenya (eTA required)
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania (visa on arrival)
  UG: VISA_TYPES.E_VISA, // Uganda (e-visa available)
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda (visa on arrival)
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia (visa on arrival)
  GH: VISA_TYPES.E_VISA, // Ghana (e-visa available)
  SN: VISA_TYPES.VISA_FREE, // Senegal
  GM: VISA_TYPES.VISA_ON_ARRIVAL, // Gambia (visa on arrival)
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau (visa on arrival)
  CV: VISA_TYPES.ETA, // Cape Verde (ETA required)
  ST: VISA_TYPES.VISA_FREE, // São Tomé and Príncipe
  GA: VISA_TYPES.E_VISA, // Gabon (e-visa available)
  CG: VISA_TYPES.E_VISA, // Republic of the Congo (e-visa available)
  CM: VISA_TYPES.E_VISA, // Cameroon (e-visa available)
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea (e-visa available)
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi (visa on arrival)
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi (visa on arrival)
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  BW: VISA_TYPES.VISA_FREE, // Botswana
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia (visa on arrival)
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  SC: VISA_TYPES.ETA, // Seychelles (ETA required)
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros (visa on arrival)
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar (visa on arrival)
  MZ: VISA_TYPES.ETA, // Mozambique (ETA required)
  AO: VISA_TYPES.VISA_FREE, // Angola
  CD: VISA_TYPES.E_VISA, // DR Congo (e-visa available)
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.TRAVEL_RESTRICTED, // Chad (travel restricted)
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SS: VISA_TYPES.E_VISA, // South Sudan (e-visa available)
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  DJ: VISA_TYPES.E_VISA, // Djibouti (e-visa available)
  SO: VISA_TYPES.E_VISA, // Somalia (e-visa available)
  'SO-SL': VISA_TYPES.VISA_ON_ARRIVAL, // Somaliland (visa on arrival)
  LY: VISA_TYPES.E_VISA, // Libya (e-visa available)
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  MR: VISA_TYPES.E_VISA, // Mauritania (e-visa available)
  NE: VISA_TYPES.TRAVEL_RESTRICTED, // Niger (travel restricted)
  ML: VISA_TYPES.TRAVEL_RESTRICTED, // Mali (travel restricted)
  BF: VISA_TYPES.TRAVEL_RESTRICTED, // Burkina Faso (travel restricted)
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire (e-visa available)
  GN: VISA_TYPES.E_VISA, // Guinea (e-visa available)
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone (visa on arrival)
  LR: VISA_TYPES.E_VISA, // Liberia (e-visa available)
  NG: VISA_TYPES.E_VISA, // Nigeria (e-visa available)
  BJ: VISA_TYPES.E_VISA, // Benin (e-visa available)
  TG: VISA_TYPES.E_VISA, // Togo (e-visa available)
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe (visa on arrival)
  // Remaining countries - visa free
  AI: VISA_TYPES.VISA_FREE, // Anguilla
  AS: VISA_TYPES.VISA_FREE, // American Samoa
  AX: VISA_TYPES.VISA_FREE, // Åland Islands
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BL: VISA_TYPES.VISA_FREE, // Saint Barthélemy
  BM: VISA_TYPES.VISA_FREE, // Bermuda
  BQ: VISA_TYPES.VISA_FREE, // Caribbean Netherlands
  BV: VISA_TYPES.VISA_FREE, // Bouvet Island
  CC: VISA_TYPES.VISA_FREE, // Cocos Islands
  CK: VISA_TYPES.VISA_FREE, // Cook Islands
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  CX: VISA_TYPES.VISA_FREE, // Christmas Island
  EH: VISA_TYPES.VISA_FREE, // Western Sahara
  FK: VISA_TYPES.VISA_FREE, // Falkland Islands
  FO: VISA_TYPES.VISA_FREE, // Faroe Islands
  GG: VISA_TYPES.VISA_FREE, // Guernsey
  GI: VISA_TYPES.VISA_FREE, // Gibraltar
  GL: VISA_TYPES.VISA_FREE, // Greenland
  GP: VISA_TYPES.VISA_FREE, // Guadeloupe
  GS: VISA_TYPES.VISA_FREE, // South Georgia
  GT: VISA_TYPES.VISA_FREE, // Guatemala
  GU: VISA_TYPES.VISA_FREE, // Guam
  HN: VISA_TYPES.VISA_FREE, // Honduras
  HM: VISA_TYPES.VISA_FREE, // Heard Island and McDonald Islands
  IM: VISA_TYPES.VISA_FREE, // Isle of Man
  IO: VISA_TYPES.VISA_FREE, // British Indian Ocean Territory
  JE: VISA_TYPES.VISA_FREE, // Jersey
  KY: VISA_TYPES.VISA_FREE, // Cayman Islands
  MF: VISA_TYPES.VISA_FREE, // Saint Martin
  MP: VISA_TYPES.VISA_FREE, // Northern Mariana Islands
  MQ: VISA_TYPES.VISA_FREE, // Martinique
  MS: VISA_TYPES.VISA_FREE, // Montserrat
  NF: VISA_TYPES.VISA_FREE, // Norfolk Island
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  NU: VISA_TYPES.VISA_FREE, // Niue
  PA: VISA_TYPES.VISA_FREE, // Panama
  PM: VISA_TYPES.VISA_FREE, // Saint Pierre and Miquelon
  PN: VISA_TYPES.VISA_FREE, // Pitcairn Islands
  PR: VISA_TYPES.VISA_FREE, // Puerto Rico
  RE: VISA_TYPES.VISA_FREE, // Réunion
  SH: VISA_TYPES.VISA_FREE, // Saint Helena
  SJ: VISA_TYPES.VISA_FREE, // Svalbard and Jan Mayen
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  SX: VISA_TYPES.VISA_FREE, // Sint Maarten
  TC: VISA_TYPES.VISA_FREE, // Turks and Caicos Islands
  TF: VISA_TYPES.VISA_FREE, // French Southern Territories
  TK: VISA_TYPES.VISA_FREE, // Tokelau
  UM: VISA_TYPES.VISA_FREE, // United States Minor Outlying Islands
  VG: VISA_TYPES.VISA_FREE, // British Virgin Islands
  VI: VISA_TYPES.VISA_FREE, // United States Virgin Islands
  WF: VISA_TYPES.VISA_FREE, // Wallis and Futuna
  YT: VISA_TYPES.VISA_FREE, // Mayotte
};

// UK Passport holders
// GB Passport holders
// Source: Wikipedia
visaRequirements.GB = {
  ...visaRequirements.GB,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AO: VISA_TYPES.VISA_FREE, // Angola
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
  AM: VISA_TYPES.VISA_FREE, // Armenia
  AT: VISA_TYPES.VISA_FREE, // Austria
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BO: VISA_TYPES.VISA_FREE, // Bolivia
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BN: VISA_TYPES.VISA_FREE, // Brunei
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  CL: VISA_TYPES.VISA_FREE, // Chile
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  EE: VISA_TYPES.VISA_FREE, // Estonia
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GE: VISA_TYPES.VISA_FREE, // Georgia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GR: VISA_TYPES.VISA_FREE, // Greece
  GD: VISA_TYPES.VISA_FREE, // Grenada
  GT: VISA_TYPES.VISA_FREE, // Guatemala
  GY: VISA_TYPES.VISA_FREE, // Guyana
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IT: VISA_TYPES.VISA_FREE, // Italy
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  JP: VISA_TYPES.VISA_FREE, // Japan
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  KR: VISA_TYPES.VISA_FREE, // South Korea
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  LV: VISA_TYPES.VISA_FREE, // Latvia
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MT: VISA_TYPES.VISA_FREE, // Malta
  MH: VISA_TYPES.VISA_FREE, // Marshall Islands
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  MX: VISA_TYPES.VISA_FREE, // Mexico
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MC: VISA_TYPES.VISA_FREE, // Monaco
  MN: VISA_TYPES.VISA_FREE, // Mongolia
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  MA: VISA_TYPES.VISA_FREE, // Morocco
  MZ: VISA_TYPES.VISA_FREE, // Mozambique
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  NO: VISA_TYPES.VISA_FREE, // Norway
  OM: VISA_TYPES.VISA_FREE, // Oman
  PA: VISA_TYPES.VISA_FREE, // Panama
  PY: VISA_TYPES.VISA_FREE, // Paraguay
  PE: VISA_TYPES.VISA_FREE, // Peru
  PH: VISA_TYPES.VISA_FREE, // Philippines
  PL: VISA_TYPES.VISA_FREE, // Poland
  PT: VISA_TYPES.VISA_FREE, // Portugal
  QA: VISA_TYPES.VISA_FREE, // Qatar
  RO: VISA_TYPES.VISA_FREE, // Romania
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  SM: VISA_TYPES.VISA_FREE, // San Marino
  ST: VISA_TYPES.VISA_FREE, // São Tomé and Príncipe
  SN: VISA_TYPES.VISA_FREE, // Senegal
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  SB: VISA_TYPES.VISA_FREE, // Solomon Islands
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TW: VISA_TYPES.VISA_FREE, // Taiwan
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  VN: VISA_TYPES.VISA_FREE, // Vietnam
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  AU: VISA_TYPES.ETA, // Australia
  CA: VISA_TYPES.ETA, // Canada
  IL: VISA_TYPES.ETA, // Israel
  KE: VISA_TYPES.ETA, // Kenya
  LK: VISA_TYPES.ETA, // Sri Lanka
  NZ: VISA_TYPES.ETA, // New Zealand
  PK: VISA_TYPES.ETA, // Pakistan
  KN: VISA_TYPES.ETA, // Saint Kitts and Nevis
  SC: VISA_TYPES.ETA, // Seychelles
  US: VISA_TYPES.ETA, // United States
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  ID: VISA_TYPES.VISA_ON_ARRIVAL, // Indonesia
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  PG: VISA_TYPES.VISA_ON_ARRIVAL, // Papua New Guinea
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TO: VISA_TYPES.VISA_ON_ARRIVAL, // Tonga
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  IR: VISA_TYPES.VISA_REQUIRED, // Iran
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
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

// Albanian Passport holders - ETA countries
visaRequirements.AL = {
  ...visaRequirements.AL,
  SC: VISA_TYPES.ETA, // Seychelles
  KE: VISA_TYPES.ETA, // Kenya
  KN: VISA_TYPES.ETA, // Saint Kitts and Nevis
  IL: VISA_TYPES.ETA, // Israel
  KR: VISA_TYPES.ETA, // South Korea
  LK: VISA_TYPES.ETA, // Sri Lanka
  ID: VISA_TYPES.ETA, // Indonesia
  XK: VISA_TYPES.RIGHT_OF_ABODE, // Kosovo
  // E-visa countries
  AO: VISA_TYPES.E_VISA, // Angola
  BS: VISA_TYPES.E_VISA, // Bahamas
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  CF: VISA_TYPES.E_VISA, // Central African Republic
  TD: VISA_TYPES.E_VISA, // Chad
  CG: VISA_TYPES.E_VISA, // Republic of the Congo
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  FJ: VISA_TYPES.E_VISA, // Fiji
  GA: VISA_TYPES.E_VISA, // Gabon
  GH: VISA_TYPES.E_VISA, // Ghana
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IR: VISA_TYPES.E_VISA, // Iran
  IQ: VISA_TYPES.E_VISA, // Iraq
  LS: VISA_TYPES.E_VISA, // Lesotho
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MN: VISA_TYPES.E_VISA, // Mongolia
  MA: VISA_TYPES.E_VISA, // Morocco
  MM: VISA_TYPES.E_VISA, // Myanmar
  NE: VISA_TYPES.E_VISA, // Niger
  NG: VISA_TYPES.E_VISA, // Nigeria
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  QA: VISA_TYPES.E_VISA, // Qatar
  ST: VISA_TYPES.E_VISA, // Sao Tome and Principe
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SD: VISA_TYPES.E_VISA, // Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
  VU: VISA_TYPES.E_VISA, // Vanuatu
  VN: VISA_TYPES.E_VISA, // Vietnam
  YE: VISA_TYPES.E_VISA, // Yemen
  PK: VISA_TYPES.E_VISA, // Pakistan
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  JM: VISA_TYPES.VISA_ON_ARRIVAL, // Jamaica
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  'SO-SL': VISA_TYPES.VISA_ON_ARRIVAL, // Somaliland
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  AU: VISA_TYPES.VISA_REQUIRED, // Australia
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  EC: VISA_TYPES.VISA_REQUIRED, // Ecuador
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  GM: VISA_TYPES.VISA_REQUIRED, // Gambia
  GD: VISA_TYPES.VISA_REQUIRED, // Grenada
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  NA: VISA_TYPES.VISA_REQUIRED, // Namibia
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NI: VISA_TYPES.VISA_REQUIRED, // Nicaragua
  PA: VISA_TYPES.VISA_REQUIRED, // Panama
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PH: VISA_TYPES.VISA_REQUIRED, // Philippines
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  LC: VISA_TYPES.VISA_REQUIRED, // Saint Lucia
  SN: VISA_TYPES.VISA_REQUIRED, // Senegal
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  PR: VISA_TYPES.VISA_REQUIRED, // Puerto Rico
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
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

// Vietnamese Passport holders - Comprehensive visa requirements
// Source: https://en.wikipedia.org/wiki/Visa_requirements_for_Vietnamese_citizens
visaRequirements.VN = {
  ...visaRequirements.VN,
  // Visa-free countries
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BN: VISA_TYPES.VISA_FREE, // Brunei
  KH: VISA_TYPES.VISA_FREE, // Cambodia
  CL: VISA_TYPES.VISA_FREE, // Chile
  DM: VISA_TYPES.VISA_FREE, // Dominica
  ID: VISA_TYPES.VISA_FREE, // Indonesia
  IR: VISA_TYPES.VISA_FREE, // Iran
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  LA: VISA_TYPES.VISA_FREE, // Laos
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MN: VISA_TYPES.VISA_FREE, // Mongolia
  MM: VISA_TYPES.VISA_FREE, // Myanmar
  PA: VISA_TYPES.VISA_FREE, // Panama
  PH: VISA_TYPES.VISA_FREE, // Philippines
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SR: VISA_TYPES.VISA_FREE, // Suriname
  TH: VISA_TYPES.VISA_FREE, // Thailand
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  AM: VISA_TYPES.E_VISA, // Armenia
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BS: VISA_TYPES.E_VISA, // Bahamas
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GE: VISA_TYPES.E_VISA, // Georgia
  GN: VISA_TYPES.E_VISA, // Guinea
  GY: VISA_TYPES.E_VISA, // Guyana
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  LS: VISA_TYPES.E_VISA, // Lesotho
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
  MA: VISA_TYPES.E_VISA, // Morocco
  NG: VISA_TYPES.E_VISA, // Nigeria
  OM: VISA_TYPES.E_VISA, // Oman
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  QA: VISA_TYPES.E_VISA, // Qatar
  RU: VISA_TYPES.E_VISA, // Russia
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // Sao Tome and Principe
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TG: VISA_TYPES.E_VISA, // Togo
  TT: VISA_TYPES.E_VISA, // Trinidad and Tobago
  TR: VISA_TYPES.E_VISA, // Turkey
  UG: VISA_TYPES.E_VISA, // Uganda
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
  ZW: VISA_TYPES.E_VISA, // Zimbabwe
  CO: VISA_TYPES.E_VISA, // Colombia
  // Visa on arrival countries
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  ZM: VISA_TYPES.VISA_ON_ARRIVAL, // Zambia
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  CU: VISA_TYPES.VISA_ON_ARRIVAL, // Cuba
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  LC: VISA_TYPES.VISA_ON_ARRIVAL, // Saint Lucia
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  // ETA countries
  KE: VISA_TYPES.ETA, // Kenya
  SC: VISA_TYPES.ETA, // Seychelles
};

// Afghan Passport holders - Initial visa requirements
// Sources: https://www.visaandembassy.com/en/passport/afghanistan
visaRequirements.AF = {
  ...visaRequirements.AF,
  // Visa-free countries
  DM: VISA_TYPES.VISA_FREE, // Dominica
  HT: VISA_TYPES.VISA_FREE, // Haiti
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  // E-visa countries
  BJ: VISA_TYPES.E_VISA, // Benin
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  BI: VISA_TYPES.E_VISA, // Burundi
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Cote d'Ivoire
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  LS: VISA_TYPES.E_VISA, // Lesotho
  MW: VISA_TYPES.E_VISA, // Malawi
  MR: VISA_TYPES.E_VISA, // Mauritania
  NA: VISA_TYPES.E_VISA, // Namibia
  NG: VISA_TYPES.E_VISA, // Nigeria
  ST: VISA_TYPES.E_VISA, // Sao Tome and Principe
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  TZ: VISA_TYPES.E_VISA, // Tanzania
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  ZM: VISA_TYPES.E_VISA, // Zambia
  ZW: VISA_TYPES.E_VISA, // Zimbabwe
  BT: VISA_TYPES.E_VISA, // Bhutan
  HK: VISA_TYPES.E_VISA, // Hong Kong
  IN: VISA_TYPES.E_VISA, // India
  ID: VISA_TYPES.E_VISA, // Indonesia
  IQ: VISA_TYPES.E_VISA, // Iraq
  IL: VISA_TYPES.E_VISA, // Israel
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  MY: VISA_TYPES.E_VISA, // Malaysia
  OM: VISA_TYPES.E_VISA, // Oman
  PK: VISA_TYPES.E_VISA, // Pakistan
  QA: VISA_TYPES.E_VISA, // Qatar
  SG: VISA_TYPES.E_VISA, // Singapore
  SY: VISA_TYPES.E_VISA, // Syria
  TH: VISA_TYPES.E_VISA, // Thailand
  AE: VISA_TYPES.E_VISA, // UAE
  VN: VISA_TYPES.E_VISA, // Vietnam
  AL: VISA_TYPES.E_VISA, // Albania
  MD: VISA_TYPES.E_VISA, // Moldova
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  BS: VISA_TYPES.E_VISA, // Bahamas
  CU: VISA_TYPES.E_VISA, // Cuba
  SV: VISA_TYPES.E_VISA, // El Salvador
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  VU: VISA_TYPES.E_VISA, // Vanuatu
  BO: VISA_TYPES.E_VISA, // Bolivia
  CO: VISA_TYPES.E_VISA, // Colombia
  EC: VISA_TYPES.E_VISA, // Ecuador
  GY: VISA_TYPES.E_VISA, // Guyana
  SR: VISA_TYPES.E_VISA, // Suriname
  TT: VISA_TYPES.E_VISA, // Trinidad and Tobago
  // ETA countries
  KE: VISA_TYPES.ETA, // Kenya
  LR: VISA_TYPES.ETA, // Liberia
  SC: VISA_TYPES.ETA, // Seychelles
  // Travel restricted countries
  US: VISA_TYPES.TRAVEL_RESTRICTED, // United States
  NZ: VISA_TYPES.TRAVEL_RESTRICTED, // New Zealand
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MO: VISA_TYPES.VISA_ON_ARRIVAL, // Macau
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  'SO-SL': VISA_TYPES.VISA_ON_ARRIVAL, // Somaliland
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka
};

// For Vietnamese passport holders, any country not explicitly listed is visa required.
// This ensures full coverage across the same country set as the US map data.
allCountryCodes.forEach(countryCode => {
  if (!visaRequirements.VN[countryCode]) {
    visaRequirements.VN[countryCode] = VISA_TYPES.VISA_REQUIRED;
  }
});

// Antarctica should remain "no data" for VN.
visaRequirements.VN.AQ = null;

// For Albanian passport holders, any country not explicitly listed is visa free.
// This ensures full coverage across the same country set as the US map data.
allCountryCodes.forEach(countryCode => {
  if (!visaRequirements.AL[countryCode]) {
    visaRequirements.AL[countryCode] = VISA_TYPES.VISA_FREE;
  }
});

// Antarctica should remain "no data" for AL.
visaRequirements.AL.AQ = null;

// For Afghan passport holders, any country not explicitly listed is visa required.
// This ensures full coverage across the same country set as the US map data.
allCountryCodes.forEach(countryCode => {
  if (!visaRequirements.AF[countryCode]) {
    visaRequirements.AF[countryCode] = VISA_TYPES.VISA_REQUIRED;
  }
});

// Antarctica should remain "no data" for AF.
visaRequirements.AF.AQ = null;

// Algerian Passport holders - Comprehensive visa requirements
// Source: https://en.wikipedia.org/wiki/Visa_requirements_for_Algerian_citizens
visaRequirements.DZ = {
  ...visaRequirements.DZ,
  // Visa-free countries
  AO: VISA_TYPES.VISA_FREE, // Angola
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BJ: VISA_TYPES.VISA_FREE, // Benin
  DM: VISA_TYPES.VISA_FREE, // Dominica
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GN: VISA_TYPES.VISA_FREE, // Guinea
  HT: VISA_TYPES.VISA_FREE, // Haiti
  KE: VISA_TYPES.VISA_FREE, // Kenya
  LY: VISA_TYPES.VISA_FREE, // Libya
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  ML: VISA_TYPES.VISA_FREE, // Mali
  MR: VISA_TYPES.VISA_FREE, // Mauritania
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SY: VISA_TYPES.VISA_FREE, // Syria
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  // ETA countries
  SC: VISA_TYPES.ETA, // Seychelles
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GH: VISA_TYPES.VISA_ON_ARRIVAL, // Ghana
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  TJ: VISA_TYPES.VISA_ON_ARRIVAL, // Tajikistan
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  YE: VISA_TYPES.VISA_ON_ARRIVAL, // Yemen
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  AM: VISA_TYPES.E_VISA, // Armenia
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BS: VISA_TYPES.E_VISA, // Bahamas
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CO: VISA_TYPES.E_VISA, // Colombia
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  FJ: VISA_TYPES.E_VISA, // Fiji
  GA: VISA_TYPES.E_VISA, // Gabon
  GE: VISA_TYPES.E_VISA, // Georgia
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  LR: VISA_TYPES.E_VISA, // Liberia
  MW: VISA_TYPES.E_VISA, // Malawi
  MD: VISA_TYPES.E_VISA, // Moldova
  MM: VISA_TYPES.E_VISA, // Myanmar
  NA: VISA_TYPES.E_VISA, // Namibia
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  QA: VISA_TYPES.E_VISA, // Qatar
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  ZA: VISA_TYPES.E_VISA, // South Africa
  SS: VISA_TYPES.E_VISA, // South Sudan
  TH: VISA_TYPES.E_VISA, // Thailand
  TG: VISA_TYPES.E_VISA, // Togo
  TT: VISA_TYPES.E_VISA, // Trinidad and Tobago
  UG: VISA_TYPES.E_VISA, // Uganda
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
  VU: VISA_TYPES.E_VISA, // Vanuatu
  VN: VISA_TYPES.E_VISA, // Vietnam
  ZM: VISA_TYPES.E_VISA, // Zambia
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  BD: VISA_TYPES.VISA_REQUIRED, // Bangladesh
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize
  BA: VISA_TYPES.VISA_REQUIRED, // Bosnia and Herzegovina
  BR: VISA_TYPES.VISA_REQUIRED, // Brazil
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  BG: VISA_TYPES.VISA_REQUIRED, // Bulgaria
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CL: VISA_TYPES.VISA_REQUIRED, // Chile
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  HR: VISA_TYPES.VISA_REQUIRED, // Croatia
  CY: VISA_TYPES.VISA_REQUIRED, // Cyprus
  CZ: VISA_TYPES.VISA_REQUIRED, // Czechia
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  DO: VISA_TYPES.VISA_REQUIRED, // Dominican Republic
  EG: VISA_TYPES.VISA_REQUIRED, // Egypt
  SV: VISA_TYPES.VISA_REQUIRED, // El Salvador
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  GD: VISA_TYPES.VISA_REQUIRED, // Grenada
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  IN: VISA_TYPES.VISA_REQUIRED, // India
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JM: VISA_TYPES.VISA_REQUIRED, // Jamaica
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LA: VISA_TYPES.VISA_REQUIRED, // Laos
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  MN: VISA_TYPES.VISA_REQUIRED, // Mongolia
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PA: VISA_TYPES.VISA_REQUIRED, // Panama
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PH: VISA_TYPES.VISA_REQUIRED, // Philippines
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  LC: VISA_TYPES.VISA_REQUIRED, // Saint Lucia
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  RS: VISA_TYPES.VISA_REQUIRED, // Serbia
  SG: VISA_TYPES.VISA_REQUIRED, // Singapore
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  UA: VISA_TYPES.VISA_REQUIRED, // Ukraine
  AE: VISA_TYPES.VISA_REQUIRED, // United Arab Emirates
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
};

// For Algerian passport holders, any country not explicitly listed is visa required.
// This ensures full coverage across the same country set as the US map data.
allCountryCodes.forEach(countryCode => {
  if (!visaRequirements.DZ[countryCode]) {
    visaRequirements.DZ[countryCode] = VISA_TYPES.VISA_REQUIRED;
  }
});

// Antarctica should remain "no data" for DZ.
visaRequirements.DZ.AQ = null;

// Andorran Passport holders - Comprehensive visa requirements
// Source: https://en.wikipedia.org/wiki/Visa_requirements_for_Andorran_citizens
visaRequirements.AD = {
  ...visaRequirements.AD,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
  AM: VISA_TYPES.VISA_FREE, // Armenia
  AT: VISA_TYPES.VISA_FREE, // Austria
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BO: VISA_TYPES.VISA_FREE, // Bolivia
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CA: VISA_TYPES.VISA_FREE, // Canada
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  CL: VISA_TYPES.VISA_FREE, // Chile
  CN: VISA_TYPES.VISA_FREE, // China
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  EE: VISA_TYPES.VISA_FREE, // Estonia
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GE: VISA_TYPES.VISA_FREE, // Georgia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GR: VISA_TYPES.VISA_FREE, // Greece
  GT: VISA_TYPES.VISA_FREE, // Guatemala
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IT: VISA_TYPES.VISA_FREE, // Italy
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  JP: VISA_TYPES.VISA_FREE, // Japan
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  LV: VISA_TYPES.VISA_FREE, // Latvia
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  ML: VISA_TYPES.VISA_FREE, // Mali
  MT: VISA_TYPES.VISA_FREE, // Malta
  MX: VISA_TYPES.VISA_FREE, // Mexico
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MC: VISA_TYPES.VISA_FREE, // Monaco
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  MA: VISA_TYPES.VISA_FREE, // Morocco
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  NO: VISA_TYPES.VISA_FREE, // Norway
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  PA: VISA_TYPES.VISA_FREE, // Panama
  PY: VISA_TYPES.VISA_FREE, // Paraguay
  PE: VISA_TYPES.VISA_FREE, // Peru
  PH: VISA_TYPES.VISA_FREE, // Philippines
  PL: VISA_TYPES.VISA_FREE, // Poland
  PT: VISA_TYPES.VISA_FREE, // Portugal
  RO: VISA_TYPES.VISA_FREE, // Romania
  RU: VISA_TYPES.VISA_FREE, // Russia
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SM: VISA_TYPES.VISA_FREE, // San Marino
  ST: VISA_TYPES.VISA_FREE, // São Tomé and Príncipe
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  SB: VISA_TYPES.VISA_FREE, // Solomon Islands
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  GB: VISA_TYPES.VISA_FREE, // United Kingdom
  US: VISA_TYPES.VISA_FREE, // United States (Visa Waiver Program with ESTA)
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  AU: VISA_TYPES.ETA, // Australia (eVisitor)
  IL: VISA_TYPES.ETA, // Israel
  KR: VISA_TYPES.ETA, // South Korea
  NZ: VISA_TYPES.ETA, // New Zealand (Electronic Travel Authority)
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  ID: VISA_TYPES.VISA_ON_ARRIVAL, // Indonesia
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  PG: VISA_TYPES.VISA_ON_ARRIVAL, // Papua New Guinea
  QA: VISA_TYPES.VISA_ON_ARRIVAL, // Qatar
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  UG: VISA_TYPES.VISA_ON_ARRIVAL, // Uganda
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  KE: VISA_TYPES.E_VISA, // Kenya
  LS: VISA_TYPES.E_VISA, // Lesotho
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MN: VISA_TYPES.E_VISA, // Mongolia
  NG: VISA_TYPES.E_VISA, // Nigeria
  OM: VISA_TYPES.E_VISA, // Oman
  PK: VISA_TYPES.E_VISA, // Pakistan
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SR: VISA_TYPES.E_VISA, // Suriname
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  FJ: VISA_TYPES.VISA_REQUIRED, // Fiji
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GD: VISA_TYPES.VISA_REQUIRED, // Grenada
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  MM: VISA_TYPES.VISA_REQUIRED, // Myanmar
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TT: VISA_TYPES.VISA_REQUIRED, // Trinidad and Tobago
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// AO Passport holders
// Source: Wikipedia
visaRequirements.AO = {
  ...visaRequirements.AO,
  // Visa-free countries
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BJ: VISA_TYPES.VISA_FREE, // Benin
  BW: VISA_TYPES.VISA_FREE, // Botswana
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  DM: VISA_TYPES.VISA_FREE, // Dominica
  GM: VISA_TYPES.VISA_FREE, // Gambia
  HT: VISA_TYPES.VISA_FREE, // Haiti
  KE: VISA_TYPES.VISA_FREE, // Kenya
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MZ: VISA_TYPES.VISA_FREE, // Mozambique
  NA: VISA_TYPES.VISA_FREE, // Namibia
  PH: VISA_TYPES.VISA_FREE, // Philippines
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  ST: VISA_TYPES.VISA_FREE, // São Tomé and Príncipe
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  SR: VISA_TYPES.VISA_FREE, // Suriname
  TZ: VISA_TYPES.VISA_FREE, // Tanzania
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  UG: VISA_TYPES.VISA_FREE, // Uganda
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  ZW: VISA_TYPES.VISA_FREE, // Zimbabwe
  // ETA countries
  PK: VISA_TYPES.ETA, // Pakistan
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GH: VISA_TYPES.VISA_ON_ARRIVAL, // Ghana
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  GY: VISA_TYPES.VISA_ON_ARRIVAL, // Guyana
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua
  NG: VISA_TYPES.VISA_ON_ARRIVAL, // Nigeria
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  BS: VISA_TYPES.E_VISA, // Bahamas
  BH: VISA_TYPES.E_VISA, // Bahrain
  BT: VISA_TYPES.E_VISA, // Bhutan
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CO: VISA_TYPES.E_VISA, // Colombia
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  SV: VISA_TYPES.E_VISA, // El Salvador
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GE: VISA_TYPES.E_VISA, // Georgia
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  JO: VISA_TYPES.E_VISA, // Jordan
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MW: VISA_TYPES.E_VISA, // Malawi
  MY: VISA_TYPES.E_VISA, // Malaysia
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
  MN: VISA_TYPES.E_VISA, // Mongolia
  OM: VISA_TYPES.E_VISA, // Oman
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  QA: VISA_TYPES.E_VISA, // Qatar
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TH: VISA_TYPES.E_VISA, // Thailand
  TG: VISA_TYPES.E_VISA, // Togo
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  AM: VISA_TYPES.VISA_REQUIRED, // Armenia
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  AZ: VISA_TYPES.VISA_REQUIRED, // Azerbaijan
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize
  BA: VISA_TYPES.VISA_REQUIRED, // Bosnia and Herzegovina
  BR: VISA_TYPES.VISA_REQUIRED, // Brazil
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  BG: VISA_TYPES.VISA_REQUIRED, // Bulgaria
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CL: VISA_TYPES.VISA_REQUIRED, // Chile
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  HR: VISA_TYPES.VISA_REQUIRED, // Croatia
  CY: VISA_TYPES.VISA_REQUIRED, // Cyprus
  CZ: VISA_TYPES.VISA_REQUIRED, // Czechia
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  DO: VISA_TYPES.VISA_REQUIRED, // Dominican Republic
  EC: VISA_TYPES.VISA_REQUIRED, // Ecuador
  EG: VISA_TYPES.VISA_REQUIRED, // Egypt
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FJ: VISA_TYPES.VISA_REQUIRED, // Fiji
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  GD: VISA_TYPES.VISA_REQUIRED, // Grenada
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JM: VISA_TYPES.VISA_REQUIRED, // Jamaica
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  MM: VISA_TYPES.VISA_REQUIRED, // Myanmar
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  PA: VISA_TYPES.VISA_REQUIRED, // Panama
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  LC: VISA_TYPES.VISA_REQUIRED, // Saint Lucia
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  RS: VISA_TYPES.VISA_REQUIRED, // Serbia
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TT: VISA_TYPES.VISA_REQUIRED, // Trinidad and Tobago
  TR: VISA_TYPES.VISA_REQUIRED, // Turkey
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  UA: VISA_TYPES.VISA_REQUIRED, // Ukraine
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  VU: VISA_TYPES.VISA_REQUIRED, // Vanuatu
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// AR Passport holders
// Source: Wikipedia
visaRequirements.AR = {
  ...visaRequirements.AR,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AO: VISA_TYPES.VISA_FREE, // Angola
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AM: VISA_TYPES.VISA_FREE, // Armenia
  AT: VISA_TYPES.VISA_FREE, // Austria
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BO: VISA_TYPES.VISA_FREE, // Bolivia
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CL: VISA_TYPES.VISA_FREE, // Chile
  CN: VISA_TYPES.VISA_FREE, // China
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  EE: VISA_TYPES.VISA_FREE, // Estonia
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GE: VISA_TYPES.VISA_FREE, // Georgia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GR: VISA_TYPES.VISA_FREE, // Greece
  GD: VISA_TYPES.VISA_FREE, // Grenada
  GT: VISA_TYPES.VISA_FREE, // Guatemala
  GY: VISA_TYPES.VISA_FREE, // Guyana
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IT: VISA_TYPES.VISA_FREE, // Italy
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  JP: VISA_TYPES.VISA_FREE, // Japan
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  XK: VISA_TYPES.VISA_FREE, // Kosovo
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  LV: VISA_TYPES.VISA_FREE, // Latvia
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MT: VISA_TYPES.VISA_FREE, // Malta
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  MX: VISA_TYPES.VISA_FREE, // Mexico
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MC: VISA_TYPES.VISA_FREE, // Monaco
  MN: VISA_TYPES.VISA_FREE, // Mongolia
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  MA: VISA_TYPES.VISA_FREE, // Morocco
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  NO: VISA_TYPES.VISA_FREE, // Norway
  OM: VISA_TYPES.VISA_FREE, // Oman
  PA: VISA_TYPES.VISA_FREE, // Panama
  PY: VISA_TYPES.VISA_FREE, // Paraguay
  PE: VISA_TYPES.VISA_FREE, // Peru
  PH: VISA_TYPES.VISA_FREE, // Philippines
  PL: VISA_TYPES.VISA_FREE, // Poland
  PT: VISA_TYPES.VISA_FREE, // Portugal
  QA: VISA_TYPES.VISA_FREE, // Qatar
  RO: VISA_TYPES.VISA_FREE, // Romania
  RU: VISA_TYPES.VISA_FREE, // Russia
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  SM: VISA_TYPES.VISA_FREE, // San Marino
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  SB: VISA_TYPES.VISA_FREE, // Solomon Islands
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  IL: VISA_TYPES.ETA, // Israel
  KR: VISA_TYPES.ETA, // South Korea
  NZ: VISA_TYPES.ETA, // New Zealand
  KN: VISA_TYPES.ETA, // Saint Kitts and Nevis
  LK: VISA_TYPES.ETA, // Sri Lanka
  GB: VISA_TYPES.ETA, // United Kingdom
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  ID: VISA_TYPES.VISA_ON_ARRIVAL, // Indonesia
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IR: VISA_TYPES.E_VISA, // Iran
  IQ: VISA_TYPES.E_VISA, // Iraq
  KE: VISA_TYPES.E_VISA, // Kenya
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SC: VISA_TYPES.E_VISA, // Seychelles
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AU: VISA_TYPES.VISA_REQUIRED, // Australia
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GM: VISA_TYPES.VISA_REQUIRED, // Gambia
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LS: VISA_TYPES.VISA_REQUIRED, // Lesotho
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  US: VISA_TYPES.VISA_REQUIRED, // United States
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// AM Passport holders
// Source: Wikipedia
visaRequirements.AM = {
  ...visaRequirements.AM,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BR: VISA_TYPES.VISA_FREE, // Brazil
  CN: VISA_TYPES.VISA_FREE, // China
  DM: VISA_TYPES.VISA_FREE, // Dominica
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  GE: VISA_TYPES.VISA_FREE, // Georgia
  HT: VISA_TYPES.VISA_FREE, // Haiti
  IR: VISA_TYPES.VISA_FREE, // Iran
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  OM: VISA_TYPES.VISA_FREE, // Oman
  PA: VISA_TYPES.VISA_FREE, // Panama
  QA: VISA_TYPES.VISA_FREE, // Qatar
  RU: VISA_TYPES.VISA_FREE, // Russia
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SR: VISA_TYPES.VISA_FREE, // Suriname
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  ID: VISA_TYPES.VISA_ON_ARRIVAL, // Indonesia
  JM: VISA_TYPES.VISA_ON_ARRIVAL, // Jamaica
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TH: VISA_TYPES.VISA_ON_ARRIVAL, // Thailand
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  CO: VISA_TYPES.E_VISA, // Colombia
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  KE: VISA_TYPES.E_VISA, // Kenya
  LS: VISA_TYPES.E_VISA, // Lesotho
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MN: VISA_TYPES.E_VISA, // Mongolia
  NG: VISA_TYPES.E_VISA, // Nigeria
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SG: VISA_TYPES.E_VISA, // Singapore
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
  TR: VISA_TYPES.E_VISA, // Turkey
  UG: VISA_TYPES.E_VISA, // Uganda
  VN: VISA_TYPES.E_VISA, // Vietnam
  ZM: VISA_TYPES.E_VISA, // Zambia
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
  AU: VISA_TYPES.VISA_REQUIRED, // Australia
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize
  BA: VISA_TYPES.VISA_REQUIRED, // Bosnia and Herzegovina
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  BG: VISA_TYPES.VISA_REQUIRED, // Bulgaria
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CL: VISA_TYPES.VISA_REQUIRED, // Chile
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  HR: VISA_TYPES.VISA_REQUIRED, // Croatia
  CY: VISA_TYPES.VISA_REQUIRED, // Cyprus
  CZ: VISA_TYPES.VISA_REQUIRED, // Czechia
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  DO: VISA_TYPES.VISA_REQUIRED, // Dominican Republic
  SV: VISA_TYPES.VISA_REQUIRED, // El Salvador
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FJ: VISA_TYPES.VISA_REQUIRED, // Fiji
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  GM: VISA_TYPES.VISA_REQUIRED, // Gambia
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  GD: VISA_TYPES.VISA_REQUIRED, // Grenada
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
  XK: VISA_TYPES.VISA_REQUIRED, // Kosovo
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  MM: VISA_TYPES.VISA_REQUIRED, // Myanmar
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NI: VISA_TYPES.VISA_REQUIRED, // Nicaragua
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  PK: VISA_TYPES.VISA_REQUIRED, // Pakistan
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PH: VISA_TYPES.VISA_REQUIRED, // Philippines
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  LC: VISA_TYPES.VISA_REQUIRED, // Saint Lucia
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  ZA: VISA_TYPES.VISA_REQUIRED, // South Africa
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TW: VISA_TYPES.VISA_REQUIRED, // Taiwan
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TT: VISA_TYPES.VISA_REQUIRED, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  VU: VISA_TYPES.VISA_REQUIRED, // Vanuatu
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
  // Travel restricted countries
  AZ: VISA_TYPES.TRAVEL_RESTRICTED, // Azerbaijan
};

// AU Passport holders
// Source: Wikipedia
visaRequirements.AU = {
  ...visaRequirements.AU,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AO: VISA_TYPES.VISA_FREE, // Angola
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
  AM: VISA_TYPES.VISA_FREE, // Armenia
  AT: VISA_TYPES.VISA_FREE, // Austria
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BO: VISA_TYPES.VISA_FREE, // Bolivia
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CA: VISA_TYPES.VISA_FREE, // Canada
  CL: VISA_TYPES.VISA_FREE, // Chile
  CN: VISA_TYPES.VISA_FREE, // China
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  EE: VISA_TYPES.VISA_FREE, // Estonia
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GE: VISA_TYPES.VISA_FREE, // Georgia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GR: VISA_TYPES.VISA_FREE, // Greece
  GD: VISA_TYPES.VISA_FREE, // Grenada
  GT: VISA_TYPES.VISA_FREE, // Guatemala
  GY: VISA_TYPES.VISA_FREE, // Guyana
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IT: VISA_TYPES.VISA_FREE, // Italy
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  JP: VISA_TYPES.VISA_FREE, // Japan
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  LV: VISA_TYPES.VISA_FREE, // Latvia
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MW: VISA_TYPES.VISA_FREE, // Malawi
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MT: VISA_TYPES.VISA_FREE, // Malta
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  MX: VISA_TYPES.VISA_FREE, // Mexico
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MC: VISA_TYPES.VISA_FREE, // Monaco
  MN: VISA_TYPES.VISA_FREE, // Mongolia
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  MA: VISA_TYPES.VISA_FREE, // Morocco
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  NZ: VISA_TYPES.VISA_FREE, // New Zealand
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  NO: VISA_TYPES.VISA_FREE, // Norway
  OM: VISA_TYPES.VISA_FREE, // Oman
  PA: VISA_TYPES.VISA_FREE, // Panama
  PY: VISA_TYPES.VISA_FREE, // Paraguay
  PE: VISA_TYPES.VISA_FREE, // Peru
  PH: VISA_TYPES.VISA_FREE, // Philippines
  PL: VISA_TYPES.VISA_FREE, // Poland
  PT: VISA_TYPES.VISA_FREE, // Portugal
  QA: VISA_TYPES.VISA_FREE, // Qatar
  RO: VISA_TYPES.VISA_FREE, // Romania
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  SM: VISA_TYPES.VISA_FREE, // San Marino
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  SB: VISA_TYPES.VISA_FREE, // Solomon Islands
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  GB: VISA_TYPES.ETA, // United Kingdom
  IL: VISA_TYPES.ETA, // Israel
  LK: VISA_TYPES.ETA, // Sri Lanka
  US: VISA_TYPES.ETA, // United States
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BN: VISA_TYPES.VISA_ON_ARRIVAL, // Brunei
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  ID: VISA_TYPES.VISA_ON_ARRIVAL, // Indonesia
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TO: VISA_TYPES.VISA_ON_ARRIVAL, // Tonga
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BR: VISA_TYPES.E_VISA, // Brazil
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GH: VISA_TYPES.E_VISA, // Ghana
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IR: VISA_TYPES.E_VISA, // Iran
  IQ: VISA_TYPES.E_VISA, // Iraq
  KE: VISA_TYPES.E_VISA, // Kenya
  KR: VISA_TYPES.E_VISA, // South Korea
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SC: VISA_TYPES.E_VISA, // Seychelles
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
  TT: VISA_TYPES.E_VISA, // Trinidad and Tobago
  TR: VISA_TYPES.E_VISA, // Turkey
  TM: VISA_TYPES.E_VISA, // Turkmenistan
  UG: VISA_TYPES.E_VISA, // Uganda
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// AT Passport holders
// Source: Wikipedia
visaRequirements.AT = {
  ...visaRequirements.AT,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AO: VISA_TYPES.VISA_FREE, // Angola
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
  AM: VISA_TYPES.VISA_FREE, // Armenia
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BO: VISA_TYPES.VISA_FREE, // Bolivia
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BN: VISA_TYPES.VISA_FREE, // Brunei
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CA: VISA_TYPES.VISA_FREE, // Canada
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  CL: VISA_TYPES.VISA_FREE, // Chile
  CN: VISA_TYPES.VISA_FREE, // China
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  EE: VISA_TYPES.VISA_FREE, // Estonia
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GE: VISA_TYPES.VISA_FREE, // Georgia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GR: VISA_TYPES.VISA_FREE, // Greece
  GD: VISA_TYPES.VISA_FREE, // Grenada
  GT: VISA_TYPES.VISA_FREE, // Guatemala
  GY: VISA_TYPES.VISA_FREE, // Guyana
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IL: VISA_TYPES.VISA_FREE, // Israel
  IT: VISA_TYPES.VISA_FREE, // Italy
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  JP: VISA_TYPES.VISA_FREE, // Japan
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  LA: VISA_TYPES.VISA_FREE, // Laos
  LV: VISA_TYPES.VISA_FREE, // Latvia
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MT: VISA_TYPES.VISA_FREE, // Malta
  MH: VISA_TYPES.VISA_FREE, // Marshall Islands
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  MX: VISA_TYPES.VISA_FREE, // Mexico
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MC: VISA_TYPES.VISA_FREE, // Monaco
  MN: VISA_TYPES.VISA_FREE, // Mongolia
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  MA: VISA_TYPES.VISA_FREE, // Morocco
  NA: VISA_TYPES.VISA_FREE, // Namibia
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  NO: VISA_TYPES.VISA_FREE, // Norway
  OM: VISA_TYPES.VISA_FREE, // Oman
  PW: VISA_TYPES.VISA_FREE, // Palau
  PA: VISA_TYPES.VISA_FREE, // Panama
  PY: VISA_TYPES.VISA_FREE, // Paraguay
  PE: VISA_TYPES.VISA_FREE, // Peru
  PH: VISA_TYPES.VISA_FREE, // Philippines
  PL: VISA_TYPES.VISA_FREE, // Poland
  PT: VISA_TYPES.VISA_FREE, // Portugal
  QA: VISA_TYPES.VISA_FREE, // Qatar
  RO: VISA_TYPES.VISA_FREE, // Romania
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SM: VISA_TYPES.VISA_FREE, // San Marino
  ST: VISA_TYPES.VISA_FREE, // São Tomé and Príncipe
  SN: VISA_TYPES.VISA_FREE, // Senegal
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  SB: VISA_TYPES.VISA_FREE, // Solomon Islands
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TL: VISA_TYPES.VISA_FREE, // Timor-Leste
  TO: VISA_TYPES.VISA_FREE, // Tonga
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  TV: VISA_TYPES.VISA_FREE, // Tuvalu
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  GB: VISA_TYPES.VISA_FREE, // United Kingdom
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  AU: VISA_TYPES.ETA, // Australia
  KE: VISA_TYPES.ETA, // Kenya
  US: VISA_TYPES.ETA, // United States
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BF: VISA_TYPES.VISA_ON_ARRIVAL, // Burkina Faso
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  ID: VISA_TYPES.VISA_ON_ARRIVAL, // Indonesia
  IQ: VISA_TYPES.VISA_ON_ARRIVAL, // Iraq
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MR: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritania
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  MM: VISA_TYPES.VISA_ON_ARRIVAL, // Myanmar
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  CM: VISA_TYPES.E_VISA, // Cameroon
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IR: VISA_TYPES.E_VISA, // Iran
  KR: VISA_TYPES.E_VISA, // South Korea
  LY: VISA_TYPES.E_VISA, // Libya
  NZ: VISA_TYPES.E_VISA, // New Zealand
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  RU: VISA_TYPES.E_VISA, // Russia
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CU: VISA_TYPES.VISA_REQUIRED, // Cuba
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// AZ Passport holders
// Source: Wikipedia
visaRequirements.AZ = {
  ...visaRequirements.AZ,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  CN: VISA_TYPES.VISA_FREE, // China
  CO: VISA_TYPES.VISA_FREE, // Colombia
  DM: VISA_TYPES.VISA_FREE, // Dominica
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  GE: VISA_TYPES.VISA_FREE, // Georgia
  HT: VISA_TYPES.VISA_FREE, // Haiti
  IR: VISA_TYPES.VISA_FREE, // Iran
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  MA: VISA_TYPES.VISA_FREE, // Morocco
  QA: VISA_TYPES.VISA_FREE, // Qatar
  RU: VISA_TYPES.VISA_FREE, // Russia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SR: VISA_TYPES.VISA_FREE, // Suriname
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  ID: VISA_TYPES.VISA_ON_ARRIVAL, // Indonesia
  JM: VISA_TYPES.VISA_ON_ARRIVAL, // Jamaica
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AO: VISA_TYPES.E_VISA, // Angola
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  GY: VISA_TYPES.E_VISA, // Guyana
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  KE: VISA_TYPES.E_VISA, // Kenya
  LS: VISA_TYPES.E_VISA, // Lesotho
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SC: VISA_TYPES.E_VISA, // Seychelles
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TH: VISA_TYPES.E_VISA, // Thailand
  TG: VISA_TYPES.E_VISA, // Togo
  TT: VISA_TYPES.E_VISA, // Trinidad and Tobago
  UG: VISA_TYPES.E_VISA, // Uganda
  VN: VISA_TYPES.E_VISA, // Vietnam
  ZM: VISA_TYPES.E_VISA, // Zambia
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  AM: VISA_TYPES.VISA_REQUIRED, // Armenia
  AU: VISA_TYPES.VISA_REQUIRED, // Australia
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize
  BR: VISA_TYPES.VISA_REQUIRED, // Brazil
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  BG: VISA_TYPES.VISA_REQUIRED, // Bulgaria
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CL: VISA_TYPES.VISA_REQUIRED, // Chile
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  HR: VISA_TYPES.VISA_REQUIRED, // Croatia
  CY: VISA_TYPES.VISA_REQUIRED, // Cyprus
  CZ: VISA_TYPES.VISA_REQUIRED, // Czechia
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  DO: VISA_TYPES.VISA_REQUIRED, // Dominican Republic
  SV: VISA_TYPES.VISA_REQUIRED, // El Salvador
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FJ: VISA_TYPES.VISA_REQUIRED, // Fiji
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  GM: VISA_TYPES.VISA_REQUIRED, // Gambia
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  GD: VISA_TYPES.VISA_REQUIRED, // Grenada
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  MN: VISA_TYPES.VISA_REQUIRED, // Mongolia
  MM: VISA_TYPES.VISA_REQUIRED, // Myanmar
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PA: VISA_TYPES.VISA_REQUIRED, // Panama
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PH: VISA_TYPES.VISA_REQUIRED, // Philippines
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  LC: VISA_TYPES.VISA_REQUIRED, // Saint Lucia
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SN: VISA_TYPES.VISA_REQUIRED, // Senegal
  SG: VISA_TYPES.VISA_REQUIRED, // Singapore
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  ZA: VISA_TYPES.VISA_REQUIRED, // South Africa
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// AG Passport holders
// Source: Wikipedia
visaRequirements.AG = {
  ...visaRequirements.AG,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AO: VISA_TYPES.VISA_FREE, // Angola
  AT: VISA_TYPES.VISA_FREE, // Austria
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CA: VISA_TYPES.VISA_FREE, // Canada
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  CL: VISA_TYPES.VISA_FREE, // Chile
  CN: VISA_TYPES.VISA_FREE, // China
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CU: VISA_TYPES.VISA_FREE, // Cuba
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  EE: VISA_TYPES.VISA_FREE, // Estonia
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GE: VISA_TYPES.VISA_FREE, // Georgia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GR: VISA_TYPES.VISA_FREE, // Greece
  GD: VISA_TYPES.VISA_FREE, // Grenada
  GT: VISA_TYPES.VISA_FREE, // Guatemala
  GY: VISA_TYPES.VISA_FREE, // Guyana
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IT: VISA_TYPES.VISA_FREE, // Italy
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  KR: VISA_TYPES.VISA_FREE, // South Korea
  LV: VISA_TYPES.VISA_FREE, // Latvia
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MW: VISA_TYPES.VISA_FREE, // Malawi
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MT: VISA_TYPES.VISA_FREE, // Malta
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MC: VISA_TYPES.VISA_FREE, // Monaco
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  NO: VISA_TYPES.VISA_FREE, // Norway
  PA: VISA_TYPES.VISA_FREE, // Panama
  PE: VISA_TYPES.VISA_FREE, // Peru
  PH: VISA_TYPES.VISA_FREE, // Philippines
  PL: VISA_TYPES.VISA_FREE, // Poland
  PT: VISA_TYPES.VISA_FREE, // Portugal
  QA: VISA_TYPES.VISA_FREE, // Qatar
  RO: VISA_TYPES.VISA_FREE, // Romania
  RU: VISA_TYPES.VISA_FREE, // Russia
  KN: VISA_TYPES.VISA_FREE, // Saint Kitts and Nevis
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  SM: VISA_TYPES.VISA_FREE, // San Marino
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TZ: VISA_TYPES.VISA_FREE, // Tanzania
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  UG: VISA_TYPES.VISA_FREE, // Uganda
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  GB: VISA_TYPES.VISA_FREE, // United Kingdom
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  ZW: VISA_TYPES.VISA_FREE, // Zimbabwe
  // ETA countries
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  AM: VISA_TYPES.VISA_ON_ARRIVAL, // Armenia
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  DJ: VISA_TYPES.VISA_ON_ARRIVAL, // Djibouti
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  SC: VISA_TYPES.VISA_ON_ARRIVAL, // Seychelles
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  SB: VISA_TYPES.VISA_ON_ARRIVAL, // Solomon Islands
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  // E-visa countries
  BH: VISA_TYPES.E_VISA, // Bahrain
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MN: VISA_TYPES.E_VISA, // Mongolia
  NA: VISA_TYPES.E_VISA, // Namibia
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TH: VISA_TYPES.E_VISA, // Thailand
  TG: VISA_TYPES.E_VISA, // Togo
  TR: VISA_TYPES.E_VISA, // Turkey
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  AU: VISA_TYPES.VISA_REQUIRED, // Australia
  AZ: VISA_TYPES.VISA_REQUIRED, // Azerbaijan
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  MM: VISA_TYPES.VISA_REQUIRED, // Myanmar
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// BS Passport holders
// Source: Wikipedia
visaRequirements.BS = {
  ...visaRequirements.BS,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AO: VISA_TYPES.VISA_FREE, // Angola
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AT: VISA_TYPES.VISA_FREE, // Austria
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BJ: VISA_TYPES.VISA_FREE, // Benin
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CA: VISA_TYPES.VISA_FREE, // Canada
  CL: VISA_TYPES.VISA_FREE, // Chile
  CN: VISA_TYPES.VISA_FREE, // China
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  EE: VISA_TYPES.VISA_FREE, // Estonia
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GE: VISA_TYPES.VISA_FREE, // Georgia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GH: VISA_TYPES.VISA_FREE, // Ghana
  GR: VISA_TYPES.VISA_FREE, // Greece
  GD: VISA_TYPES.VISA_FREE, // Grenada
  GT: VISA_TYPES.VISA_FREE, // Guatemala
  GY: VISA_TYPES.VISA_FREE, // Guyana
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IL: VISA_TYPES.VISA_FREE, // Israel
  IT: VISA_TYPES.VISA_FREE, // Italy
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  JP: VISA_TYPES.VISA_FREE, // Japan
  KE: VISA_TYPES.VISA_FREE, // Kenya
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  KR: VISA_TYPES.VISA_FREE, // South Korea
  LV: VISA_TYPES.VISA_FREE, // Latvia
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MW: VISA_TYPES.VISA_FREE, // Malawi
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MT: VISA_TYPES.VISA_FREE, // Malta
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  MX: VISA_TYPES.VISA_FREE, // Mexico
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MC: VISA_TYPES.VISA_FREE, // Monaco
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  NO: VISA_TYPES.VISA_FREE, // Norway
  PA: VISA_TYPES.VISA_FREE, // Panama
  PY: VISA_TYPES.VISA_FREE, // Paraguay
  PE: VISA_TYPES.VISA_FREE, // Peru
  PH: VISA_TYPES.VISA_FREE, // Philippines
  PL: VISA_TYPES.VISA_FREE, // Poland
  PT: VISA_TYPES.VISA_FREE, // Portugal
  QA: VISA_TYPES.VISA_FREE, // Qatar
  RO: VISA_TYPES.VISA_FREE, // Romania
  KN: VISA_TYPES.VISA_FREE, // Saint Kitts and Nevis
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SM: VISA_TYPES.VISA_FREE, // San Marino
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  SB: VISA_TYPES.VISA_FREE, // Solomon Islands
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TZ: VISA_TYPES.VISA_FREE, // Tanzania
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  UG: VISA_TYPES.VISA_FREE, // Uganda
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  GB: VISA_TYPES.VISA_FREE, // United Kingdom
  US: VISA_TYPES.VISA_FREE, // United States
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  ZW: VISA_TYPES.VISA_FREE, // Zimbabwe
  // ETA countries
  PK: VISA_TYPES.ETA, // Pakistan
  // Visa on arrival countries
  AM: VISA_TYPES.VISA_ON_ARRIVAL, // Armenia
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TO: VISA_TYPES.VISA_ON_ARRIVAL, // Tonga
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  // E-visa countries
  AU: VISA_TYPES.E_VISA, // Australia
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BH: VISA_TYPES.E_VISA, // Bahrain
  BT: VISA_TYPES.E_VISA, // Bhutan
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  ID: VISA_TYPES.E_VISA, // Indonesia
  IQ: VISA_TYPES.E_VISA, // Iraq
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  TG: VISA_TYPES.E_VISA, // Togo
  TR: VISA_TYPES.E_VISA, // Turkey
  UA: VISA_TYPES.E_VISA, // Ukraine
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  BD: VISA_TYPES.VISA_REQUIRED, // Bangladesh
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  KZ: VISA_TYPES.VISA_REQUIRED, // Kazakhstan
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MN: VISA_TYPES.VISA_REQUIRED, // Mongolia
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  MM: VISA_TYPES.VISA_REQUIRED, // Myanmar
  NA: VISA_TYPES.VISA_REQUIRED, // Namibia
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  NG: VISA_TYPES.VISA_REQUIRED, // Nigeria
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PG: VISA_TYPES.VISA_REQUIRED, // Papua New Guinea
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TH: VISA_TYPES.VISA_REQUIRED, // Thailand
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// BH Passport holders
// Source: Wikipedia
visaRequirements.BH = {
  ...visaRequirements.BH,
  // Visa-free countries
  AM: VISA_TYPES.VISA_FREE, // Armenia
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BW: VISA_TYPES.VISA_FREE, // Botswana
  CN: VISA_TYPES.VISA_FREE, // China
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  EG: VISA_TYPES.VISA_FREE, // Egypt
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  GE: VISA_TYPES.VISA_FREE, // Georgia
  GT: VISA_TYPES.VISA_FREE, // Guatemala
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  IR: VISA_TYPES.VISA_FREE, // Iran
  JO: VISA_TYPES.VISA_FREE, // Jordan
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KW: VISA_TYPES.VISA_FREE, // Kuwait
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  LB: VISA_TYPES.VISA_FREE, // Lebanon
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MA: VISA_TYPES.VISA_FREE, // Morocco
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  OM: VISA_TYPES.VISA_FREE, // Oman
  PK: VISA_TYPES.VISA_FREE, // Pakistan
  PH: VISA_TYPES.VISA_FREE, // Philippines
  QA: VISA_TYPES.VISA_FREE, // Qatar
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SA: VISA_TYPES.VISA_FREE, // Saudi Arabia
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  GB: VISA_TYPES.ETA, // United Kingdom
  KR: VISA_TYPES.ETA, // South Korea
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  AZ: VISA_TYPES.VISA_ON_ARRIVAL, // Azerbaijan
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BN: VISA_TYPES.VISA_ON_ARRIVAL, // Brunei
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  ID: VISA_TYPES.VISA_ON_ARRIVAL, // Indonesia
  IQ: VISA_TYPES.VISA_ON_ARRIVAL, // Iraq
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  YE: VISA_TYPES.VISA_ON_ARRIVAL, // Yemen
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AO: VISA_TYPES.E_VISA, // Angola
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  CO: VISA_TYPES.E_VISA, // Colombia
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  KE: VISA_TYPES.E_VISA, // Kenya
  LS: VISA_TYPES.E_VISA, // Lesotho
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  NA: VISA_TYPES.E_VISA, // Namibia
  NZ: VISA_TYPES.E_VISA, // New Zealand
  NG: VISA_TYPES.E_VISA, // Nigeria
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  RU: VISA_TYPES.E_VISA, // Russia
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SR: VISA_TYPES.E_VISA, // Suriname
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TG: VISA_TYPES.E_VISA, // Togo
  TT: VISA_TYPES.E_VISA, // Trinidad and Tobago
  UG: VISA_TYPES.E_VISA, // Uganda
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  AU: VISA_TYPES.VISA_REQUIRED, // Australia
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize
  BA: VISA_TYPES.VISA_REQUIRED, // Bosnia and Herzegovina
  BR: VISA_TYPES.VISA_REQUIRED, // Brazil
  BG: VISA_TYPES.VISA_REQUIRED, // Bulgaria
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CL: VISA_TYPES.VISA_REQUIRED, // Chile
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  HR: VISA_TYPES.VISA_REQUIRED, // Croatia
  CY: VISA_TYPES.VISA_REQUIRED, // Cyprus
  CZ: VISA_TYPES.VISA_REQUIRED, // Czechia
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FJ: VISA_TYPES.VISA_REQUIRED, // Fiji
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  GM: VISA_TYPES.VISA_REQUIRED, // Gambia
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  GD: VISA_TYPES.VISA_REQUIRED, // Grenada
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JM: VISA_TYPES.VISA_REQUIRED, // Jamaica
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MD: VISA_TYPES.VISA_REQUIRED, // Moldova
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  MN: VISA_TYPES.VISA_REQUIRED, // Mongolia
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
  MM: VISA_TYPES.VISA_REQUIRED, // Myanmar
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  PA: VISA_TYPES.VISA_REQUIRED, // Panama
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  LC: VISA_TYPES.VISA_REQUIRED, // Saint Lucia
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  ZA: VISA_TYPES.VISA_REQUIRED, // South Africa
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
};

// BD Passport holders
// Source: Wikipedia
visaRequirements.BD = {
  ...visaRequirements.BD,
  // Visa-free countries
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  DM: VISA_TYPES.VISA_FREE, // Dominica
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GD: VISA_TYPES.VISA_FREE, // Grenada
  HT: VISA_TYPES.VISA_FREE, // Haiti
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  KN: VISA_TYPES.VISA_FREE, // Saint Kitts and Nevis
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BT: VISA_TYPES.VISA_ON_ARRIVAL, // Bhutan
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AO: VISA_TYPES.E_VISA, // Angola
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  BJ: VISA_TYPES.E_VISA, // Benin
  BO: VISA_TYPES.E_VISA, // Bolivia
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CO: VISA_TYPES.E_VISA, // Colombia
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  ID: VISA_TYPES.E_VISA, // Indonesia
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KE: VISA_TYPES.E_VISA, // Kenya
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  MW: VISA_TYPES.E_VISA, // Malawi
  MY: VISA_TYPES.E_VISA, // Malaysia
  MR: VISA_TYPES.E_VISA, // Mauritania
  MZ: VISA_TYPES.E_VISA, // Mozambique
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  QA: VISA_TYPES.E_VISA, // Qatar
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SC: VISA_TYPES.E_VISA, // Seychelles
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SR: VISA_TYPES.E_VISA, // Suriname
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TH: VISA_TYPES.E_VISA, // Thailand
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
  VN: VISA_TYPES.E_VISA, // Vietnam
  ZM: VISA_TYPES.E_VISA, // Zambia
  ZW: VISA_TYPES.E_VISA, // Zimbabwe
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  AM: VISA_TYPES.VISA_REQUIRED, // Armenia
  AU: VISA_TYPES.VISA_REQUIRED, // Australia
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  AZ: VISA_TYPES.VISA_REQUIRED, // Azerbaijan
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize
  BA: VISA_TYPES.VISA_REQUIRED, // Bosnia and Herzegovina
  BR: VISA_TYPES.VISA_REQUIRED, // Brazil
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  BG: VISA_TYPES.VISA_REQUIRED, // Bulgaria
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CL: VISA_TYPES.VISA_REQUIRED, // Chile
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  HR: VISA_TYPES.VISA_REQUIRED, // Croatia
  CU: VISA_TYPES.VISA_REQUIRED, // Cuba
  CY: VISA_TYPES.VISA_REQUIRED, // Cyprus
  CZ: VISA_TYPES.VISA_REQUIRED, // Czechia
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  DO: VISA_TYPES.VISA_REQUIRED, // Dominican Republic
  EC: VISA_TYPES.VISA_REQUIRED, // Ecuador
  EG: VISA_TYPES.VISA_REQUIRED, // Egypt
  SV: VISA_TYPES.VISA_REQUIRED, // El Salvador
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  GE: VISA_TYPES.VISA_REQUIRED, // Georgia
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  IN: VISA_TYPES.VISA_REQUIRED, // India
  IR: VISA_TYPES.VISA_REQUIRED, // Iran
  IQ: VISA_TYPES.VISA_REQUIRED, // Iraq
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  JO: VISA_TYPES.VISA_REQUIRED, // Jordan
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
  XK: VISA_TYPES.VISA_REQUIRED, // Kosovo
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LA: VISA_TYPES.VISA_REQUIRED, // Laos
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MU: VISA_TYPES.VISA_REQUIRED, // Mauritius
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MD: VISA_TYPES.VISA_REQUIRED, // Moldova
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  MN: VISA_TYPES.VISA_REQUIRED, // Mongolia
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  NA: VISA_TYPES.VISA_REQUIRED, // Namibia
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NI: VISA_TYPES.VISA_REQUIRED, // Nicaragua
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PW: VISA_TYPES.VISA_REQUIRED, // Palau
  PA: VISA_TYPES.VISA_REQUIRED, // Panama
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PH: VISA_TYPES.VISA_REQUIRED, // Philippines
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  LC: VISA_TYPES.VISA_REQUIRED, // Saint Lucia
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  SN: VISA_TYPES.VISA_REQUIRED, // Senegal
  RS: VISA_TYPES.VISA_REQUIRED, // Serbia
  SG: VISA_TYPES.VISA_REQUIRED, // Singapore
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  ZA: VISA_TYPES.VISA_REQUIRED, // South Africa
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TZ: VISA_TYPES.VISA_REQUIRED, // Tanzania
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TR: VISA_TYPES.VISA_REQUIRED, // Turkey
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  UA: VISA_TYPES.VISA_REQUIRED, // Ukraine
  AE: VISA_TYPES.VISA_REQUIRED, // United Arab Emirates
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
  // Travel restricted countries
  LY: VISA_TYPES.TRAVEL_RESTRICTED, // Libya
  SD: VISA_TYPES.TRAVEL_RESTRICTED, // Sudan
};

// BB Passport holders
// Source: Wikipedia
visaRequirements.BB = {
  ...visaRequirements.BB,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AO: VISA_TYPES.VISA_FREE, // Angola
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
  AT: VISA_TYPES.VISA_FREE, // Austria
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BD: VISA_TYPES.VISA_FREE, // Bangladesh
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CA: VISA_TYPES.VISA_FREE, // Canada
  CL: VISA_TYPES.VISA_FREE, // Chile
  CN: VISA_TYPES.VISA_FREE, // China
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CU: VISA_TYPES.VISA_FREE, // Cuba
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  GQ: VISA_TYPES.VISA_FREE, // Equatorial Guinea
  EE: VISA_TYPES.VISA_FREE, // Estonia
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GE: VISA_TYPES.VISA_FREE, // Georgia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GH: VISA_TYPES.VISA_FREE, // Ghana
  GR: VISA_TYPES.VISA_FREE, // Greece
  GD: VISA_TYPES.VISA_FREE, // Grenada
  GT: VISA_TYPES.VISA_FREE, // Guatemala
  GY: VISA_TYPES.VISA_FREE, // Guyana
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IT: VISA_TYPES.VISA_FREE, // Italy
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  JP: VISA_TYPES.VISA_FREE, // Japan
  KE: VISA_TYPES.VISA_FREE, // Kenya
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  LV: VISA_TYPES.VISA_FREE, // Latvia
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MW: VISA_TYPES.VISA_FREE, // Malawi
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MT: VISA_TYPES.VISA_FREE, // Malta
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  MX: VISA_TYPES.VISA_FREE, // Mexico
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MC: VISA_TYPES.VISA_FREE, // Monaco
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  NO: VISA_TYPES.VISA_FREE, // Norway
  PA: VISA_TYPES.VISA_FREE, // Panama
  PE: VISA_TYPES.VISA_FREE, // Peru
  PH: VISA_TYPES.VISA_FREE, // Philippines
  PL: VISA_TYPES.VISA_FREE, // Poland
  PT: VISA_TYPES.VISA_FREE, // Portugal
  RO: VISA_TYPES.VISA_FREE, // Romania
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  KN: VISA_TYPES.VISA_FREE, // Saint Kitts and Nevis
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  SM: VISA_TYPES.VISA_FREE, // San Marino
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TZ: VISA_TYPES.VISA_FREE, // Tanzania
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  UG: VISA_TYPES.VISA_FREE, // Uganda
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  ZW: VISA_TYPES.VISA_FREE, // Zimbabwe
  // ETA countries
  GB: VISA_TYPES.ETA, // United Kingdom
  IL: VISA_TYPES.ETA, // Israel
  KR: VISA_TYPES.ETA, // South Korea
  PK: VISA_TYPES.ETA, // Pakistan
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  AM: VISA_TYPES.VISA_ON_ARRIVAL, // Armenia
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  SC: VISA_TYPES.VISA_ON_ARRIVAL, // Seychelles
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  SB: VISA_TYPES.VISA_ON_ARRIVAL, // Solomon Islands
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TO: VISA_TYPES.VISA_ON_ARRIVAL, // Tonga
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  // E-visa countries
  AU: VISA_TYPES.E_VISA, // Australia
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CD: VISA_TYPES.E_VISA, // DR Congo
  DJ: VISA_TYPES.E_VISA, // Djibouti
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MN: VISA_TYPES.E_VISA, // Mongolia
  NG: VISA_TYPES.E_VISA, // Nigeria
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  QA: VISA_TYPES.E_VISA, // Qatar
  RU: VISA_TYPES.E_VISA, // Russia
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SA: VISA_TYPES.E_VISA, // Saudi Arabia
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TH: VISA_TYPES.E_VISA, // Thailand
  TG: VISA_TYPES.E_VISA, // Togo
  TR: VISA_TYPES.E_VISA, // Turkey
  UA: VISA_TYPES.E_VISA, // Ukraine
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CI: VISA_TYPES.VISA_REQUIRED, // Côte d'Ivoire
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  MM: VISA_TYPES.VISA_REQUIRED, // Myanmar
  NA: VISA_TYPES.VISA_REQUIRED, // Namibia
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  US: VISA_TYPES.VISA_REQUIRED, // United States
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// BY Passport holders
// Source: Wikipedia
visaRequirements.BY = {
  ...visaRequirements.BY,
  // Visa-free countries
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
  AM: VISA_TYPES.VISA_FREE, // Armenia
  AZ: VISA_TYPES.VISA_FREE, // Azerbaijan
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BR: VISA_TYPES.VISA_FREE, // Brazil
  CN: VISA_TYPES.VISA_FREE, // China
  CU: VISA_TYPES.VISA_FREE, // Cuba
  DM: VISA_TYPES.VISA_FREE, // Dominica
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GE: VISA_TYPES.VISA_FREE, // Georgia
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  IR: VISA_TYPES.VISA_FREE, // Iran
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  LY: VISA_TYPES.VISA_FREE, // Libya
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MN: VISA_TYPES.VISA_FREE, // Mongolia
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  NA: VISA_TYPES.VISA_FREE, // Namibia
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  PA: VISA_TYPES.VISA_FREE, // Panama
  PE: VISA_TYPES.VISA_FREE, // Peru
  RU: VISA_TYPES.VISA_FREE, // Russia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SR: VISA_TYPES.VISA_FREE, // Suriname
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  VN: VISA_TYPES.VISA_FREE, // Vietnam
  // ETA countries
  IL: VISA_TYPES.ETA, // Israel
  KE: VISA_TYPES.ETA, // Kenya
  // Visa on arrival countries
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GD: VISA_TYPES.VISA_ON_ARRIVAL, // Grenada
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  ID: VISA_TYPES.VISA_ON_ARRIVAL, // Indonesia
  JM: VISA_TYPES.VISA_ON_ARRIVAL, // Jamaica
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  QA: VISA_TYPES.VISA_ON_ARRIVAL, // Qatar
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka
  SY: VISA_TYPES.VISA_ON_ARRIVAL, // Syria
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TH: VISA_TYPES.VISA_ON_ARRIVAL, // Thailand
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZM: VISA_TYPES.VISA_ON_ARRIVAL, // Zambia
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  BS: VISA_TYPES.E_VISA, // Bahamas
  BH: VISA_TYPES.E_VISA, // Bahrain
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CO: VISA_TYPES.E_VISA, // Colombia
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  KW: VISA_TYPES.E_VISA, // Kuwait
  LS: VISA_TYPES.E_VISA, // Lesotho
  MR: VISA_TYPES.E_VISA, // Mauritania
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  PH: VISA_TYPES.E_VISA, // Philippines
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SA: VISA_TYPES.E_VISA, // Saudi Arabia
  SC: VISA_TYPES.E_VISA, // Seychelles
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  ZA: VISA_TYPES.E_VISA, // South Africa
  SS: VISA_TYPES.E_VISA, // South Sudan
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
  AU: VISA_TYPES.VISA_REQUIRED, // Australia
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize
  BA: VISA_TYPES.VISA_REQUIRED, // Bosnia and Herzegovina
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  BG: VISA_TYPES.VISA_REQUIRED, // Bulgaria
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CL: VISA_TYPES.VISA_REQUIRED, // Chile
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  HR: VISA_TYPES.VISA_REQUIRED, // Croatia
  CY: VISA_TYPES.VISA_REQUIRED, // Cyprus
  CZ: VISA_TYPES.VISA_REQUIRED, // Czechia
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  DO: VISA_TYPES.VISA_REQUIRED, // Dominican Republic
  SV: VISA_TYPES.VISA_REQUIRED, // El Salvador
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FJ: VISA_TYPES.VISA_REQUIRED, // Fiji
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  LC: VISA_TYPES.VISA_REQUIRED, // Saint Lucia
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SN: VISA_TYPES.VISA_REQUIRED, // Senegal
  SG: VISA_TYPES.VISA_REQUIRED, // Singapore
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TT: VISA_TYPES.VISA_REQUIRED, // Trinidad and Tobago
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// BE Passport holders
// Source: Wikipedia
visaRequirements.BE = {
  ...visaRequirements.BE,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AO: VISA_TYPES.VISA_FREE, // Angola
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
  AM: VISA_TYPES.VISA_FREE, // Armenia
  AT: VISA_TYPES.VISA_FREE, // Austria
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BO: VISA_TYPES.VISA_FREE, // Bolivia
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BN: VISA_TYPES.VISA_FREE, // Brunei
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CA: VISA_TYPES.VISA_FREE, // Canada
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  CL: VISA_TYPES.VISA_FREE, // Chile
  CN: VISA_TYPES.VISA_FREE, // China
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  EE: VISA_TYPES.VISA_FREE, // Estonia
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GE: VISA_TYPES.VISA_FREE, // Georgia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GR: VISA_TYPES.VISA_FREE, // Greece
  GD: VISA_TYPES.VISA_FREE, // Grenada
  GT: VISA_TYPES.VISA_FREE, // Guatemala
  GY: VISA_TYPES.VISA_FREE, // Guyana
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IT: VISA_TYPES.VISA_FREE, // Italy
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  JP: VISA_TYPES.VISA_FREE, // Japan
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  LA: VISA_TYPES.VISA_FREE, // Laos
  LV: VISA_TYPES.VISA_FREE, // Latvia
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MT: VISA_TYPES.VISA_FREE, // Malta
  MH: VISA_TYPES.VISA_FREE, // Marshall Islands
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  MX: VISA_TYPES.VISA_FREE, // Mexico
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MC: VISA_TYPES.VISA_FREE, // Monaco
  MN: VISA_TYPES.VISA_FREE, // Mongolia
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  MA: VISA_TYPES.VISA_FREE, // Morocco
  MZ: VISA_TYPES.VISA_FREE, // Mozambique
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  NO: VISA_TYPES.VISA_FREE, // Norway
  OM: VISA_TYPES.VISA_FREE, // Oman
  PW: VISA_TYPES.VISA_FREE, // Palau
  PA: VISA_TYPES.VISA_FREE, // Panama
  PY: VISA_TYPES.VISA_FREE, // Paraguay
  PE: VISA_TYPES.VISA_FREE, // Peru
  PH: VISA_TYPES.VISA_FREE, // Philippines
  PL: VISA_TYPES.VISA_FREE, // Poland
  PT: VISA_TYPES.VISA_FREE, // Portugal
  QA: VISA_TYPES.VISA_FREE, // Qatar
  RO: VISA_TYPES.VISA_FREE, // Romania
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SM: VISA_TYPES.VISA_FREE, // San Marino
  ST: VISA_TYPES.VISA_FREE, // São Tomé and Príncipe
  SN: VISA_TYPES.VISA_FREE, // Senegal
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  SB: VISA_TYPES.VISA_FREE, // Solomon Islands
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TL: VISA_TYPES.VISA_FREE, // Timor-Leste
  TO: VISA_TYPES.VISA_FREE, // Tonga
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  TV: VISA_TYPES.VISA_FREE, // Tuvalu
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  GB: VISA_TYPES.VISA_FREE, // United Kingdom
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  VN: VISA_TYPES.VISA_FREE, // Vietnam
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  AU: VISA_TYPES.ETA, // Australia
  IL: VISA_TYPES.ETA, // Israel
  KE: VISA_TYPES.ETA, // Kenya
  KR: VISA_TYPES.ETA, // South Korea
  NZ: VISA_TYPES.ETA, // New Zealand
  US: VISA_TYPES.ETA, // United States
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BF: VISA_TYPES.VISA_ON_ARRIVAL, // Burkina Faso
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  ID: VISA_TYPES.VISA_ON_ARRIVAL, // Indonesia
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IR: VISA_TYPES.E_VISA, // Iran
  IQ: VISA_TYPES.E_VISA, // Iraq
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  RU: VISA_TYPES.E_VISA, // Russia
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// BZ Passport holders
// Source: Wikipedia
visaRequirements.BZ = {
  ...visaRequirements.BZ,
  // Visa-free countries
  AO: VISA_TYPES.VISA_FREE, // Angola
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BJ: VISA_TYPES.VISA_FREE, // Benin
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BR: VISA_TYPES.VISA_FREE, // Brazil
  CL: VISA_TYPES.VISA_FREE, // Chile
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GE: VISA_TYPES.VISA_FREE, // Georgia
  GD: VISA_TYPES.VISA_FREE, // Grenada
  GT: VISA_TYPES.VISA_FREE, // Guatemala
  GY: VISA_TYPES.VISA_FREE, // Guyana
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  IE: VISA_TYPES.VISA_FREE, // Ireland
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  MW: VISA_TYPES.VISA_FREE, // Malawi
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  MX: VISA_TYPES.VISA_FREE, // Mexico
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  PA: VISA_TYPES.VISA_FREE, // Panama
  PE: VISA_TYPES.VISA_FREE, // Peru
  PH: VISA_TYPES.VISA_FREE, // Philippines
  RU: VISA_TYPES.VISA_FREE, // Russia
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  KN: VISA_TYPES.VISA_FREE, // Saint Kitts and Nevis
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SB: VISA_TYPES.VISA_FREE, // Solomon Islands
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  SR: VISA_TYPES.VISA_FREE, // Suriname
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TR: VISA_TYPES.VISA_FREE, // Turkey
  UG: VISA_TYPES.VISA_FREE, // Uganda
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  ZW: VISA_TYPES.VISA_FREE, // Zimbabwe
  // ETA countries
  GB: VISA_TYPES.ETA, // United Kingdom
  IL: VISA_TYPES.ETA, // Israel
  KE: VISA_TYPES.ETA, // Kenya
  // Visa on arrival countries
  AM: VISA_TYPES.VISA_ON_ARRIVAL, // Armenia
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  BH: VISA_TYPES.E_VISA, // Bahrain
  BT: VISA_TYPES.E_VISA, // Bhutan
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  ID: VISA_TYPES.E_VISA, // Indonesia
  IR: VISA_TYPES.E_VISA, // Iran
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
  MN: VISA_TYPES.E_VISA, // Mongolia
  MM: VISA_TYPES.E_VISA, // Myanmar
  NA: VISA_TYPES.E_VISA, // Namibia
  NG: VISA_TYPES.E_VISA, // Nigeria
  OM: VISA_TYPES.E_VISA, // Oman
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  QA: VISA_TYPES.E_VISA, // Qatar
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TH: VISA_TYPES.E_VISA, // Thailand
  TG: VISA_TYPES.E_VISA, // Togo
  UA: VISA_TYPES.E_VISA, // Ukraine
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  AU: VISA_TYPES.VISA_REQUIRED, // Australia
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  AZ: VISA_TYPES.VISA_REQUIRED, // Azerbaijan
  BD: VISA_TYPES.VISA_REQUIRED, // Bangladesh
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium
  BA: VISA_TYPES.VISA_REQUIRED, // Bosnia and Herzegovina
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  BG: VISA_TYPES.VISA_REQUIRED, // Bulgaria
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  HR: VISA_TYPES.VISA_REQUIRED, // Croatia
  CY: VISA_TYPES.VISA_REQUIRED, // Cyprus
  CZ: VISA_TYPES.VISA_REQUIRED, // Czechia
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  JO: VISA_TYPES.VISA_REQUIRED, // Jordan
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  RS: VISA_TYPES.VISA_REQUIRED, // Serbia
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  US: VISA_TYPES.VISA_REQUIRED, // United States
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// BJ Passport holders
// Source: Wikipedia
visaRequirements.BJ = {
  ...visaRequirements.BJ,
  // Visa-free countries
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BF: VISA_TYPES.VISA_FREE, // Burkina Faso
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  CF: VISA_TYPES.VISA_FREE, // Central African Republic
  TD: VISA_TYPES.VISA_FREE, // Chad
  CI: VISA_TYPES.VISA_FREE, // Côte d'Ivoire
  CU: VISA_TYPES.VISA_FREE, // Cuba
  DM: VISA_TYPES.VISA_FREE, // Dominica
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GH: VISA_TYPES.VISA_FREE, // Ghana
  GD: VISA_TYPES.VISA_FREE, // Grenada
  GN: VISA_TYPES.VISA_FREE, // Guinea
  GW: VISA_TYPES.VISA_FREE, // Guinea-Bissau
  HT: VISA_TYPES.VISA_FREE, // Haiti
  KE: VISA_TYPES.VISA_FREE, // Kenya
  LR: VISA_TYPES.VISA_FREE, // Liberia
  LY: VISA_TYPES.VISA_FREE, // Libya
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  ML: VISA_TYPES.VISA_FREE, // Mali
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  NE: VISA_TYPES.VISA_FREE, // Niger
  NG: VISA_TYPES.VISA_FREE, // Nigeria
  PH: VISA_TYPES.VISA_FREE, // Philippines
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SN: VISA_TYPES.VISA_FREE, // Senegal
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SL: VISA_TYPES.VISA_FREE, // Sierra Leone
  SG: VISA_TYPES.VISA_FREE, // Singapore
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  TG: VISA_TYPES.VISA_FREE, // Togo
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  // ETA countries
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  CG: VISA_TYPES.VISA_ON_ARRIVAL, // Republic of the Congo
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  LC: VISA_TYPES.VISA_ON_ARRIVAL, // Saint Lucia
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  UG: VISA_TYPES.VISA_ON_ARRIVAL, // Uganda
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  BH: VISA_TYPES.E_VISA, // Bahrain
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  CM: VISA_TYPES.E_VISA, // Cameroon
  CO: VISA_TYPES.E_VISA, // Colombia
  CD: VISA_TYPES.E_VISA, // DR Congo
  DJ: VISA_TYPES.E_VISA, // Djibouti
  SV: VISA_TYPES.E_VISA, // El Salvador
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GE: VISA_TYPES.E_VISA, // Georgia
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
  MN: VISA_TYPES.E_VISA, // Mongolia
  OM: VISA_TYPES.E_VISA, // Oman
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  QA: VISA_TYPES.E_VISA, // Qatar
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SR: VISA_TYPES.E_VISA, // Suriname
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TH: VISA_TYPES.E_VISA, // Thailand
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  VN: VISA_TYPES.E_VISA, // Vietnam
  ZM: VISA_TYPES.E_VISA, // Zambia
  ZW: VISA_TYPES.E_VISA, // Zimbabwe
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  AM: VISA_TYPES.VISA_REQUIRED, // Armenia
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  AZ: VISA_TYPES.VISA_REQUIRED, // Azerbaijan
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize
  BA: VISA_TYPES.VISA_REQUIRED, // Bosnia and Herzegovina
  BR: VISA_TYPES.VISA_REQUIRED, // Brazil
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  BG: VISA_TYPES.VISA_REQUIRED, // Bulgaria
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CL: VISA_TYPES.VISA_REQUIRED, // Chile
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  HR: VISA_TYPES.VISA_REQUIRED, // Croatia
  CY: VISA_TYPES.VISA_REQUIRED, // Cyprus
  CZ: VISA_TYPES.VISA_REQUIRED, // Czechia
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  DO: VISA_TYPES.VISA_REQUIRED, // Dominican Republic
  EG: VISA_TYPES.VISA_REQUIRED, // Egypt
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FJ: VISA_TYPES.VISA_REQUIRED, // Fiji
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JM: VISA_TYPES.VISA_REQUIRED, // Jamaica
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  JO: VISA_TYPES.VISA_REQUIRED, // Jordan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  MM: VISA_TYPES.VISA_REQUIRED, // Myanmar
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  PA: VISA_TYPES.VISA_REQUIRED, // Panama
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  RS: VISA_TYPES.VISA_REQUIRED, // Serbia
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TT: VISA_TYPES.VISA_REQUIRED, // Trinidad and Tobago
  TR: VISA_TYPES.VISA_REQUIRED, // Turkey
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  UA: VISA_TYPES.VISA_REQUIRED, // Ukraine
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  UZ: VISA_TYPES.VISA_REQUIRED, // Uzbekistan
  VU: VISA_TYPES.VISA_REQUIRED, // Vanuatu
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// BT Passport holders
// Source: Wikipedia
visaRequirements.BT = {
  ...visaRequirements.BT,
  // Visa-free countries
  BD: VISA_TYPES.VISA_FREE, // Bangladesh
  BB: VISA_TYPES.VISA_FREE, // Barbados
  CO: VISA_TYPES.VISA_FREE, // Colombia
  DM: VISA_TYPES.VISA_FREE, // Dominica
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  GM: VISA_TYPES.VISA_FREE, // Gambia
  HT: VISA_TYPES.VISA_FREE, // Haiti
  IN: VISA_TYPES.VISA_FREE, // India
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  PA: VISA_TYPES.VISA_FREE, // Panama
  PH: VISA_TYPES.VISA_FREE, // Philippines
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SR: VISA_TYPES.VISA_FREE, // Suriname
  TH: VISA_TYPES.VISA_FREE, // Thailand
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  KE: VISA_TYPES.ETA, // Kenya
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  LC: VISA_TYPES.VISA_ON_ARRIVAL, // Saint Lucia
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  AM: VISA_TYPES.E_VISA, // Armenia
  AU: VISA_TYPES.E_VISA, // Australia
  BS: VISA_TYPES.E_VISA, // Bahamas
  BH: VISA_TYPES.E_VISA, // Bahrain
  BJ: VISA_TYPES.E_VISA, // Benin
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  SV: VISA_TYPES.E_VISA, // El Salvador
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GE: VISA_TYPES.E_VISA, // Georgia
  GN: VISA_TYPES.E_VISA, // Guinea
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MY: VISA_TYPES.E_VISA, // Malaysia
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
  MN: VISA_TYPES.E_VISA, // Mongolia
  MM: VISA_TYPES.E_VISA, // Myanmar
  NA: VISA_TYPES.E_VISA, // Namibia
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  QA: VISA_TYPES.E_VISA, // Qatar
  RU: VISA_TYPES.E_VISA, // Russia
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  UA: VISA_TYPES.E_VISA, // Ukraine
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  AZ: VISA_TYPES.VISA_REQUIRED, // Azerbaijan
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize
  BA: VISA_TYPES.VISA_REQUIRED, // Bosnia and Herzegovina
  BR: VISA_TYPES.VISA_REQUIRED, // Brazil
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  BG: VISA_TYPES.VISA_REQUIRED, // Bulgaria
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CL: VISA_TYPES.VISA_REQUIRED, // Chile
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  HR: VISA_TYPES.VISA_REQUIRED, // Croatia
  CY: VISA_TYPES.VISA_REQUIRED, // Cyprus
  CZ: VISA_TYPES.VISA_REQUIRED, // Czechia
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  DO: VISA_TYPES.VISA_REQUIRED, // Dominican Republic
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FJ: VISA_TYPES.VISA_REQUIRED, // Fiji
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  GD: VISA_TYPES.VISA_REQUIRED, // Grenada
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JM: VISA_TYPES.VISA_REQUIRED, // Jamaica
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  SN: VISA_TYPES.VISA_REQUIRED, // Senegal
  RS: VISA_TYPES.VISA_REQUIRED, // Serbia
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  ZA: VISA_TYPES.VISA_REQUIRED, // South Africa
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TT: VISA_TYPES.VISA_REQUIRED, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TR: VISA_TYPES.VISA_REQUIRED, // Turkey
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  VU: VISA_TYPES.VISA_REQUIRED, // Vanuatu
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// BO Passport holders
// Source: Wikipedia
visaRequirements.BO = {
  ...visaRequirements.BO,
  // Visa-free countries
  AR: VISA_TYPES.VISA_FREE, // Argentina
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BR: VISA_TYPES.VISA_FREE, // Brazil
  CL: VISA_TYPES.VISA_FREE, // Chile
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  HT: VISA_TYPES.VISA_FREE, // Haiti
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MX: VISA_TYPES.VISA_FREE, // Mexico
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  OM: VISA_TYPES.VISA_FREE, // Oman
  PA: VISA_TYPES.VISA_FREE, // Panama
  PY: VISA_TYPES.VISA_FREE, // Paraguay
  PE: VISA_TYPES.VISA_FREE, // Peru
  PH: VISA_TYPES.VISA_FREE, // Philippines
  QA: VISA_TYPES.VISA_FREE, // Qatar
  RU: VISA_TYPES.VISA_FREE, // Russia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SG: VISA_TYPES.VISA_FREE, // Singapore
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  SR: VISA_TYPES.VISA_FREE, // Suriname
  TR: VISA_TYPES.VISA_FREE, // Turkey
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  // ETA countries
  KE: VISA_TYPES.ETA, // Kenya
  KN: VISA_TYPES.ETA, // Saint Kitts and Nevis
  SC: VISA_TYPES.ETA, // Seychelles
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  LC: VISA_TYPES.VISA_ON_ARRIVAL, // Saint Lucia
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TH: VISA_TYPES.VISA_ON_ARRIVAL, // Thailand
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZM: VISA_TYPES.VISA_ON_ARRIVAL, // Zambia
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AO: VISA_TYPES.E_VISA, // Angola
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  AM: VISA_TYPES.E_VISA, // Armenia
  AU: VISA_TYPES.E_VISA, // Australia
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GE: VISA_TYPES.E_VISA, // Georgia
  GN: VISA_TYPES.E_VISA, // Guinea
  GY: VISA_TYPES.E_VISA, // Guyana
  IN: VISA_TYPES.E_VISA, // India
  ID: VISA_TYPES.E_VISA, // Indonesia
  IQ: VISA_TYPES.E_VISA, // Iraq
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
  MN: VISA_TYPES.E_VISA, // Mongolia
  MM: VISA_TYPES.E_VISA, // Myanmar
  NA: VISA_TYPES.E_VISA, // Namibia
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TG: VISA_TYPES.E_VISA, // Togo
  TT: VISA_TYPES.E_VISA, // Trinidad and Tobago
  UG: VISA_TYPES.E_VISA, // Uganda
  UA: VISA_TYPES.E_VISA, // Ukraine
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
  VN: VISA_TYPES.E_VISA, // Vietnam
  ZW: VISA_TYPES.E_VISA, // Zimbabwe
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium
  BA: VISA_TYPES.VISA_REQUIRED, // Bosnia and Herzegovina
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  BG: VISA_TYPES.VISA_REQUIRED, // Bulgaria
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  HR: VISA_TYPES.VISA_REQUIRED, // Croatia
  CY: VISA_TYPES.VISA_REQUIRED, // Cyprus
  CZ: VISA_TYPES.VISA_REQUIRED, // Czechia
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FJ: VISA_TYPES.VISA_REQUIRED, // Fiji
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  GM: VISA_TYPES.VISA_REQUIRED, // Gambia
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  GD: VISA_TYPES.VISA_REQUIRED, // Grenada
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KZ: VISA_TYPES.VISA_REQUIRED, // Kazakhstan
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  SN: VISA_TYPES.VISA_REQUIRED, // Senegal
  RS: VISA_TYPES.VISA_REQUIRED, // Serbia
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  VU: VISA_TYPES.VISA_REQUIRED, // Vanuatu
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// BA Passport holders
// Source: Wikipedia
visaRequirements.BA = {
  ...visaRequirements.BA,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AR: VISA_TYPES.VISA_FREE, // Argentina
  AT: VISA_TYPES.VISA_FREE, // Austria
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CL: VISA_TYPES.VISA_FREE, // Chile
  CN: VISA_TYPES.VISA_FREE, // China
  CO: VISA_TYPES.VISA_FREE, // Colombia
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CU: VISA_TYPES.VISA_FREE, // Cuba
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  EE: VISA_TYPES.VISA_FREE, // Estonia
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GE: VISA_TYPES.VISA_FREE, // Georgia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GR: VISA_TYPES.VISA_FREE, // Greece
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IR: VISA_TYPES.VISA_FREE, // Iran
  IT: VISA_TYPES.VISA_FREE, // Italy
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  LV: VISA_TYPES.VISA_FREE, // Latvia
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MT: VISA_TYPES.VISA_FREE, // Malta
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MC: VISA_TYPES.VISA_FREE, // Monaco
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  NO: VISA_TYPES.VISA_FREE, // Norway
  PA: VISA_TYPES.VISA_FREE, // Panama
  PL: VISA_TYPES.VISA_FREE, // Poland
  PT: VISA_TYPES.VISA_FREE, // Portugal
  RO: VISA_TYPES.VISA_FREE, // Romania
  RU: VISA_TYPES.VISA_FREE, // Russia
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SM: VISA_TYPES.VISA_FREE, // San Marino
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  // ETA countries
  KE: VISA_TYPES.ETA, // Kenya
  KR: VISA_TYPES.ETA, // South Korea
  SC: VISA_TYPES.ETA, // Seychelles
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  AM: VISA_TYPES.VISA_ON_ARRIVAL, // Armenia
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  ID: VISA_TYPES.VISA_ON_ARRIVAL, // Indonesia
  JM: VISA_TYPES.VISA_ON_ARRIVAL, // Jamaica
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  QA: VISA_TYPES.VISA_ON_ARRIVAL, // Qatar
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZM: VISA_TYPES.VISA_ON_ARRIVAL, // Zambia
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  AU: VISA_TYPES.E_VISA, // Australia
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BS: VISA_TYPES.E_VISA, // Bahamas
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CG: VISA_TYPES.E_VISA, // Republic of the Congo
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  DJ: VISA_TYPES.E_VISA, // Djibouti
  EG: VISA_TYPES.E_VISA, // Egypt
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  FJ: VISA_TYPES.E_VISA, // Fiji
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MN: VISA_TYPES.E_VISA, // Mongolia
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TH: VISA_TYPES.E_VISA, // Thailand
  TG: VISA_TYPES.E_VISA, // Togo
  TM: VISA_TYPES.E_VISA, // Turkmenistan
  UG: VISA_TYPES.E_VISA, // Uganda
  VU: VISA_TYPES.E_VISA, // Vanuatu
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
  BB: VISA_TYPES.VISA_REQUIRED, // Barbados
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  SV: VISA_TYPES.VISA_REQUIRED, // El Salvador
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GM: VISA_TYPES.VISA_REQUIRED, // Gambia
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GD: VISA_TYPES.VISA_REQUIRED, // Grenada
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  NA: VISA_TYPES.VISA_REQUIRED, // Namibia
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NI: VISA_TYPES.VISA_REQUIRED, // Nicaragua
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PH: VISA_TYPES.VISA_REQUIRED, // Philippines
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  SN: VISA_TYPES.VISA_REQUIRED, // Senegal
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  ZA: VISA_TYPES.VISA_REQUIRED, // South Africa
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// BW Passport holders
// Source: Wikipedia
visaRequirements.BW = {
  ...visaRequirements.BW,
  // Visa-free countries
  AO: VISA_TYPES.VISA_FREE, // Angola
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BD: VISA_TYPES.VISA_FREE, // Bangladesh
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BJ: VISA_TYPES.VISA_FREE, // Benin
  BR: VISA_TYPES.VISA_FREE, // Brazil
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GE: VISA_TYPES.VISA_FREE, // Georgia
  GH: VISA_TYPES.VISA_FREE, // Ghana
  GD: VISA_TYPES.VISA_FREE, // Grenada
  GY: VISA_TYPES.VISA_FREE, // Guyana
  HT: VISA_TYPES.VISA_FREE, // Haiti
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  KR: VISA_TYPES.VISA_FREE, // South Korea
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  MW: VISA_TYPES.VISA_FREE, // Malawi
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MZ: VISA_TYPES.VISA_FREE, // Mozambique
  NA: VISA_TYPES.VISA_FREE, // Namibia
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  PA: VISA_TYPES.VISA_FREE, // Panama
  PH: VISA_TYPES.VISA_FREE, // Philippines
  RU: VISA_TYPES.VISA_FREE, // Russia
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  KN: VISA_TYPES.VISA_FREE, // Saint Kitts and Nevis
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  SG: VISA_TYPES.VISA_FREE, // Singapore
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  TZ: VISA_TYPES.VISA_FREE, // Tanzania
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  UG: VISA_TYPES.VISA_FREE, // Uganda
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  ZW: VISA_TYPES.VISA_FREE, // Zimbabwe
  // ETA countries
  IL: VISA_TYPES.ETA, // Israel
  KE: VISA_TYPES.ETA, // Kenya
  PK: VISA_TYPES.ETA, // Pakistan
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  SC: VISA_TYPES.VISA_ON_ARRIVAL, // Seychelles
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AU: VISA_TYPES.E_VISA, // Australia
  BT: VISA_TYPES.E_VISA, // Bhutan
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CO: VISA_TYPES.E_VISA, // Colombia
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  SV: VISA_TYPES.E_VISA, // El Salvador
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
  MN: VISA_TYPES.E_VISA, // Mongolia
  NG: VISA_TYPES.E_VISA, // Nigeria
  OM: VISA_TYPES.E_VISA, // Oman
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  QA: VISA_TYPES.E_VISA, // Qatar
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SR: VISA_TYPES.E_VISA, // Suriname
  SY: VISA_TYPES.E_VISA, // Syria
  TH: VISA_TYPES.E_VISA, // Thailand
  TG: VISA_TYPES.E_VISA, // Togo
  TR: VISA_TYPES.E_VISA, // Turkey
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  AM: VISA_TYPES.VISA_REQUIRED, // Armenia
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  AZ: VISA_TYPES.VISA_REQUIRED, // Azerbaijan
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium
  BA: VISA_TYPES.VISA_REQUIRED, // Bosnia and Herzegovina
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  BG: VISA_TYPES.VISA_REQUIRED, // Bulgaria
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CL: VISA_TYPES.VISA_REQUIRED, // Chile
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  HR: VISA_TYPES.VISA_REQUIRED, // Croatia
  CY: VISA_TYPES.VISA_REQUIRED, // Cyprus
  CZ: VISA_TYPES.VISA_REQUIRED, // Czechia
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  EG: VISA_TYPES.VISA_REQUIRED, // Egypt
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  GW: VISA_TYPES.VISA_REQUIRED, // Guinea-Bissau
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  JO: VISA_TYPES.VISA_REQUIRED, // Jordan
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  MM: VISA_TYPES.VISA_REQUIRED, // Myanmar
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NI: VISA_TYPES.VISA_REQUIRED, // Nicaragua
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  RS: VISA_TYPES.VISA_REQUIRED, // Serbia
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TJ: VISA_TYPES.VISA_REQUIRED, // Tajikistan
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  UA: VISA_TYPES.VISA_REQUIRED, // Ukraine
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  UZ: VISA_TYPES.VISA_REQUIRED, // Uzbekistan
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// BR Passport holders
// Source: Wikipedia
visaRequirements.BR = {
  ...visaRequirements.BR,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AO: VISA_TYPES.VISA_FREE, // Angola
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
  AM: VISA_TYPES.VISA_FREE, // Armenia
  AT: VISA_TYPES.VISA_FREE, // Austria
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BO: VISA_TYPES.VISA_FREE, // Bolivia
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  CL: VISA_TYPES.VISA_FREE, // Chile
  CN: VISA_TYPES.VISA_FREE, // China
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  EE: VISA_TYPES.VISA_FREE, // Estonia
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GE: VISA_TYPES.VISA_FREE, // Georgia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GR: VISA_TYPES.VISA_FREE, // Greece
  GD: VISA_TYPES.VISA_FREE, // Grenada
  GT: VISA_TYPES.VISA_FREE, // Guatemala
  GY: VISA_TYPES.VISA_FREE, // Guyana
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  ID: VISA_TYPES.VISA_FREE, // Indonesia
  IR: VISA_TYPES.VISA_FREE, // Iran
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IT: VISA_TYPES.VISA_FREE, // Italy
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  JP: VISA_TYPES.VISA_FREE, // Japan
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  LV: VISA_TYPES.VISA_FREE, // Latvia
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MT: VISA_TYPES.VISA_FREE, // Malta
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MC: VISA_TYPES.VISA_FREE, // Monaco
  MN: VISA_TYPES.VISA_FREE, // Mongolia
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  MA: VISA_TYPES.VISA_FREE, // Morocco
  NA: VISA_TYPES.VISA_FREE, // Namibia
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  NO: VISA_TYPES.VISA_FREE, // Norway
  OM: VISA_TYPES.VISA_FREE, // Oman
  PA: VISA_TYPES.VISA_FREE, // Panama
  PY: VISA_TYPES.VISA_FREE, // Paraguay
  PE: VISA_TYPES.VISA_FREE, // Peru
  PH: VISA_TYPES.VISA_FREE, // Philippines
  PL: VISA_TYPES.VISA_FREE, // Poland
  PT: VISA_TYPES.VISA_FREE, // Portugal
  QA: VISA_TYPES.VISA_FREE, // Qatar
  RO: VISA_TYPES.VISA_FREE, // Romania
  RU: VISA_TYPES.VISA_FREE, // Russia
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  SM: VISA_TYPES.VISA_FREE, // San Marino
  ST: VISA_TYPES.VISA_FREE, // São Tomé and Príncipe
  SN: VISA_TYPES.VISA_FREE, // Senegal
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  SB: VISA_TYPES.VISA_FREE, // Solomon Islands
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  // ETA countries
  GB: VISA_TYPES.ETA, // United Kingdom
  IL: VISA_TYPES.ETA, // Israel
  KE: VISA_TYPES.ETA, // Kenya
  KR: VISA_TYPES.ETA, // South Korea
  LK: VISA_TYPES.ETA, // Sri Lanka
  NZ: VISA_TYPES.ETA, // New Zealand
  PK: VISA_TYPES.ETA, // Pakistan
  KN: VISA_TYPES.ETA, // Saint Kitts and Nevis
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TO: VISA_TYPES.VISA_ON_ARRIVAL, // Tonga
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZM: VISA_TYPES.VISA_ON_ARRIVAL, // Zambia
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AU: VISA_TYPES.E_VISA, // Australia
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  LS: VISA_TYPES.E_VISA, // Lesotho
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  BD: VISA_TYPES.VISA_REQUIRED, // Bangladesh
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GM: VISA_TYPES.VISA_REQUIRED, // Gambia
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  US: VISA_TYPES.VISA_REQUIRED, // United States
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// For Andorran passport holders, any country not explicitly listed is visa free.
// This ensures full coverage across the same country set as the US map data.
allCountryCodes.forEach(countryCode => {
  if (!visaRequirements.AD[countryCode]) {
    visaRequirements.AD[countryCode] = VISA_TYPES.VISA_FREE;
  }
});

// Antarctica should remain "no data" for AD.
visaRequirements.AD.AQ = null;

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
