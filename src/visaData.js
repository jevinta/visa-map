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

// GB-BNO Passport holders
// Source: Wikipedia
visaRequirements['GB-BNO'] = {
  ...visaRequirements['GB-BNO'],
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
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CA: VISA_TYPES.VISA_FREE, // Canada
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  CL: VISA_TYPES.VISA_FREE, // Chile
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  EE: VISA_TYPES.VISA_FREE, // Estonia
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GM: VISA_TYPES.VISA_FREE, // Gambia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GR: VISA_TYPES.VISA_FREE, // Greece
  GD: VISA_TYPES.VISA_FREE, // Grenada
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IL: VISA_TYPES.VISA_FREE, // Israel
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
  MW: VISA_TYPES.VISA_FREE, // Malawi
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
  RO: VISA_TYPES.VISA_FREE, // Romania
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  KN: VISA_TYPES.VISA_FREE, // Saint Kitts and Nevis
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
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  GB: VISA_TYPES.VISA_FREE, // United Kingdom
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  AU: VISA_TYPES.ETA, // Australia
  KE: VISA_TYPES.ETA, // Kenya
  NZ: VISA_TYPES.ETA, // New Zealand
  PK: VISA_TYPES.ETA, // Pakistan
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BF: VISA_TYPES.VISA_ON_ARRIVAL, // Burkina Faso
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  IQ: VISA_TYPES.VISA_ON_ARRIVAL, // Iraq
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MR: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritania
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  SO: VISA_TYPES.VISA_ON_ARRIVAL, // Somalia
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TO: VISA_TYPES.VISA_ON_ARRIVAL, // Tonga
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
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
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GE: VISA_TYPES.E_VISA, // Georgia
  GN: VISA_TYPES.E_VISA, // Guinea
  LY: VISA_TYPES.E_VISA, // Libya
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  SS: VISA_TYPES.E_VISA, // South Sudan
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TG: VISA_TYPES.E_VISA, // Togo
  TR: VISA_TYPES.E_VISA, // Turkey
  UG: VISA_TYPES.E_VISA, // Uganda
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CU: VISA_TYPES.VISA_REQUIRED, // Cuba
  DO: VISA_TYPES.VISA_REQUIRED, // Dominican Republic
  SV: VISA_TYPES.VISA_REQUIRED, // El Salvador
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  IN: VISA_TYPES.VISA_REQUIRED, // India
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IR: VISA_TYPES.VISA_REQUIRED, // Iran
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  QA: VISA_TYPES.VISA_REQUIRED, // Qatar
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SY: VISA_TYPES.VISA_REQUIRED, // Syria
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  US: VISA_TYPES.VISA_REQUIRED, // United States
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
  // Travel restricted countries
  CN: VISA_TYPES.TRAVEL_RESTRICTED, // China
};

// GB-BOC Passport holders
// Source: Wikipedia
visaRequirements['GB-BOC'] = {
  ...visaRequirements['GB-BOC'],
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
  AT: VISA_TYPES.VISA_FREE, // Austria
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BO: VISA_TYPES.VISA_FREE, // Bolivia
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CA: VISA_TYPES.VISA_FREE, // Canada
  CL: VISA_TYPES.VISA_FREE, // Chile
  CO: VISA_TYPES.VISA_FREE, // Colombia
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  EE: VISA_TYPES.VISA_FREE, // Estonia
  SZ: VISA_TYPES.VISA_FREE, // Eswatini
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GM: VISA_TYPES.VISA_FREE, // Gambia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GR: VISA_TYPES.VISA_FREE, // Greece
  GD: VISA_TYPES.VISA_FREE, // Grenada
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IL: VISA_TYPES.VISA_FREE, // Israel
  IT: VISA_TYPES.VISA_FREE, // Italy
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  LV: VISA_TYPES.VISA_FREE, // Latvia
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MT: VISA_TYPES.VISA_FREE, // Malta
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MC: VISA_TYPES.VISA_FREE, // Monaco
  NA: VISA_TYPES.VISA_FREE, // Namibia
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  NO: VISA_TYPES.VISA_FREE, // Norway
  PA: VISA_TYPES.VISA_FREE, // Panama
  PY: VISA_TYPES.VISA_FREE, // Paraguay
  PE: VISA_TYPES.VISA_FREE, // Peru
  PH: VISA_TYPES.VISA_FREE, // Philippines
  PL: VISA_TYPES.VISA_FREE, // Poland
  PT: VISA_TYPES.VISA_FREE, // Portugal
  RO: VISA_TYPES.VISA_FREE, // Romania
  RW: VISA_TYPES.VISA_FREE, // Rwanda
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
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  GB: VISA_TYPES.VISA_FREE, // United Kingdom
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  // ETA countries
  KR: VISA_TYPES.ETA, // South Korea
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BF: VISA_TYPES.VISA_ON_ARRIVAL, // Burkina Faso
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  DJ: VISA_TYPES.VISA_ON_ARRIVAL, // Djibouti
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  KE: VISA_TYPES.VISA_ON_ARRIVAL, // Kenya
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MR: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritania
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  OM: VISA_TYPES.VISA_ON_ARRIVAL, // Oman
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  QA: VISA_TYPES.VISA_ON_ARRIVAL, // Qatar
  SO: VISA_TYPES.VISA_ON_ARRIVAL, // Somalia
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TG: VISA_TYPES.VISA_ON_ARRIVAL, // Togo
  TO: VISA_TYPES.VISA_ON_ARRIVAL, // Tonga
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  UG: VISA_TYPES.VISA_ON_ARRIVAL, // Uganda
  ZM: VISA_TYPES.VISA_ON_ARRIVAL, // Zambia
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  BJ: VISA_TYPES.E_VISA, // Benin
  GE: VISA_TYPES.E_VISA, // Georgia
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  MM: VISA_TYPES.E_VISA, // Myanmar
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SN: VISA_TYPES.E_VISA, // Senegal
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
  AM: VISA_TYPES.VISA_REQUIRED, // Armenia
  AU: VISA_TYPES.VISA_REQUIRED, // Australia
  AZ: VISA_TYPES.VISA_REQUIRED, // Azerbaijan
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  BT: VISA_TYPES.VISA_REQUIRED, // Bhutan
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  BI: VISA_TYPES.VISA_REQUIRED, // Burundi
  CM: VISA_TYPES.VISA_REQUIRED, // Cameroon
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CD: VISA_TYPES.VISA_REQUIRED, // DR Congo
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  CU: VISA_TYPES.VISA_REQUIRED, // Cuba
  DO: VISA_TYPES.VISA_REQUIRED, // Dominican Republic
  SV: VISA_TYPES.VISA_REQUIRED, // El Salvador
  GQ: VISA_TYPES.VISA_REQUIRED, // Equatorial Guinea
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GA: VISA_TYPES.VISA_REQUIRED, // Gabon
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  GN: VISA_TYPES.VISA_REQUIRED, // Guinea
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  IN: VISA_TYPES.VISA_REQUIRED, // India
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IR: VISA_TYPES.VISA_REQUIRED, // Iran
  IQ: VISA_TYPES.VISA_REQUIRED, // Iraq
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  LY: VISA_TYPES.VISA_REQUIRED, // Libya
  MW: VISA_TYPES.VISA_REQUIRED, // Malawi
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MN: VISA_TYPES.VISA_REQUIRED, // Mongolia
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  NG: VISA_TYPES.VISA_REQUIRED, // Nigeria
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  PK: VISA_TYPES.VISA_REQUIRED, // Pakistan
  PG: VISA_TYPES.VISA_REQUIRED, // Papua New Guinea
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  SL: VISA_TYPES.VISA_REQUIRED, // Sierra Leone
  ZA: VISA_TYPES.VISA_REQUIRED, // South Africa
  SS: VISA_TYPES.VISA_REQUIRED, // South Sudan
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SY: VISA_TYPES.VISA_REQUIRED, // Syria
  TJ: VISA_TYPES.VISA_REQUIRED, // Tajikistan
  TH: VISA_TYPES.VISA_REQUIRED, // Thailand
  TW: VISA_TYPES.VISA_REQUIRED, // Taiwan
  TR: VISA_TYPES.VISA_REQUIRED, // Turkey
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  UA: VISA_TYPES.VISA_REQUIRED, // Ukraine
  AE: VISA_TYPES.VISA_REQUIRED, // United Arab Emirates
  US: VISA_TYPES.VISA_REQUIRED, // United States
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// GB-BOT Passport holders
// Source: Wikipedia
visaRequirements['GB-BOT'] = {
  ...visaRequirements['GB-BOT'],
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
  AT: VISA_TYPES.VISA_FREE, // Austria
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BO: VISA_TYPES.VISA_FREE, // Bolivia
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
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
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IL: VISA_TYPES.VISA_FREE, // Israel
  IT: VISA_TYPES.VISA_FREE, // Italy
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  LV: VISA_TYPES.VISA_FREE, // Latvia
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MT: VISA_TYPES.VISA_FREE, // Malta
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MC: VISA_TYPES.VISA_FREE, // Monaco
  NA: VISA_TYPES.VISA_FREE, // Namibia
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  NO: VISA_TYPES.VISA_FREE, // Norway
  PA: VISA_TYPES.VISA_FREE, // Panama
  PY: VISA_TYPES.VISA_FREE, // Paraguay
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
  SN: VISA_TYPES.VISA_FREE, // Senegal
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  GB: VISA_TYPES.VISA_FREE, // United Kingdom
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  CA: VISA_TYPES.ETA, // Canada
  KR: VISA_TYPES.ETA, // South Korea
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BF: VISA_TYPES.VISA_ON_ARRIVAL, // Burkina Faso
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  DJ: VISA_TYPES.VISA_ON_ARRIVAL, // Djibouti
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  KE: VISA_TYPES.VISA_ON_ARRIVAL, // Kenya
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MR: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritania
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  OM: VISA_TYPES.VISA_ON_ARRIVAL, // Oman
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  QA: VISA_TYPES.VISA_ON_ARRIVAL, // Qatar
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa
  SC: VISA_TYPES.VISA_ON_ARRIVAL, // Seychelles
  SB: VISA_TYPES.VISA_ON_ARRIVAL, // Solomon Islands
  SO: VISA_TYPES.VISA_ON_ARRIVAL, // Somalia
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TG: VISA_TYPES.VISA_ON_ARRIVAL, // Togo
  TO: VISA_TYPES.VISA_ON_ARRIVAL, // Tonga
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  UG: VISA_TYPES.VISA_ON_ARRIVAL, // Uganda
  // E-visa countries
  BH: VISA_TYPES.E_VISA, // Bahrain
  BJ: VISA_TYPES.E_VISA, // Benin
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  MM: VISA_TYPES.E_VISA, // Myanmar
  SS: VISA_TYPES.E_VISA, // South Sudan
  TR: VISA_TYPES.E_VISA, // Turkey
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
  VN: VISA_TYPES.E_VISA, // Vietnam
  ZW: VISA_TYPES.E_VISA, // Zimbabwe
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
  AM: VISA_TYPES.VISA_REQUIRED, // Armenia
  AU: VISA_TYPES.VISA_REQUIRED, // Australia
  AZ: VISA_TYPES.VISA_REQUIRED, // Azerbaijan
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  BT: VISA_TYPES.VISA_REQUIRED, // Bhutan
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  BI: VISA_TYPES.VISA_REQUIRED, // Burundi
  CM: VISA_TYPES.VISA_REQUIRED, // Cameroon
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CD: VISA_TYPES.VISA_REQUIRED, // DR Congo
  CI: VISA_TYPES.VISA_REQUIRED, // Côte d'Ivoire
  CU: VISA_TYPES.VISA_REQUIRED, // Cuba
  EG: VISA_TYPES.VISA_REQUIRED, // Egypt
  GQ: VISA_TYPES.VISA_REQUIRED, // Equatorial Guinea
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GN: VISA_TYPES.VISA_REQUIRED, // Guinea
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  IN: VISA_TYPES.VISA_REQUIRED, // India
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IR: VISA_TYPES.VISA_REQUIRED, // Iran
  IQ: VISA_TYPES.VISA_REQUIRED, // Iraq
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  LY: VISA_TYPES.VISA_REQUIRED, // Libya
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MN: VISA_TYPES.VISA_REQUIRED, // Mongolia
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  NG: VISA_TYPES.VISA_REQUIRED, // Nigeria
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  PK: VISA_TYPES.VISA_REQUIRED, // Pakistan
  PG: VISA_TYPES.VISA_REQUIRED, // Papua New Guinea
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  ST: VISA_TYPES.VISA_REQUIRED, // São Tomé and Príncipe
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  SL: VISA_TYPES.VISA_REQUIRED, // Sierra Leone
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SY: VISA_TYPES.VISA_REQUIRED, // Syria
  TJ: VISA_TYPES.VISA_REQUIRED, // Tajikistan
  TH: VISA_TYPES.VISA_REQUIRED, // Thailand
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  UA: VISA_TYPES.VISA_REQUIRED, // Ukraine
  AE: VISA_TYPES.VISA_REQUIRED, // United Arab Emirates
  US: VISA_TYPES.VISA_REQUIRED, // United States
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// HK Passport holders
// Source: Wikipedia
visaRequirements.HK = {
  ...visaRequirements.HK,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  DZ: VISA_TYPES.VISA_FREE, // Algeria
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
  BJ: VISA_TYPES.VISA_FREE, // Benin
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BN: VISA_TYPES.VISA_FREE, // Brunei
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CA: VISA_TYPES.VISA_FREE, // Canada
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  CL: VISA_TYPES.VISA_FREE, // Chile
  CO: VISA_TYPES.VISA_FREE, // Colombia
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  EG: VISA_TYPES.VISA_FREE, // Egypt
  EE: VISA_TYPES.VISA_FREE, // Estonia
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  FI: VISA_TYPES.VISA_FREE, // Finland
  GE: VISA_TYPES.VISA_FREE, // Georgia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GR: VISA_TYPES.VISA_FREE, // Greece
  GD: VISA_TYPES.VISA_FREE, // Grenada
  GY: VISA_TYPES.VISA_FREE, // Guyana
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  ID: VISA_TYPES.VISA_FREE, // Indonesia
  IR: VISA_TYPES.VISA_FREE, // Iran
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IL: VISA_TYPES.VISA_FREE, // Israel
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
  MW: VISA_TYPES.VISA_FREE, // Malawi
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  ML: VISA_TYPES.VISA_FREE, // Mali
  MT: VISA_TYPES.VISA_FREE, // Malta
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
  NE: VISA_TYPES.VISA_FREE, // Niger
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  NO: VISA_TYPES.VISA_FREE, // Norway
  OM: VISA_TYPES.VISA_FREE, // Oman
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
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SM: VISA_TYPES.VISA_FREE, // San Marino
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain
  LK: VISA_TYPES.VISA_FREE, // Sri Lanka
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TZ: VISA_TYPES.VISA_FREE, // Tanzania
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  UG: VISA_TYPES.VISA_FREE, // Uganda
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  GB: VISA_TYPES.VISA_FREE, // United Kingdom
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  YE: VISA_TYPES.VISA_FREE, // Yemen
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  ZW: VISA_TYPES.VISA_FREE, // Zimbabwe
  // ETA countries
  AU: VISA_TYPES.ETA, // Australia
  KE: VISA_TYPES.ETA, // Kenya
  NZ: VISA_TYPES.ETA, // New Zealand
  PK: VISA_TYPES.ETA, // Pakistan
  SC: VISA_TYPES.ETA, // Seychelles
  // Visa on arrival countries
  AZ: VISA_TYPES.VISA_ON_ARRIVAL, // Azerbaijan
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BF: VISA_TYPES.VISA_ON_ARRIVAL, // Burkina Faso
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GM: VISA_TYPES.VISA_ON_ARRIVAL, // Gambia
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  MM: VISA_TYPES.VISA_ON_ARRIVAL, // Myanmar
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  ST: VISA_TYPES.VISA_ON_ARRIVAL, // São Tomé and Príncipe
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TO: VISA_TYPES.VISA_ON_ARRIVAL, // Tonga
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  // E-visa countries
  BT: VISA_TYPES.E_VISA, // Bhutan
  CM: VISA_TYPES.E_VISA, // Cameroon
  CF: VISA_TYPES.E_VISA, // Central African Republic
  TD: VISA_TYPES.E_VISA, // Chad
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  SV: VISA_TYPES.E_VISA, // El Salvador
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  SZ: VISA_TYPES.E_VISA, // Eswatini
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IQ: VISA_TYPES.E_VISA, // Iraq
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  NG: VISA_TYPES.E_VISA, // Nigeria
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TG: VISA_TYPES.E_VISA, // Togo
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  BD: VISA_TYPES.VISA_REQUIRED, // Bangladesh
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  IN: VISA_TYPES.VISA_REQUIRED, // India
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  SN: VISA_TYPES.VISA_REQUIRED, // Senegal
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  US: VISA_TYPES.VISA_REQUIRED, // United States
};

// HR Passport holders
// Source: Wikipedia
visaRequirements.HR = {
  ...visaRequirements.HR,
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
  CN: VISA_TYPES.VISA_FREE, // China
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
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
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IR: VISA_TYPES.VISA_FREE, // Iran
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IT: VISA_TYPES.VISA_FREE, // Italy
  JP: VISA_TYPES.VISA_FREE, // Japan
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KI: VISA_TYPES.VISA_FREE, // Kiribati
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
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  NO: VISA_TYPES.VISA_FREE, // Norway
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
  KR: VISA_TYPES.ETA, // South Korea
  NZ: VISA_TYPES.ETA, // New Zealand
  KN: VISA_TYPES.ETA, // Saint Kitts and Nevis
  SC: VISA_TYPES.ETA, // Seychelles
  GB: VISA_TYPES.ETA, // United Kingdom
  US: VISA_TYPES.ETA, // United States
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  DJ: VISA_TYPES.VISA_ON_ARRIVAL, // Djibouti
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  ID: VISA_TYPES.VISA_ON_ARRIVAL, // Indonesia
  JM: VISA_TYPES.VISA_ON_ARRIVAL, // Jamaica
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  OM: VISA_TYPES.VISA_ON_ARRIVAL, // Oman
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
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  GY: VISA_TYPES.E_VISA, // Guyana
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  RU: VISA_TYPES.E_VISA, // Russia
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
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// MO Passport holders
// Source: Wikipedia
visaRequirements.MO = {
  ...visaRequirements.MO,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
  AM: VISA_TYPES.VISA_FREE, // Armenia
  AT: VISA_TYPES.VISA_FREE, // Austria
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BN: VISA_TYPES.VISA_FREE, // Brunei
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  CL: VISA_TYPES.VISA_FREE, // Chile
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  EG: VISA_TYPES.VISA_FREE, // Egypt
  EE: VISA_TYPES.VISA_FREE, // Estonia
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GE: VISA_TYPES.VISA_FREE, // Georgia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GR: VISA_TYPES.VISA_FREE, // Greece
  GD: VISA_TYPES.VISA_FREE, // Grenada
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IR: VISA_TYPES.VISA_FREE, // Iran
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IL: VISA_TYPES.VISA_FREE, // Israel
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
  ML: VISA_TYPES.VISA_FREE, // Mali
  MT: VISA_TYPES.VISA_FREE, // Malta
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
  PH: VISA_TYPES.VISA_FREE, // Philippines
  PL: VISA_TYPES.VISA_FREE, // Poland
  PT: VISA_TYPES.VISA_FREE, // Portugal
  RO: VISA_TYPES.VISA_FREE, // Romania
  RU: VISA_TYPES.VISA_FREE, // Russia
  KN: VISA_TYPES.VISA_FREE, // Saint Kitts and Nevis
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SM: VISA_TYPES.VISA_FREE, // San Marino
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TZ: VISA_TYPES.VISA_FREE, // Tanzania
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TR: VISA_TYPES.VISA_FREE, // Turkey
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  GB: VISA_TYPES.VISA_FREE, // United Kingdom
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  // ETA countries
  KE: VISA_TYPES.ETA, // Kenya
  KR: VISA_TYPES.ETA, // South Korea
  NZ: VISA_TYPES.ETA, // New Zealand
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MR: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritania
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  MM: VISA_TYPES.VISA_ON_ARRIVAL, // Myanmar
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  QA: VISA_TYPES.VISA_ON_ARRIVAL, // Qatar
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  LC: VISA_TYPES.VISA_ON_ARRIVAL, // Saint Lucia
  ST: VISA_TYPES.VISA_ON_ARRIVAL, // São Tomé and Príncipe
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  SO: VISA_TYPES.VISA_ON_ARRIVAL, // Somalia
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TO: VISA_TYPES.VISA_ON_ARRIVAL, // Tonga
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AU: VISA_TYPES.E_VISA, // Australia
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BS: VISA_TYPES.E_VISA, // Bahamas
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
  LS: VISA_TYPES.E_VISA, // Lesotho
  LY: VISA_TYPES.E_VISA, // Libya
  NG: VISA_TYPES.E_VISA, // Nigeria
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  SS: VISA_TYPES.E_VISA, // South Sudan
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  VN: VISA_TYPES.E_VISA, // Vietnam
  ZM: VISA_TYPES.E_VISA, // Zambia
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
  BD: VISA_TYPES.VISA_REQUIRED, // Bangladesh
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  SV: VISA_TYPES.VISA_REQUIRED, // El Salvador
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  GM: VISA_TYPES.VISA_REQUIRED, // Gambia
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  IN: VISA_TYPES.VISA_REQUIRED, // India
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IQ: VISA_TYPES.VISA_REQUIRED, // Iraq
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  PK: VISA_TYPES.VISA_REQUIRED, // Pakistan
  PA: VISA_TYPES.VISA_REQUIRED, // Panama
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  SN: VISA_TYPES.VISA_REQUIRED, // Senegal
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SY: VISA_TYPES.VISA_REQUIRED, // Syria
  TT: VISA_TYPES.VISA_REQUIRED, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  UA: VISA_TYPES.VISA_REQUIRED, // Ukraine
  US: VISA_TYPES.VISA_REQUIRED, // United States
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
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

// CA Passport holders
// Source: Wikipedia
visaRequirements.CA = {
  ...visaRequirements.CA,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AO: VISA_TYPES.VISA_FREE, // Angola
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
  AT: VISA_TYPES.VISA_FREE, // Austria
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BO: VISA_TYPES.VISA_FREE, // Bolivia
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BN: VISA_TYPES.VISA_FREE, // Brunei
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  CL: VISA_TYPES.VISA_FREE, // Chile
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
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
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  US: VISA_TYPES.VISA_FREE, // United States
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  AU: VISA_TYPES.ETA, // Australia
  IL: VISA_TYPES.ETA, // Israel
  KE: VISA_TYPES.ETA, // Kenya
  KR: VISA_TYPES.ETA, // South Korea
  MZ: VISA_TYPES.ETA, // Mozambique
  NZ: VISA_TYPES.ETA, // New Zealand
  LK: VISA_TYPES.ETA, // Sri Lanka
  GB: VISA_TYPES.ETA, // United Kingdom
  // Visa on arrival countries
  AM: VISA_TYPES.VISA_ON_ARRIVAL, // Armenia
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
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
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
  BR: VISA_TYPES.E_VISA, // Brazil
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CG: VISA_TYPES.E_VISA, // Republic of the Congo
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  SC: VISA_TYPES.E_VISA, // Seychelles
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  VN: VISA_TYPES.E_VISA, // Vietnam
  YE: VISA_TYPES.E_VISA, // Yemen
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CN: VISA_TYPES.VISA_REQUIRED, // China
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  IR: VISA_TYPES.VISA_REQUIRED, // Iran
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  PH: VISA_TYPES.VISA_REQUIRED, // Philippines
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
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

// KH Passport holders
// Source: Wikipedia
visaRequirements.KH = {
  ...visaRequirements.KH,
  // Visa-free countries
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BN: VISA_TYPES.VISA_FREE, // Brunei
  DM: VISA_TYPES.VISA_FREE, // Dominica
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  HT: VISA_TYPES.VISA_FREE, // Haiti
  ID: VISA_TYPES.VISA_FREE, // Indonesia
  IR: VISA_TYPES.VISA_FREE, // Iran
  LA: VISA_TYPES.VISA_FREE, // Laos
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MV: VISA_TYPES.VISA_FREE, // Maldives
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MM: VISA_TYPES.VISA_FREE, // Myanmar
  PA: VISA_TYPES.VISA_FREE, // Panama
  PH: VISA_TYPES.VISA_FREE, // Philippines
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SR: VISA_TYPES.VISA_FREE, // Suriname
  TH: VISA_TYPES.VISA_FREE, // Thailand
  VN: VISA_TYPES.VISA_FREE, // Vietnam
  // ETA countries
  PK: VISA_TYPES.ETA, // Pakistan
  LK: VISA_TYPES.ETA, // Sri Lanka
  KE: VISA_TYPES.ETA, // Kenya
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  LC: VISA_TYPES.VISA_ON_ARRIVAL, // Saint Lucia
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZM: VISA_TYPES.VISA_ON_ARRIVAL, // Zambia
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  AM: VISA_TYPES.E_VISA, // Armenia
  BS: VISA_TYPES.E_VISA, // Bahamas
  BJ: VISA_TYPES.E_VISA, // Benin
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
  SV: VISA_TYPES.E_VISA, // El Salvador
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GE: VISA_TYPES.E_VISA, // Georgia
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  JP: VISA_TYPES.E_VISA, // Japan
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
  MN: VISA_TYPES.E_VISA, // Mongolia
  NG: VISA_TYPES.E_VISA, // Nigeria
  OM: VISA_TYPES.E_VISA, // Oman
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  QA: VISA_TYPES.E_VISA, // Qatar
  RU: VISA_TYPES.E_VISA, // Russia
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  UA: VISA_TYPES.E_VISA, // Ukraine
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
  ZW: VISA_TYPES.E_VISA, // Zimbabwe
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  AU: VISA_TYPES.VISA_REQUIRED, // Australia
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  AZ: VISA_TYPES.VISA_REQUIRED, // Azerbaijan
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize
  BA: VISA_TYPES.VISA_REQUIRED, // Bosnia and Herzegovina
  BR: VISA_TYPES.VISA_REQUIRED, // Brazil
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
  JM: VISA_TYPES.VISA_REQUIRED, // Jamaica
  JO: VISA_TYPES.VISA_REQUIRED, // Jordan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
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

// CV Passport holders
// Source: Wikipedia
visaRequirements.CV = {
  ...visaRequirements.CV,
  // Visa-free countries
  AO: VISA_TYPES.VISA_FREE, // Angola
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BJ: VISA_TYPES.VISA_FREE, // Benin
  BF: VISA_TYPES.VISA_FREE, // Burkina Faso
  CI: VISA_TYPES.VISA_FREE, // Côte d'Ivoire
  DM: VISA_TYPES.VISA_FREE, // Dominica
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GH: VISA_TYPES.VISA_FREE, // Ghana
  GN: VISA_TYPES.VISA_FREE, // Guinea
  GW: VISA_TYPES.VISA_FREE, // Guinea-Bissau
  HT: VISA_TYPES.VISA_FREE, // Haiti
  LR: VISA_TYPES.VISA_FREE, // Liberia
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  ML: VISA_TYPES.VISA_FREE, // Mali
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MA: VISA_TYPES.VISA_FREE, // Morocco
  MZ: VISA_TYPES.VISA_FREE, // Mozambique
  NE: VISA_TYPES.VISA_FREE, // Niger
  NG: VISA_TYPES.VISA_FREE, // Nigeria
  PH: VISA_TYPES.VISA_FREE, // Philippines
  RU: VISA_TYPES.VISA_FREE, // Russia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  ST: VISA_TYPES.VISA_FREE, // São Tomé and Príncipe
  SN: VISA_TYPES.VISA_FREE, // Senegal
  SL: VISA_TYPES.VISA_FREE, // Sierra Leone
  SG: VISA_TYPES.VISA_FREE, // Singapore
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  TL: VISA_TYPES.VISA_FREE, // Timor-Leste
  TG: VISA_TYPES.VISA_FREE, // Togo
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  KE: VISA_TYPES.ETA, // Kenya
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  LC: VISA_TYPES.VISA_ON_ARRIVAL, // Saint Lucia
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa
  SC: VISA_TYPES.VISA_ON_ARRIVAL, // Seychelles
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  UG: VISA_TYPES.VISA_ON_ARRIVAL, // Uganda
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  BH: VISA_TYPES.E_VISA, // Bahrain
  BT: VISA_TYPES.E_VISA, // Bhutan
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CO: VISA_TYPES.E_VISA, // Colombia
  CD: VISA_TYPES.E_VISA, // DR Congo
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GE: VISA_TYPES.E_VISA, // Georgia
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
  MN: VISA_TYPES.E_VISA, // Mongolia
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  PK: VISA_TYPES.E_VISA, // Pakistan
  QA: VISA_TYPES.E_VISA, // Qatar
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SR: VISA_TYPES.E_VISA, // Suriname
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TH: VISA_TYPES.E_VISA, // Thailand
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
  VN: VISA_TYPES.E_VISA, // Vietnam
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
  BW: VISA_TYPES.VISA_REQUIRED, // Botswana
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
  FJ: VISA_TYPES.VISA_REQUIRED, // Fiji
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
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JM: VISA_TYPES.VISA_REQUIRED, // Jamaica
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KZ: VISA_TYPES.VISA_REQUIRED, // Kazakhstan
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
  MM: VISA_TYPES.VISA_REQUIRED, // Myanmar
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PA: VISA_TYPES.VISA_REQUIRED, // Panama
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

// CF Passport holders
// Source: Wikipedia
visaRequirements.CF = {
  ...visaRequirements.CF,
  // Visa-free countries
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BJ: VISA_TYPES.VISA_FREE, // Benin
  BF: VISA_TYPES.VISA_FREE, // Burkina Faso
  CM: VISA_TYPES.VISA_FREE, // Cameroon
  TD: VISA_TYPES.VISA_FREE, // Chad
  CG: VISA_TYPES.VISA_FREE, // Republic of the Congo
  CI: VISA_TYPES.VISA_FREE, // Côte d'Ivoire
  DM: VISA_TYPES.VISA_FREE, // Dominica
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  GQ: VISA_TYPES.VISA_FREE, // Equatorial Guinea
  GA: VISA_TYPES.VISA_FREE, // Gabon
  GM: VISA_TYPES.VISA_FREE, // Gambia
  HT: VISA_TYPES.VISA_FREE, // Haiti
  IL: VISA_TYPES.VISA_FREE, // Israel
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  PH: VISA_TYPES.VISA_FREE, // Philippines
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SN: VISA_TYPES.VISA_FREE, // Senegal
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  // ETA countries
  KE: VISA_TYPES.ETA, // Kenya
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GH: VISA_TYPES.VISA_ON_ARRIVAL, // Ghana
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  UG: VISA_TYPES.VISA_ON_ARRIVAL, // Uganda
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  AU: VISA_TYPES.E_VISA, // Australia
  BS: VISA_TYPES.E_VISA, // Bahamas
  BH: VISA_TYPES.E_VISA, // Bahrain
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  CO: VISA_TYPES.E_VISA, // Colombia
  CD: VISA_TYPES.E_VISA, // DR Congo
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  SV: VISA_TYPES.E_VISA, // El Salvador
  GE: VISA_TYPES.E_VISA, // Georgia
  GN: VISA_TYPES.E_VISA, // Guinea
  IQ: VISA_TYPES.E_VISA, // Iraq
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
  NG: VISA_TYPES.E_VISA, // Nigeria
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
  TG: VISA_TYPES.E_VISA, // Togo
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
  GD: VISA_TYPES.VISA_REQUIRED, // Grenada
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  IN: VISA_TYPES.VISA_REQUIRED, // India
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
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

// CG Passport holders
// Source: Wikipedia
visaRequirements.CG = {
  ...visaRequirements.CG,
  // Visa-free countries
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BJ: VISA_TYPES.VISA_FREE, // Benin
  CM: VISA_TYPES.VISA_FREE, // Cameroon
  CF: VISA_TYPES.VISA_FREE, // Central African Republic
  TD: VISA_TYPES.VISA_FREE, // Chad
  CD: VISA_TYPES.VISA_FREE, // DR Congo
  CI: VISA_TYPES.VISA_FREE, // Côte d'Ivoire
  DM: VISA_TYPES.VISA_FREE, // Dominica
  GQ: VISA_TYPES.VISA_FREE, // Equatorial Guinea
  GA: VISA_TYPES.VISA_FREE, // Gabon
  GM: VISA_TYPES.VISA_FREE, // Gambia
  HT: VISA_TYPES.VISA_FREE, // Haiti
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  PH: VISA_TYPES.VISA_FREE, // Philippines
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SN: VISA_TYPES.VISA_FREE, // Senegal
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  // ETA countries
  KE: VISA_TYPES.ETA, // Kenya
  MA: VISA_TYPES.ETA, // Morocco
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GH: VISA_TYPES.VISA_ON_ARRIVAL, // Ghana
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZM: VISA_TYPES.VISA_ON_ARRIVAL, // Zambia
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  BS: VISA_TYPES.E_VISA, // Bahamas
  BH: VISA_TYPES.E_VISA, // Bahrain
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CO: VISA_TYPES.E_VISA, // Colombia
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  EC: VISA_TYPES.E_VISA, // Ecuador
  SV: VISA_TYPES.E_VISA, // El Salvador
  GN: VISA_TYPES.E_VISA, // Guinea
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  LY: VISA_TYPES.E_VISA, // Libya
  MY: VISA_TYPES.E_VISA, // Malaysia
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
  MN: VISA_TYPES.E_VISA, // Mongolia
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  QA: VISA_TYPES.E_VISA, // Qatar
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SR: VISA_TYPES.E_VISA, // Suriname
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TH: VISA_TYPES.E_VISA, // Thailand
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  VN: VISA_TYPES.E_VISA, // Vietnam
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
  GE: VISA_TYPES.VISA_REQUIRED, // Georgia
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
  JO: VISA_TYPES.VISA_REQUIRED, // Jordan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
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
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
  NA: VISA_TYPES.VISA_REQUIRED, // Namibia
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NI: VISA_TYPES.VISA_REQUIRED, // Nicaragua
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PA: VISA_TYPES.VISA_REQUIRED, // Panama
  PG: VISA_TYPES.VISA_REQUIRED, // Papua New Guinea
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
  UA: VISA_TYPES.VISA_REQUIRED, // Ukraine
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  UZ: VISA_TYPES.VISA_REQUIRED, // Uzbekistan
  VU: VISA_TYPES.VISA_REQUIRED, // Vanuatu
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
  // Travel restricted countries
  US: VISA_TYPES.TRAVEL_RESTRICTED, // United States
};

// CL Passport holders
// Source: Wikipedia
visaRequirements.CL = {
  ...visaRequirements.CL,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AO: VISA_TYPES.VISA_FREE, // Angola
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
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
  KN: VISA_TYPES.VISA_FREE, // Saint Kitts and Nevis
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
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
  VN: VISA_TYPES.VISA_FREE, // Vietnam
  // ETA countries
  CA: VISA_TYPES.ETA, // Canada
  IL: VISA_TYPES.ETA, // Israel
  KE: VISA_TYPES.ETA, // Kenya
  KR: VISA_TYPES.ETA, // South Korea
  NZ: VISA_TYPES.ETA, // New Zealand
  PK: VISA_TYPES.ETA, // Pakistan
  GB: VISA_TYPES.ETA, // United Kingdom
  US: VISA_TYPES.ETA, // United States
  // Visa on arrival countries
  AM: VISA_TYPES.VISA_ON_ARRIVAL, // Armenia
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
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
  SB: VISA_TYPES.VISA_ON_ARRIVAL, // Solomon Islands
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZM: VISA_TYPES.VISA_ON_ARRIVAL, // Zambia
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
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
  IR: VISA_TYPES.E_VISA, // Iran
  IQ: VISA_TYPES.E_VISA, // Iraq
  LS: VISA_TYPES.E_VISA, // Lesotho
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SC: VISA_TYPES.E_VISA, // Seychelles
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AU: VISA_TYPES.VISA_REQUIRED, // Australia
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GM: VISA_TYPES.VISA_REQUIRED, // Gambia
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  SN: VISA_TYPES.VISA_REQUIRED, // Senegal
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// CM Passport holders
// Source: Wikipedia
visaRequirements.CM = {
  ...visaRequirements.CM,
  // Visa-free countries
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BJ: VISA_TYPES.VISA_FREE, // Benin
  CF: VISA_TYPES.VISA_FREE, // Central African Republic
  TD: VISA_TYPES.VISA_FREE, // Chad
  CG: VISA_TYPES.VISA_FREE, // Republic of the Congo
  DM: VISA_TYPES.VISA_FREE, // Dominica
  GQ: VISA_TYPES.VISA_FREE, // Equatorial Guinea
  GA: VISA_TYPES.VISA_FREE, // Gabon
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GD: VISA_TYPES.VISA_FREE, // Grenada
  HT: VISA_TYPES.VISA_FREE, // Haiti
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  LS: VISA_TYPES.VISA_FREE, // Lesotho
  ML: VISA_TYPES.VISA_FREE, // Mali
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  NG: VISA_TYPES.VISA_FREE, // Nigeria
  PH: VISA_TYPES.VISA_FREE, // Philippines
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  // Visa on arrival countries
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GH: VISA_TYPES.VISA_ON_ARRIVAL, // Ghana
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  LC: VISA_TYPES.VISA_ON_ARRIVAL, // Saint Lucia
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TG: VISA_TYPES.VISA_ON_ARRIVAL, // Togo
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  UG: VISA_TYPES.VISA_ON_ARRIVAL, // Uganda
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  BS: VISA_TYPES.E_VISA, // Bahamas
  BH: VISA_TYPES.E_VISA, // Bahrain
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CO: VISA_TYPES.E_VISA, // Colombia
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  DJ: VISA_TYPES.E_VISA, // Djibouti
  EC: VISA_TYPES.E_VISA, // Ecuador
  SV: VISA_TYPES.E_VISA, // El Salvador
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KE: VISA_TYPES.ETA, // Kenya
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LY: VISA_TYPES.E_VISA, // Libya
  MW: VISA_TYPES.E_VISA, // Malawi
  MY: VISA_TYPES.E_VISA, // Malaysia
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
  MM: VISA_TYPES.E_VISA, // Myanmar
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  QA: VISA_TYPES.E_VISA, // Qatar
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SO: VISA_TYPES.E_VISA, // Somalia
  ZA: VISA_TYPES.E_VISA, // South Africa
  SS: VISA_TYPES.E_VISA, // South Sudan
  SR: VISA_TYPES.E_VISA, // Suriname
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TH: VISA_TYPES.E_VISA, // Thailand
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
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
  CL: VISA_TYPES.VISA_REQUIRED, // Chile
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  HR: VISA_TYPES.VISA_REQUIRED, // Croatia
  CU: VISA_TYPES.VISA_REQUIRED, // Cuba
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
  GE: VISA_TYPES.VISA_REQUIRED, // Georgia
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
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LA: VISA_TYPES.VISA_REQUIRED, // Laos
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
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
  NP: VISA_TYPES.VISA_REQUIRED, // Nepal
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NI: VISA_TYPES.VISA_REQUIRED, // Nicaragua
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PA: VISA_TYPES.VISA_REQUIRED, // Panama
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  VC: VISA_TYPES.VISA_REQUIRED, // Saint Vincent and the Grenadines
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  RS: VISA_TYPES.VISA_REQUIRED, // Serbia
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  LK: VISA_TYPES.VISA_REQUIRED, // Sri Lanka
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TT: VISA_TYPES.VISA_REQUIRED, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TR: VISA_TYPES.VISA_REQUIRED, // Turkey
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  UA: VISA_TYPES.VISA_REQUIRED, // Ukraine
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// CO Passport holders
// Source: Wikipedia
visaRequirements.CO = {
  ...visaRequirements.CO,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AR: VISA_TYPES.VISA_FREE, // Argentina
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
  CL: VISA_TYPES.VISA_FREE, // Chile
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  EE: VISA_TYPES.VISA_FREE, // Estonia
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  FI: VISA_TYPES.VISA_FREE, // Finland
  FR: VISA_TYPES.VISA_FREE, // France
  GE: VISA_TYPES.VISA_FREE, // Georgia
  DE: VISA_TYPES.VISA_FREE, // Germany
  GH: VISA_TYPES.VISA_FREE, // Ghana
  GR: VISA_TYPES.VISA_FREE, // Greece
  GT: VISA_TYPES.VISA_FREE, // Guatemala
  GY: VISA_TYPES.VISA_FREE, // Guyana
  HN: VISA_TYPES.VISA_FREE, // Honduras
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  ID: VISA_TYPES.VISA_FREE, // Indonesia
  IT: VISA_TYPES.VISA_FREE, // Italy
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  LV: VISA_TYPES.VISA_FREE, // Latvia
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein
  LT: VISA_TYPES.VISA_FREE, // Lithuania
  LU: VISA_TYPES.VISA_FREE, // Luxembourg
  MT: VISA_TYPES.VISA_FREE, // Malta
  MX: VISA_TYPES.VISA_FREE, // Mexico
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MD: VISA_TYPES.VISA_FREE, // Moldova
  MC: VISA_TYPES.VISA_FREE, // Monaco
  ME: VISA_TYPES.VISA_FREE, // Montenegro
  MA: VISA_TYPES.VISA_FREE, // Morocco
  NL: VISA_TYPES.VISA_FREE, // Netherlands
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
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  SM: VISA_TYPES.VISA_FREE, // San Marino
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TR: VISA_TYPES.VISA_FREE, // Turkey
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  // ETA countries
  KE: VISA_TYPES.ETA, // Kenya
  KN: VISA_TYPES.ETA, // Saint Kitts and Nevis
  KR: VISA_TYPES.ETA, // South Korea
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
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZM: VISA_TYPES.VISA_ON_ARRIVAL, // Zambia
  // E-visa countries
  AU: VISA_TYPES.E_VISA, // Australia
  AO: VISA_TYPES.E_VISA, // Angola
  AM: VISA_TYPES.E_VISA, // Armenia
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
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MW: VISA_TYPES.E_VISA, // Malawi
  MY: VISA_TYPES.E_VISA, // Malaysia
  MR: VISA_TYPES.E_VISA, // Mauritania
  MN: VISA_TYPES.E_VISA, // Mongolia
  MM: VISA_TYPES.E_VISA, // Myanmar
  NA: VISA_TYPES.E_VISA, // Namibia
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  UZ: VISA_TYPES.E_VISA, // Uzbekistan
  VU: VISA_TYPES.E_VISA, // Vanuatu
  VN: VISA_TYPES.E_VISA, // Vietnam
  ZW: VISA_TYPES.E_VISA, // Zimbabwe
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  GM: VISA_TYPES.VISA_REQUIRED, // Gambia
  GD: VISA_TYPES.VISA_REQUIRED, // Grenada
  HT: VISA_TYPES.VISA_REQUIRED, // Haiti
  IR: VISA_TYPES.VISA_REQUIRED, // Iran
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  LC: VISA_TYPES.VISA_REQUIRED, // Saint Lucia
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  SN: VISA_TYPES.VISA_REQUIRED, // Senegal
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  ZA: VISA_TYPES.VISA_REQUIRED, // South Africa
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// CR Passport holders
// Source: Wikipedia
visaRequirements.CR = {
  ...visaRequirements.CR,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AR: VISA_TYPES.VISA_FREE, // Argentina
  AT: VISA_TYPES.VISA_FREE, // Austria
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BO: VISA_TYPES.VISA_FREE, // Bolivia
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BN: VISA_TYPES.VISA_FREE, // Brunei
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CL: VISA_TYPES.VISA_FREE, // Chile
  CO: VISA_TYPES.VISA_FREE, // Colombia
  HR: VISA_TYPES.VISA_FREE, // Croatia
  CY: VISA_TYPES.VISA_FREE, // Cyprus
  CZ: VISA_TYPES.VISA_FREE, // Czechia
  DK: VISA_TYPES.VISA_FREE, // Denmark
  DM: VISA_TYPES.VISA_FREE, // Dominica
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  SV: VISA_TYPES.VISA_FREE, // El Salvador
  EE: VISA_TYPES.VISA_FREE, // Estonia
  FI: VISA_TYPES.VISA_FREE, // Finland
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
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  KR: VISA_TYPES.VISA_FREE, // South Korea
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
  RU: VISA_TYPES.VISA_FREE, // Russia
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SM: VISA_TYPES.VISA_FREE, // San Marino
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  GB: VISA_TYPES.ETA, // United Kingdom
  IL: VISA_TYPES.ETA, // Israel
  KE: VISA_TYPES.ETA, // Kenya
  PK: VISA_TYPES.ETA, // Pakistan
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
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  SB: VISA_TYPES.VISA_ON_ARRIVAL, // Solomon Islands
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TH: VISA_TYPES.VISA_ON_ARRIVAL, // Thailand
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  UG: VISA_TYPES.VISA_ON_ARRIVAL, // Uganda
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  AM: VISA_TYPES.E_VISA, // Armenia
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
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MN: VISA_TYPES.E_VISA, // Mongolia
  MM: VISA_TYPES.E_VISA, // Myanmar
  NA: VISA_TYPES.E_VISA, // Namibia
  NG: VISA_TYPES.E_VISA, // Nigeria
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SR: VISA_TYPES.E_VISA, // Suriname
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
  UA: VISA_TYPES.E_VISA, // Ukraine
  VU: VISA_TYPES.E_VISA, // Vanuatu
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
  AU: VISA_TYPES.VISA_REQUIRED, // Australia
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FJ: VISA_TYPES.VISA_REQUIRED, // Fiji
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  US: VISA_TYPES.VISA_REQUIRED, // United States
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// CN Passport holders
// Source: Wikipedia
visaRequirements.CN = {
  ...visaRequirements.CN,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AO: VISA_TYPES.VISA_FREE, // Angola
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AM: VISA_TYPES.VISA_FREE, // Armenia
  AZ: VISA_TYPES.VISA_FREE, // Azerbaijan
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BJ: VISA_TYPES.VISA_FREE, // Benin
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BN: VISA_TYPES.VISA_FREE, // Brunei
  CU: VISA_TYPES.VISA_FREE, // Cuba
  DM: VISA_TYPES.VISA_FREE, // Dominica
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  GE: VISA_TYPES.VISA_FREE, // Georgia
  GD: VISA_TYPES.VISA_FREE, // Grenada
  HT: VISA_TYPES.VISA_FREE, // Haiti
  IR: VISA_TYPES.VISA_FREE, // Iran
  JM: VISA_TYPES.VISA_FREE, // Jamaica
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  MV: VISA_TYPES.VISA_FREE, // Maldives
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MA: VISA_TYPES.VISA_FREE, // Morocco
  OM: VISA_TYPES.VISA_FREE, // Oman
  PH: VISA_TYPES.VISA_FREE, // Philippines
  QA: VISA_TYPES.VISA_FREE, // Qatar
  RU: VISA_TYPES.VISA_FREE, // Russia
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SM: VISA_TYPES.VISA_FREE, // San Marino
  RS: VISA_TYPES.VISA_FREE, // Serbia
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SB: VISA_TYPES.VISA_FREE, // Solomon Islands
  SR: VISA_TYPES.VISA_FREE, // Suriname
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TO: VISA_TYPES.VISA_FREE, // Tonga
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  KE: VISA_TYPES.ETA, // Kenya
  MZ: VISA_TYPES.ETA, // Mozambique
  NZ: VISA_TYPES.ETA, // New Zealand
  KR: VISA_TYPES.ETA, // South Korea
  ZA: VISA_TYPES.ETA, // South Africa
  LK: VISA_TYPES.ETA, // Sri Lanka
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
  MM: VISA_TYPES.VISA_ON_ARRIVAL, // Myanmar
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  ST: VISA_TYPES.VISA_ON_ARRIVAL, // São Tomé and Príncipe
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AU: VISA_TYPES.E_VISA, // Australia
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CO: VISA_TYPES.E_VISA, // Colombia
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  DJ: VISA_TYPES.E_VISA, // Djibouti
  EC: VISA_TYPES.E_VISA, // Ecuador
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  GY: VISA_TYPES.E_VISA, // Guyana
  IQ: VISA_TYPES.E_VISA, // Iraq
  LS: VISA_TYPES.E_VISA, // Lesotho
  LY: VISA_TYPES.E_VISA, // Libya
  MW: VISA_TYPES.E_VISA, // Malawi
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
  MN: VISA_TYPES.E_VISA, // Mongolia
  NA: VISA_TYPES.E_VISA, // Namibia
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
  TT: VISA_TYPES.E_VISA, // Trinidad and Tobago
  UG: VISA_TYPES.E_VISA, // Uganda
  UA: VISA_TYPES.E_VISA, // Ukraine
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize
  BO: VISA_TYPES.VISA_REQUIRED, // Bolivia
  BR: VISA_TYPES.VISA_REQUIRED, // Brazil
  BG: VISA_TYPES.VISA_REQUIRED, // Bulgaria
  CA: VISA_TYPES.VISA_REQUIRED, // Canada
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
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
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  GM: VISA_TYPES.VISA_REQUIRED, // Gambia
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  IN: VISA_TYPES.VISA_REQUIRED, // India
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
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
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NI: VISA_TYPES.VISA_REQUIRED, // Nicaragua
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  PA: VISA_TYPES.VISA_REQUIRED, // Panama
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  VC: VISA_TYPES.VISA_REQUIRED, // Saint Vincent and the Grenadines
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// CU Passport holders
// Source: Wikipedia
visaRequirements.CU = {
  ...visaRequirements.CU,
  // Visa-free countries
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BY: VISA_TYPES.VISA_FREE, // Belarus
  BW: VISA_TYPES.VISA_FREE, // Botswana
  DM: VISA_TYPES.VISA_FREE, // Dominica
  FJ: VISA_TYPES.VISA_FREE, // Fiji
  GD: VISA_TYPES.VISA_FREE, // Grenada
  GY: VISA_TYPES.VISA_FREE, // Guyana
  IR: VISA_TYPES.VISA_FREE, // Iran
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MN: VISA_TYPES.VISA_FREE, // Mongolia
  NA: VISA_TYPES.VISA_FREE, // Namibia
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  QA: VISA_TYPES.VISA_FREE, // Qatar
  RU: VISA_TYPES.VISA_FREE, // Russia
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SG: VISA_TYPES.VISA_FREE, // Singapore
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  // ETA countries
  KE: VISA_TYPES.ETA, // Kenya
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BF: VISA_TYPES.VISA_ON_ARRIVAL, // Burkina Faso
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZM: VISA_TYPES.VISA_ON_ARRIVAL, // Zambia
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AO: VISA_TYPES.E_VISA, // Angola
  AM: VISA_TYPES.E_VISA, // Armenia
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BS: VISA_TYPES.E_VISA, // Bahamas
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CO: VISA_TYPES.E_VISA, // Colombia
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia
  GA: VISA_TYPES.E_VISA, // Gabon
  GE: VISA_TYPES.E_VISA, // Georgia
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  LY: VISA_TYPES.E_VISA, // Libya
  MW: VISA_TYPES.E_VISA, // Malawi
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
  NG: VISA_TYPES.E_VISA, // Nigeria
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SC: VISA_TYPES.E_VISA, // Seychelles
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  ZA: VISA_TYPES.E_VISA, // South Africa
  SS: VISA_TYPES.E_VISA, // South Sudan
  SR: VISA_TYPES.E_VISA, // Suriname
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
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
  SV: VISA_TYPES.VISA_REQUIRED, // El Salvador
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  GM: VISA_TYPES.VISA_REQUIRED, // Gambia
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  HT: VISA_TYPES.VISA_REQUIRED, // Haiti
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
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
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
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PA: VISA_TYPES.VISA_REQUIRED, // Panama
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PH: VISA_TYPES.VISA_REQUIRED, // Philippines
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
};

// CY Passport holders
// Source: Wikipedia
visaRequirements.CY = {
  ...visaRequirements.CY,
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
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BR: VISA_TYPES.VISA_FREE, // Brazil
  BN: VISA_TYPES.VISA_FREE, // Brunei
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  CL: VISA_TYPES.VISA_FREE, // Chile
  CN: VISA_TYPES.VISA_FREE, // China
  CO: VISA_TYPES.VISA_FREE, // Colombia
  CR: VISA_TYPES.VISA_FREE, // Costa Rica
  HR: VISA_TYPES.VISA_FREE, // Croatia
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
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TZ: VISA_TYPES.VISA_FREE, // Tanzania
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TL: VISA_TYPES.VISA_FREE, // Timor-Leste
  TO: VISA_TYPES.VISA_FREE, // Tonga
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TV: VISA_TYPES.VISA_FREE, // Tuvalu
  UG: VISA_TYPES.VISA_FREE, // Uganda
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  UY: VISA_TYPES.VISA_FREE, // Uruguay
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  ZW: VISA_TYPES.VISA_FREE, // Zimbabwe
  // ETA countries
  AU: VISA_TYPES.ETA, // Australia
  CA: VISA_TYPES.ETA, // Canada
  KE: VISA_TYPES.ETA, // Kenya
  KR: VISA_TYPES.ETA, // South Korea
  NZ: VISA_TYPES.ETA, // New Zealand
  GB: VISA_TYPES.ETA, // United Kingdom
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
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
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  // E-visa countries
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  CD: VISA_TYPES.E_VISA, // DR Congo
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  IR: VISA_TYPES.E_VISA, // Iran
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
  SR: VISA_TYPES.E_VISA, // Suriname
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
  TR: VISA_TYPES.E_VISA, // Turkey
  VN: VISA_TYPES.E_VISA, // Vietnam
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  US: VISA_TYPES.VISA_REQUIRED, // United States
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// CZ Passport holders
// Source: Wikipedia
visaRequirements.CZ = {
  ...visaRequirements.CZ,
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
  CU: VISA_TYPES.VISA_FREE, // Cuba
  CY: VISA_TYPES.VISA_FREE, // Cyprus
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
  LK: VISA_TYPES.VISA_FREE, // Sri Lanka
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
  KR: VISA_TYPES.ETA, // South Korea
  NZ: VISA_TYPES.ETA, // New Zealand
  GB: VISA_TYPES.ETA, // United Kingdom
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
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MM: VISA_TYPES.VISA_ON_ARRIVAL, // Myanmar
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
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
  IQ: VISA_TYPES.E_VISA, // Iraq
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
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
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CN: VISA_TYPES.VISA_REQUIRED, // China
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// KM Passport holders
// Source: Wikipedia
visaRequirements.KM = {
  ...visaRequirements.KM,
  // Visa-free countries
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BJ: VISA_TYPES.VISA_FREE, // Benin
  DM: VISA_TYPES.VISA_FREE, // Dominica
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  GM: VISA_TYPES.VISA_FREE, // Gambia
  HT: VISA_TYPES.VISA_FREE, // Haiti
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  PA: VISA_TYPES.VISA_FREE, // Panama
  PH: VISA_TYPES.VISA_FREE, // Philippines
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  UG: VISA_TYPES.VISA_FREE, // Uganda
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  KE: VISA_TYPES.ETA, // Kenya
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GH: VISA_TYPES.VISA_ON_ARRIVAL, // Ghana
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  LC: VISA_TYPES.VISA_ON_ARRIVAL, // Saint Lucia
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  AU: VISA_TYPES.E_VISA, // Australia
  BS: VISA_TYPES.E_VISA, // Bahamas
  BH: VISA_TYPES.E_VISA, // Bahrain
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
  SV: VISA_TYPES.E_VISA, // El Salvador
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GE: VISA_TYPES.E_VISA, // Georgia
  GN: VISA_TYPES.E_VISA, // Guinea
  IN: VISA_TYPES.E_VISA, // India
  ID: VISA_TYPES.E_VISA, // Indonesia
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
  MN: VISA_TYPES.E_VISA, // Mongolia
  NG: VISA_TYPES.E_VISA, // Nigeria
  OM: VISA_TYPES.E_VISA, // Oman
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  QA: VISA_TYPES.E_VISA, // Qatar
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SR: VISA_TYPES.E_VISA, // Suriname
  SY: VISA_TYPES.E_VISA, // Syria
  TH: VISA_TYPES.E_VISA, // Thailand
  TG: VISA_TYPES.E_VISA, // Togo
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  VN: VISA_TYPES.E_VISA, // Vietnam
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
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
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
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
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
  ZA: VISA_TYPES.VISA_REQUIRED, // South Africa
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TJ: VISA_TYPES.VISA_REQUIRED, // Tajikistan
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

// TD Passport holders
// Source: Wikipedia
visaRequirements.TD = {
  ...visaRequirements.TD,
  // Visa-free countries
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BJ: VISA_TYPES.VISA_FREE, // Benin
  CM: VISA_TYPES.VISA_FREE, // Cameroon
  CF: VISA_TYPES.VISA_FREE, // Central African Republic
  CG: VISA_TYPES.VISA_FREE, // Republic of the Congo
  CI: VISA_TYPES.VISA_FREE, // Côte d'Ivoire
  DM: VISA_TYPES.VISA_FREE, // Dominica
  GQ: VISA_TYPES.VISA_FREE, // Equatorial Guinea
  GA: VISA_TYPES.VISA_FREE, // Gabon
  GM: VISA_TYPES.VISA_FREE, // Gambia
  HT: VISA_TYPES.VISA_FREE, // Haiti
  KE: VISA_TYPES.VISA_FREE, // Kenya
  MY: VISA_TYPES.VISA_FREE, // Malaysia
  ML: VISA_TYPES.VISA_FREE, // Mali
  MR: VISA_TYPES.VISA_FREE, // Mauritania
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  NE: VISA_TYPES.VISA_FREE, // Niger
  NG: VISA_TYPES.VISA_FREE, // Nigeria
  PH: VISA_TYPES.VISA_FREE, // Philippines
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  // ETA countries
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GH: VISA_TYPES.VISA_ON_ARRIVAL, // Ghana
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  UG: VISA_TYPES.VISA_ON_ARRIVAL, // Uganda
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AO: VISA_TYPES.E_VISA, // Angola
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  AU: VISA_TYPES.E_VISA, // Australia
  BS: VISA_TYPES.E_VISA, // Bahamas
  BH: VISA_TYPES.E_VISA, // Bahrain
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CO: VISA_TYPES.E_VISA, // Colombia
  CD: VISA_TYPES.E_VISA, // DR Congo
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  EC: VISA_TYPES.E_VISA, // Ecuador
  SV: VISA_TYPES.E_VISA, // El Salvador
  GN: VISA_TYPES.E_VISA, // Guinea
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MW: VISA_TYPES.E_VISA, // Malawi
  MD: VISA_TYPES.E_VISA, // Moldova
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
  TZ: VISA_TYPES.E_VISA, // Tanzania
  TH: VISA_TYPES.E_VISA, // Thailand
  TG: VISA_TYPES.E_VISA, // Togo
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  VN: VISA_TYPES.E_VISA, // Vietnam
  ZM: VISA_TYPES.E_VISA, // Zambia
  ZW: VISA_TYPES.E_VISA, // Zimbabwe
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
  GE: VISA_TYPES.VISA_REQUIRED, // Georgia
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
  MN: VISA_TYPES.VISA_REQUIRED, // Mongolia
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
  LC: VISA_TYPES.VISA_REQUIRED, // Saint Lucia
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
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
  UA: VISA_TYPES.VISA_REQUIRED, // Ukraine
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  UZ: VISA_TYPES.VISA_REQUIRED, // Uzbekistan
  VU: VISA_TYPES.VISA_REQUIRED, // Vanuatu
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
  // Travel restricted countries
  US: VISA_TYPES.TRAVEL_RESTRICTED, // United States
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

// BF Passport holders
// Source: Wikipedia
visaRequirements.BF = {
  ...visaRequirements.BF,
  // Visa-free countries
  BD: VISA_TYPES.VISA_FREE, // Bangladesh
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BJ: VISA_TYPES.VISA_FREE, // Benin
  CV: VISA_TYPES.VISA_FREE, // Cape Verde
  CF: VISA_TYPES.VISA_FREE, // Central African Republic
  TD: VISA_TYPES.VISA_FREE, // Chad
  CI: VISA_TYPES.VISA_FREE, // Côte d'Ivoire
  DM: VISA_TYPES.VISA_FREE, // Dominica
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  GM: VISA_TYPES.VISA_FREE, // Gambia
  GH: VISA_TYPES.VISA_FREE, // Ghana
  GN: VISA_TYPES.VISA_FREE, // Guinea
  GW: VISA_TYPES.VISA_FREE, // Guinea-Bissau
  HT: VISA_TYPES.VISA_FREE, // Haiti
  LR: VISA_TYPES.VISA_FREE, // Liberia
  ML: VISA_TYPES.VISA_FREE, // Mali
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  MA: VISA_TYPES.VISA_FREE, // Morocco
  NE: VISA_TYPES.VISA_FREE, // Niger
  NG: VISA_TYPES.VISA_FREE, // Nigeria
  PH: VISA_TYPES.VISA_FREE, // Philippines
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  SN: VISA_TYPES.VISA_FREE, // Senegal
  SL: VISA_TYPES.VISA_FREE, // Sierra Leone
  SG: VISA_TYPES.VISA_FREE, // Singapore
  TG: VISA_TYPES.VISA_FREE, // Togo
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  // ETA countries
  LK: VISA_TYPES.ETA, // Sri Lanka
  // Visa on arrival countries
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  CG: VISA_TYPES.VISA_ON_ARRIVAL, // Republic of the Congo
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  LC: VISA_TYPES.VISA_ON_ARRIVAL, // Saint Lucia
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa
  SC: VISA_TYPES.VISA_ON_ARRIVAL, // Seychelles
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  UG: VISA_TYPES.VISA_ON_ARRIVAL, // Uganda
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  BS: VISA_TYPES.E_VISA, // Bahamas
  BH: VISA_TYPES.E_VISA, // Bahrain
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BI: VISA_TYPES.E_VISA, // Burundi
  CM: VISA_TYPES.E_VISA, // Cameroon
  CO: VISA_TYPES.E_VISA, // Colombia
  CD: VISA_TYPES.E_VISA, // DR Congo
  CU: VISA_TYPES.E_VISA, // Cuba
  DJ: VISA_TYPES.E_VISA, // Djibouti
  SV: VISA_TYPES.E_VISA, // El Salvador
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon
  GE: VISA_TYPES.E_VISA, // Georgia
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KE: VISA_TYPES.E_VISA, // Kenya
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LS: VISA_TYPES.E_VISA, // Lesotho
  LY: VISA_TYPES.E_VISA, // Libya
  MW: VISA_TYPES.E_VISA, // Malawi
  MY: VISA_TYPES.E_VISA, // Malaysia
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova
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
  MN: VISA_TYPES.VISA_REQUIRED, // Mongolia
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
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
  ZA: VISA_TYPES.VISA_REQUIRED, // South Africa
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

// BG Passport holders
// Source: Wikipedia
visaRequirements.BG = {
  ...visaRequirements.BG,
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
  HT: VISA_TYPES.VISA_FREE, // Haiti
  HN: VISA_TYPES.VISA_FREE, // Honduras
  HU: VISA_TYPES.VISA_FREE, // Hungary
  IS: VISA_TYPES.VISA_FREE, // Iceland
  IE: VISA_TYPES.VISA_FREE, // Ireland
  IL: VISA_TYPES.VISA_FREE, // Israel
  IT: VISA_TYPES.VISA_FREE, // Italy
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
  NZ: VISA_TYPES.ETA, // New Zealand
  KN: VISA_TYPES.ETA, // Saint Kitts and Nevis
  SC: VISA_TYPES.ETA, // Seychelles
  GB: VISA_TYPES.ETA, // United Kingdom
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
  JM: VISA_TYPES.VISA_ON_ARRIVAL, // Jamaica
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
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
  GY: VISA_TYPES.E_VISA, // Guyana
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
  RU: VISA_TYPES.E_VISA, // Russia
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
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  US: VISA_TYPES.VISA_REQUIRED, // United States
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

// BI Passport holders
// Source: Wikipedia
visaRequirements.BI = {
  ...visaRequirements.BI,
  // Visa-free countries
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BJ: VISA_TYPES.VISA_FREE, // Benin
  CF: VISA_TYPES.VISA_FREE, // Central African Republic
  CD: VISA_TYPES.VISA_FREE, // DR Congo
  DM: VISA_TYPES.VISA_FREE, // Dominica
  EC: VISA_TYPES.VISA_FREE, // Ecuador
  GM: VISA_TYPES.VISA_FREE, // Gambia
  HT: VISA_TYPES.VISA_FREE, // Haiti
  KE: VISA_TYPES.VISA_FREE, // Kenya
  MU: VISA_TYPES.VISA_FREE, // Mauritius
  FM: VISA_TYPES.VISA_FREE, // Micronesia
  PH: VISA_TYPES.VISA_FREE, // Philippines
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SC: VISA_TYPES.VISA_FREE, // Seychelles
  SG: VISA_TYPES.VISA_FREE, // Singapore
  TZ: VISA_TYPES.VISA_FREE, // Tanzania
  UG: VISA_TYPES.VISA_FREE, // Uganda
  // Visa on arrival countries
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia
  GH: VISA_TYPES.VISA_ON_ARRIVAL, // Ghana
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  LC: VISA_TYPES.VISA_ON_ARRIVAL, // Saint Lucia
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  ZM: VISA_TYPES.VISA_ON_ARRIVAL, // Zambia
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AL: VISA_TYPES.E_VISA, // Albania
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  BS: VISA_TYPES.E_VISA, // Bahamas
  BH: VISA_TYPES.E_VISA, // Bahrain
  BT: VISA_TYPES.E_VISA, // Bhutan
  BW: VISA_TYPES.E_VISA, // Botswana
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  CM: VISA_TYPES.E_VISA, // Cameroon
  CO: VISA_TYPES.E_VISA, // Colombia
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
  NG: VISA_TYPES.E_VISA, // Nigeria
  OM: VISA_TYPES.E_VISA, // Oman
  PK: VISA_TYPES.E_VISA, // Pakistan
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  QA: VISA_TYPES.E_VISA, // Qatar
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  LK: VISA_TYPES.E_VISA, // Sri Lanka
  SR: VISA_TYPES.E_VISA, // Suriname
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan
  TH: VISA_TYPES.E_VISA, // Thailand
  TG: VISA_TYPES.E_VISA, // Togo
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
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
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
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
  LA: VISA_TYPES.VISA_REQUIRED, // Laos
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  MG: VISA_TYPES.VISA_REQUIRED, // Madagascar
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
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
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
  UA: VISA_TYPES.VISA_REQUIRED, // Ukraine
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  UZ: VISA_TYPES.VISA_REQUIRED, // Uzbekistan
  VU: VISA_TYPES.VISA_REQUIRED, // Vanuatu
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  VN: VISA_TYPES.VISA_REQUIRED, // Vietnam
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

// BN Passport holders
// Source: Wikipedia
visaRequirements.BN = {
  ...visaRequirements.BN,
  // Visa-free countries
  AL: VISA_TYPES.VISA_FREE, // Albania
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda
  AT: VISA_TYPES.VISA_FREE, // Austria
  BS: VISA_TYPES.VISA_FREE, // Bahamas
  BB: VISA_TYPES.VISA_FREE, // Barbados
  BE: VISA_TYPES.VISA_FREE, // Belgium
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina
  BW: VISA_TYPES.VISA_FREE, // Botswana
  BG: VISA_TYPES.VISA_FREE, // Bulgaria
  KH: VISA_TYPES.VISA_FREE, // Cambodia
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
  KI: VISA_TYPES.VISA_FREE, // Kiribati
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan
  LA: VISA_TYPES.VISA_FREE, // Laos
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
  MM: VISA_TYPES.VISA_FREE, // Myanmar
  NL: VISA_TYPES.VISA_FREE, // Netherlands
  NI: VISA_TYPES.VISA_FREE, // Nicaragua
  MK: VISA_TYPES.VISA_FREE, // North Macedonia
  NO: VISA_TYPES.VISA_FREE, // Norway
  OM: VISA_TYPES.VISA_FREE, // Oman
  PA: VISA_TYPES.VISA_FREE, // Panama
  PE: VISA_TYPES.VISA_FREE, // Peru
  PH: VISA_TYPES.VISA_FREE, // Philippines
  PL: VISA_TYPES.VISA_FREE, // Poland
  PT: VISA_TYPES.VISA_FREE, // Portugal
  QA: VISA_TYPES.VISA_FREE, // Qatar
  RO: VISA_TYPES.VISA_FREE, // Romania
  RU: VISA_TYPES.VISA_FREE, // Russia
  RW: VISA_TYPES.VISA_FREE, // Rwanda
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines
  WS: VISA_TYPES.VISA_FREE, // Samoa
  SM: VISA_TYPES.VISA_FREE, // San Marino
  SG: VISA_TYPES.VISA_FREE, // Singapore
  SK: VISA_TYPES.VISA_FREE, // Slovakia
  SI: VISA_TYPES.VISA_FREE, // Slovenia
  SB: VISA_TYPES.VISA_FREE, // Solomon Islands
  ES: VISA_TYPES.VISA_FREE, // Spain
  SR: VISA_TYPES.VISA_FREE, // Suriname
  SE: VISA_TYPES.VISA_FREE, // Sweden
  CH: VISA_TYPES.VISA_FREE, // Switzerland
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan
  TZ: VISA_TYPES.VISA_FREE, // Tanzania
  TH: VISA_TYPES.VISA_FREE, // Thailand
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  TR: VISA_TYPES.VISA_FREE, // Turkey
  UA: VISA_TYPES.VISA_FREE, // Ukraine
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates
  GB: VISA_TYPES.VISA_FREE, // United Kingdom
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan
  VU: VISA_TYPES.VISA_FREE, // Vanuatu
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VN: VISA_TYPES.VISA_FREE, // Vietnam
  ZM: VISA_TYPES.VISA_FREE, // Zambia
  // ETA countries
  CA: VISA_TYPES.ETA, // Canada
  PK: VISA_TYPES.ETA, // Pakistan
  LK: VISA_TYPES.ETA, // Sri Lanka
  US: VISA_TYPES.ETA, // United States
  // Visa on arrival countries
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives
  MH: VISA_TYPES.VISA_ON_ARRIVAL, // Marshall Islands
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste
  TO: VISA_TYPES.VISA_ON_ARRIVAL, // Tonga
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu
  YE: VISA_TYPES.VISA_ON_ARRIVAL, // Yemen
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe
  // E-visa countries
  AO: VISA_TYPES.E_VISA, // Angola
  AM: VISA_TYPES.E_VISA, // Armenia
  AU: VISA_TYPES.E_VISA, // Australia
  AZ: VISA_TYPES.E_VISA, // Azerbaijan
  BJ: VISA_TYPES.E_VISA, // Benin
  BT: VISA_TYPES.E_VISA, // Bhutan
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
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KE: VISA_TYPES.E_VISA, // Kenya
  KR: VISA_TYPES.E_VISA, // South Korea
  LY: VISA_TYPES.E_VISA, // Libya
  MR: VISA_TYPES.E_VISA, // Mauritania
  MN: VISA_TYPES.E_VISA, // Mongolia
  NZ: VISA_TYPES.E_VISA, // New Zealand
  NG: VISA_TYPES.E_VISA, // Nigeria
  PG: VISA_TYPES.E_VISA, // Papua New Guinea
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SC: VISA_TYPES.E_VISA, // Seychelles
  SO: VISA_TYPES.E_VISA, // Somalia
  SS: VISA_TYPES.E_VISA, // South Sudan
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo
  UG: VISA_TYPES.E_VISA, // Uganda
  // Visa required countries
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina
  BD: VISA_TYPES.VISA_REQUIRED, // Bangladesh
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus
  BR: VISA_TYPES.VISA_REQUIRED, // Brazil
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  TD: VISA_TYPES.VISA_REQUIRED, // Chad
  CL: VISA_TYPES.VISA_REQUIRED, // Chile
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  LR: VISA_TYPES.VISA_REQUIRED, // Liberia
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  NA: VISA_TYPES.VISA_REQUIRED, // Namibia
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  RS: VISA_TYPES.VISA_REQUIRED, // Serbia
  ZA: VISA_TYPES.VISA_REQUIRED, // South Africa
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
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

// CD Passport holders (Democratic Republic of the Congo)
// Source: https://en.wikipedia.org/wiki/Visa_requirements_for_Democratic_Republic_of_the_Congo_citizens
visaRequirements.CD = {
  ...visaRequirements.CD,
  // Visa not required
  BB: VISA_TYPES.VISA_FREE, // Barbados (90 days)
  BJ: VISA_TYPES.VISA_FREE, // Benin (90 days)
  BI: VISA_TYPES.VISA_FREE, // Burundi (3 months)
  DM: VISA_TYPES.VISA_FREE, // Dominica (21 days)
  GM: VISA_TYPES.VISA_FREE, // Gambia (90 days)
  HT: VISA_TYPES.VISA_FREE, // Haiti (3 months)
  KE: VISA_TYPES.VISA_FREE, // Kenya (90 days)
  MU: VISA_TYPES.VISA_FREE, // Mauritius (90 days)
  FM: VISA_TYPES.VISA_FREE, // Micronesia (30 days)
  PH: VISA_TYPES.VISA_FREE, // Philippines (30 days)
  RW: VISA_TYPES.VISA_FREE, // Rwanda (90 days)
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines (3 months)
  WS: VISA_TYPES.VISA_FREE, // Samoa (60 days)
  SG: VISA_TYPES.VISA_FREE, // Singapore (30 days)
  SR: VISA_TYPES.VISA_FREE, // Suriname (90 days)
  TZ: VISA_TYPES.VISA_FREE, // Tanzania
  UG: VISA_TYPES.VISA_FREE, // Uganda
  ZW: VISA_TYPES.VISA_FREE, // Zimbabwe (3 months)
  // Visa on arrival
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh (30 days)
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain (14 days, conditions apply)
  BF: VISA_TYPES.VISA_ON_ARRIVAL, // Burkina Faso (1 month, only at Ouagadougou Airport)
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia (30 days)
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros (45 days)
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia (up to 90 days, only at Addis Ababa Bole International Airport)
  GH: VISA_TYPES.VISA_ON_ARRIVAL, // Ghana (30 days)
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau (90 days)
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar (60 days)
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi (90 days)
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives (30 days, free visa on arrival)
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique (30 days, prior authorization required)
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal (90 days, online visa also available)
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau (30 days, free visa on arrival)
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal (90 days)
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone (30 days, eVisa also available)
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka (30 days, eVisa also available)
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste (30 days)
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu (1 month)
  ZM: VISA_TYPES.VISA_ON_ARRIVAL, // Zambia (90 days)
  // eVisa
  AL: VISA_TYPES.E_VISA, // Albania
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda
  BS: VISA_TYPES.E_VISA, // Bahamas (3 months)
  BT: VISA_TYPES.E_VISA, // Bhutan
  BO: VISA_TYPES.E_VISA, // Bolivia (30 days)
  BW: VISA_TYPES.E_VISA, // Botswana (3 months)
  CM: VISA_TYPES.E_VISA, // Cameroon
  CO: VISA_TYPES.E_VISA, // Colombia
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire (3 months)
  CU: VISA_TYPES.E_VISA, // Cuba (90 days)
  DJ: VISA_TYPES.E_VISA, // Djibouti (90 days)
  SV: VISA_TYPES.E_VISA, // El Salvador
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  GA: VISA_TYPES.E_VISA, // Gabon (90 days)
  GE: VISA_TYPES.E_VISA, // Georgia (e-Visa eligible with valid visa/travel documents from any OECD country)
  GN: VISA_TYPES.E_VISA, // Guinea (90 days)
  IN: VISA_TYPES.E_VISA, // India
  IR: VISA_TYPES.E_VISA, // Iran (30 days)
  IL: VISA_TYPES.E_VISA, // Israel
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan (60 days)
  LS: VISA_TYPES.E_VISA, // Lesotho
  LY: VISA_TYPES.E_VISA, // Libya
  MY: VISA_TYPES.E_VISA, // Malaysia (30 days)
  MR: VISA_TYPES.E_VISA, // Mauritania (available at Nouakchott–Oumtounsy International Airport)
  MD: VISA_TYPES.E_VISA, // Moldova (for holders of residence permit or valid visa from EU/Schengen)
  MN: VISA_TYPES.E_VISA, // Mongolia (30 days)
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria (90 days)
  PK: VISA_TYPES.E_VISA, // Pakistan (3 months, online visa eligible)
  PG: VISA_TYPES.E_VISA, // Papua New Guinea (60 days)
  QA: VISA_TYPES.E_VISA, // Qatar (via Hayya website)
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SC: VISA_TYPES.E_VISA, // Seychelles (3 months, Electronic Border System)
  SO: VISA_TYPES.E_VISA, // Somalia (30 days, available at specific airports)
  ZA: VISA_TYPES.E_VISA, // South Africa (30 days, e-Visa holders must arrive via O. R. Tambo International Airport)
  SS: VISA_TYPES.E_VISA, // South Sudan (obtainable online)
  LK: VISA_TYPES.E_VISA, // Sri Lanka (60 days, eVisa also available)
  TG: VISA_TYPES.E_VISA, // Togo (15 days)
  TT: VISA_TYPES.E_VISA, // Trinidad and Tobago
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  VU: VISA_TYPES.E_VISA, // Vanuatu
  VN: VISA_TYPES.E_VISA, // Vietnam (90 days, multiple entry)
  // Visa required
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina (AVE available for holders of valid US visa)
  AM: VISA_TYPES.VISA_REQUIRED, // Armenia
  AU: VISA_TYPES.VISA_REQUIRED, // Australia (online visa required)
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
  CY: VISA_TYPES.VISA_REQUIRED, // Cyprus
  CZ: VISA_TYPES.VISA_REQUIRED, // Czech Republic
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  DO: VISA_TYPES.VISA_REQUIRED, // Dominican Republic
  EC: VISA_TYPES.E_VISA, // Ecuador (eVisa)
  EG: VISA_TYPES.VISA_REQUIRED, // Egypt
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FJ: VISA_TYPES.VISA_REQUIRED, // Fiji
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  GD: VISA_TYPES.VISA_REQUIRED, // Grenada
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IQ: VISA_TYPES.VISA_REQUIRED, // Iraq
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JM: VISA_TYPES.VISA_REQUIRED, // Jamaica
  JP: VISA_TYPES.VISA_REQUIRED, // Japan
  JO: VISA_TYPES.VISA_REQUIRED, // Jordan
  KZ: VISA_TYPES.VISA_REQUIRED, // Kazakhstan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea
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
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico (visa not required for holders of valid visa of Canada, US, UK or Schengen State)
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco
  NA: VISA_TYPES.VISA_REQUIRED, // Namibia
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NI: VISA_TYPES.VISA_REQUIRED, // Nicaragua (visa on arrival if holding valid visas issued by United States, Canada, or Schengen Member State)
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
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
  RS: VISA_TYPES.VISA_REQUIRED, // Serbia (visa free for valid visa holders or residents of EU member states and the United States)
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  SY: VISA_TYPES.VISA_REQUIRED, // Syria
  TW: VISA_TYPES.VISA_REQUIRED, // Taiwan
  TJ: VISA_TYPES.VISA_REQUIRED, // Tajikistan
  TH: VISA_TYPES.VISA_REQUIRED, // Thailand
  TO: VISA_TYPES.VISA_REQUIRED, // Tonga
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TR: VISA_TYPES.VISA_REQUIRED, // Turkey
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

// DK Passport holders (Denmark)
// Source: https://en.wikipedia.org/wiki/Visa_requirements_for_Danish_citizens
// As of 2025, Danish passport holders can travel to 187 countries and territories without a visa or with visa on arrival
visaRequirements.DK = {
  ...visaRequirements.DK,
  // Visa not required (Freedom of movement in EU/EEA/Schengen)
  AT: VISA_TYPES.VISA_FREE, // Austria (Freedom of movement)
  BE: VISA_TYPES.VISA_FREE, // Belgium (Freedom of movement)
  BG: VISA_TYPES.VISA_FREE, // Bulgaria (Freedom of movement)
  HR: VISA_TYPES.VISA_FREE, // Croatia (Freedom of movement)
  CY: VISA_TYPES.VISA_FREE, // Cyprus (Freedom of movement)
  CZ: VISA_TYPES.VISA_FREE, // Czech Republic (Freedom of movement)
  EE: VISA_TYPES.VISA_FREE, // Estonia (Freedom of movement)
  FI: VISA_TYPES.VISA_FREE, // Finland (Freedom of movement)
  FR: VISA_TYPES.VISA_FREE, // France (Freedom of movement)
  DE: VISA_TYPES.VISA_FREE, // Germany (Freedom of movement)
  GR: VISA_TYPES.VISA_FREE, // Greece (Freedom of movement)
  HU: VISA_TYPES.VISA_FREE, // Hungary (Freedom of movement)
  IS: VISA_TYPES.VISA_FREE, // Iceland (Freedom of movement)
  IE: VISA_TYPES.VISA_FREE, // Ireland (Freedom of movement)
  IT: VISA_TYPES.VISA_FREE, // Italy (Freedom of movement)
  LV: VISA_TYPES.VISA_FREE, // Latvia (Freedom of movement)
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein (Freedom of movement)
  LT: VISA_TYPES.VISA_FREE, // Lithuania (Freedom of movement)
  LU: VISA_TYPES.VISA_FREE, // Luxembourg (Freedom of movement)
  MT: VISA_TYPES.VISA_FREE, // Malta (Freedom of movement)
  NL: VISA_TYPES.VISA_FREE, // Netherlands (Freedom of movement)
  NO: VISA_TYPES.VISA_FREE, // Norway (Freedom of movement)
  PL: VISA_TYPES.VISA_FREE, // Poland (Freedom of movement)
  PT: VISA_TYPES.VISA_FREE, // Portugal (Freedom of movement)
  RO: VISA_TYPES.VISA_FREE, // Romania (Freedom of movement)
  SK: VISA_TYPES.VISA_FREE, // Slovakia (Freedom of movement)
  SI: VISA_TYPES.VISA_FREE, // Slovenia (Freedom of movement)
  ES: VISA_TYPES.VISA_FREE, // Spain (Freedom of movement)
  SE: VISA_TYPES.VISA_FREE, // Sweden (Freedom of movement)
  CH: VISA_TYPES.VISA_FREE, // Switzerland (Freedom of movement)
  // Visa not required (Other countries)
  AL: VISA_TYPES.VISA_FREE, // Albania (90 days)
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AO: VISA_TYPES.VISA_FREE, // Angola (30 days, max 3 entries per calendar year)
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda (6 months)
  AR: VISA_TYPES.VISA_FREE, // Argentina (90 days)
  AM: VISA_TYPES.VISA_FREE, // Armenia (180 days)
  BS: VISA_TYPES.VISA_FREE, // Bahamas (8 months)
  BB: VISA_TYPES.VISA_FREE, // Barbados (90 days)
  BY: VISA_TYPES.VISA_FREE, // Belarus (30 days, visa-free until 31 December 2024)
  BZ: VISA_TYPES.VISA_FREE, // Belize
  BO: VISA_TYPES.VISA_FREE, // Bolivia (90 days)
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina (90 days within any 6-month period)
  BW: VISA_TYPES.VISA_FREE, // Botswana (90 days)
  BR: VISA_TYPES.VISA_FREE, // Brazil (90 days within any 180 day period)
  BN: VISA_TYPES.VISA_FREE, // Brunei (90 days)
  CL: VISA_TYPES.VISA_FREE, // Chile (90 days)
  CN: VISA_TYPES.VISA_FREE, // China (30 days, temporarily visa-free from 8 November 2024 to 31 December 2026)
  CO: VISA_TYPES.VISA_FREE, // Colombia (180 days, 90 days extendable up to 180-days stay within a 1-year period)
  CR: VISA_TYPES.VISA_FREE, // Costa Rica (180 days)
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic (90 days)
  DM: VISA_TYPES.VISA_FREE, // Dominica (90 days within any 180 day period)
  EC: VISA_TYPES.VISA_FREE, // Ecuador (90 days)
  SV: VISA_TYPES.VISA_FREE, // El Salvador (3 months)
  SZ: VISA_TYPES.VISA_FREE, // Eswatini (30 days)
  FJ: VISA_TYPES.VISA_FREE, // Fiji (4 months)
  GE: VISA_TYPES.VISA_FREE, // Georgia (1 year)
  GM: VISA_TYPES.VISA_FREE, // Gambia (90 days)
  GD: VISA_TYPES.VISA_FREE, // Grenada (3 months)
  GT: VISA_TYPES.VISA_FREE, // Guatemala (90 days)
  GY: VISA_TYPES.VISA_FREE, // Guyana (90 days)
  HT: VISA_TYPES.VISA_FREE, // Haiti (90 days)
  HN: VISA_TYPES.VISA_FREE, // Honduras (90 days)
  JM: VISA_TYPES.VISA_FREE, // Jamaica (90 days)
  JP: VISA_TYPES.VISA_FREE, // Japan (90 days)
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan (30 days)
  KI: VISA_TYPES.VISA_FREE, // Kiribati (90 days within any 180 day period)
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan (60 days)
  LS: VISA_TYPES.VISA_FREE, // Lesotho (14 days, 44 days eVisa also available)
  MY: VISA_TYPES.VISA_FREE, // Malaysia (90 days)
  MV: VISA_TYPES.VISA_FREE, // Maldives (30 days, free visa on arrival)
  MH: VISA_TYPES.VISA_FREE, // Marshall Islands (90 days within any 180 day period)
  MU: VISA_TYPES.VISA_FREE, // Mauritius (180 days per calendar year for tourism, 120 days per calendar year per business)
  MX: VISA_TYPES.VISA_FREE, // Mexico (180 days)
  FM: VISA_TYPES.VISA_FREE, // Micronesia (90 days within any 180 day period)
  MD: VISA_TYPES.VISA_FREE, // Moldova (90 days within any 180 day period)
  MC: VISA_TYPES.VISA_FREE, // Monaco
  MN: VISA_TYPES.VISA_FREE, // Mongolia (30 days, exempted from January 2023 to December 2025)
  ME: VISA_TYPES.VISA_FREE, // Montenegro (90 days)
  MA: VISA_TYPES.VISA_FREE, // Morocco (90 days)
  MZ: VISA_TYPES.VISA_FREE, // Mozambique (30 days, must register on e-Visa platform at least 48 hours prior)
  NA: VISA_TYPES.VISA_FREE, // Namibia (3 months, eVisa / Visa on arrival also available)
  NI: VISA_TYPES.VISA_FREE, // Nicaragua (90 days)
  PW: VISA_TYPES.VISA_FREE, // Palau (90 days within any 180 day period)
  PA: VISA_TYPES.VISA_FREE, // Panama (90 days)
  PY: VISA_TYPES.VISA_FREE, // Paraguay (90 days)
  PE: VISA_TYPES.VISA_FREE, // Peru (90 days within any 6-month period)
  PH: VISA_TYPES.VISA_FREE, // Philippines (30 days)
  QA: VISA_TYPES.VISA_FREE, // Qatar (90 days)
  RS: VISA_TYPES.VISA_FREE, // Serbia (90 days within any 6-month period)
  SC: VISA_TYPES.VISA_FREE, // Seychelles (3 months, Electronic Border System)
  SG: VISA_TYPES.VISA_FREE, // Singapore (90 days)
  ZA: VISA_TYPES.VISA_FREE, // South Africa (90 days)
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia (90 days within any 180 day period)
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines (90 days within any 180 day period)
  WS: VISA_TYPES.VISA_FREE, // Samoa (90 days within any 180 day period)
  SM: VISA_TYPES.VISA_FREE, // San Marino
  ST: VISA_TYPES.VISA_FREE, // São Tomé and Príncipe (15 days)
  SN: VISA_TYPES.VISA_FREE, // Senegal (90 days)
  SB: VISA_TYPES.VISA_FREE, // Solomon Islands (90 days within any 180 day period)
  SR: VISA_TYPES.VISA_FREE, // Suriname (90 days, entrance fee of USD 50 or EUR 50 must be paid online prior to arrival)
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan (30 days)
  TH: VISA_TYPES.VISA_FREE, // Thailand (60 days, can be extended for an additional 30 days)
  TL: VISA_TYPES.VISA_FREE, // Timor-Leste (90 days within any 180 day period)
  TO: VISA_TYPES.VISA_FREE, // Tonga (90 days within any 180 day period)
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago (90 days within any 180 day period)
  TN: VISA_TYPES.VISA_FREE, // Tunisia (90 days)
  TR: VISA_TYPES.VISA_FREE, // Turkey (90 days)
  TV: VISA_TYPES.VISA_FREE, // Tuvalu (90 days within any 180 day period)
  UA: VISA_TYPES.VISA_FREE, // Ukraine (90 days within any 180 day period)
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates (90 days within any 180 day period)
  UY: VISA_TYPES.VISA_FREE, // Uruguay (90 days)
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan (30 days)
  VA: VISA_TYPES.VISA_FREE, // Vatican City
  VE: VISA_TYPES.VISA_FREE, // Venezuela (90 days)
  VN: VISA_TYPES.VISA_FREE, // Vietnam (45 days, eVisa valid for 90 days also available)
  ZM: VISA_TYPES.VISA_FREE, // Zambia (90 days, also eligible for a universal visa)
  // ETA / eVisitor / Electronic Travel Authorization
  AU: VISA_TYPES.ETA, // Australia (eVisitor, 90 days on each visit in 12-month period)
  CA: VISA_TYPES.ETA, // Canada (eTA required if arriving by air, 6 months)
  GB: VISA_TYPES.ETA, // United Kingdom (ETA UK, valid for 2 years when issued, required from 2 April 2025, 6 months)
  US: VISA_TYPES.ETA, // United States (ESTA via Visa Waiver Program, valid for 2 years, 90 days)
  NZ: VISA_TYPES.ETA, // New Zealand (Electronic Travel Authority, 3 months, International Visitor Conservation and Tourism Levy must be paid)
  KR: VISA_TYPES.ETA, // South Korea (K-ETA, valid for 3 years from date of approval, 90 days)
  IL: VISA_TYPES.ETA, // Israel (ETA-IL, 3 months for tourism only)
  KE: VISA_TYPES.ETA, // Kenya (Electronic Travel Authorisation, 90 days, eTA fee is USD 32.50)
  KN: VISA_TYPES.ETA, // Saint Kitts and Nevis (Electronic Travel Authorisation, 3 months)
  CV: VISA_TYPES.ETA, // Cape Verde (EASE, 30 days, must register online at least five days prior to arrival)
  // eVisa
  AZ: VISA_TYPES.E_VISA, // Azerbaijan (30 days)
  BJ: VISA_TYPES.E_VISA, // Benin (30 days, must have an international vaccination certificate)
  BT: VISA_TYPES.E_VISA, // Bhutan (must pay 100 USD per person per day for Sustainable Development Fee)
  BF: VISA_TYPES.E_VISA, // Burkina Faso (1 month)
  BI: VISA_TYPES.E_VISA, // Burundi (1 month, eVisa / Visa on arrival)
  KH: VISA_TYPES.E_VISA, // Cambodia (30 days, eVisa / Visa on arrival)
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad (90 days)
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire (3 months, e-Visa can be picked up at Port Bouet Airport in Abidjan)
  CU: VISA_TYPES.E_VISA, // Cuba (90 days, can be extended up to 90 days with a fee)
  CD: VISA_TYPES.E_VISA, // Democratic Republic of the Congo (7 days)
  DJ: VISA_TYPES.E_VISA, // Djibouti (90 days)
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea (must arrive via Malabo International Airport, processing fee 75 USD)
  ET: VISA_TYPES.E_VISA, // Ethiopia (up to 90 days, eVisa / Visa on arrival, e-Visa holders must arrive via Addis Ababa Bole International Airport)
  GA: VISA_TYPES.E_VISA, // Gabon (90 days, electronic visa holders must arrive via Libreville International Airport)
  GN: VISA_TYPES.E_VISA, // Guinea (90 days)
  IN: VISA_TYPES.E_VISA, // India (30 days, e-Visa holders must arrive via 32 designated airports or 5 designated seaports)
  IR: VISA_TYPES.E_VISA, // Iran (30 days)
  IQ: VISA_TYPES.E_VISA, // Iraq (60 days)
  JO: VISA_TYPES.E_VISA, // Jordan (30 days, eVisa / Visa on arrival)
  LY: VISA_TYPES.E_VISA, // Libya
  LR: VISA_TYPES.E_VISA, // Liberia
  MG: VISA_TYPES.E_VISA, // Madagascar (60 days, eVisa/Visa on arrival)
  MW: VISA_TYPES.E_VISA, // Malawi (90 days, eVisa / Visa on arrival)
  MR: VISA_TYPES.E_VISA, // Mauritania (available at Nouakchott–Oumtounsy International Airport)
  MM: VISA_TYPES.E_VISA, // Myanmar (28 days, e-Visa holders must arrive via specific airports or land border crossings)
  NG: VISA_TYPES.E_VISA, // Nigeria (90 days)
  OM: VISA_TYPES.E_VISA, // Oman (14 days / 30 days, Visa not required / eVisa)
  PK: VISA_TYPES.E_VISA, // Pakistan (90 days)
  PG: VISA_TYPES.E_VISA, // Papua New Guinea (Easy Visitor Permit, 60 days)
  RU: VISA_TYPES.E_VISA, // Russia (30 days)
  RW: VISA_TYPES.E_VISA, // Rwanda (30 days, eVisa / Visa on arrival)
  SA: VISA_TYPES.E_VISA, // Saudi Arabia (90 days, eVisa / Visa on arrival)
  SL: VISA_TYPES.E_VISA, // Sierra Leone (3 months / 30 days, eVisa / Visa on arrival)
  SO: VISA_TYPES.E_VISA, // Somalia (30 days, available at specific airports)
  SS: VISA_TYPES.E_VISA, // South Sudan (obtainable online, printed visa authorization must be presented at the time of travel)
  LK: VISA_TYPES.E_VISA, // Sri Lanka (60 days / 30 days, eVisa / Visa on arrival)
  SY: VISA_TYPES.E_VISA, // Syria
  TZ: VISA_TYPES.E_VISA, // Tanzania (90 days, eVisa / Visa on arrival)
  TG: VISA_TYPES.E_VISA, // Togo (15 days)
  UG: VISA_TYPES.E_VISA, // Uganda (3 months)
  ZW: VISA_TYPES.E_VISA, // Zimbabwe (30 days, eVisa / Visa on arrival)
  // Visa on arrival
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh (30 days)
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain (14 days, eVisa / Visa on arrival)
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros (45 days)
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt (30 days, eVisa / Visa on arrival)
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau (90 days)
  ID: VISA_TYPES.VISA_ON_ARRIVAL, // Indonesia (30 days, e-VOA / Visa on arrival)
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait (3 months, eVisa / Visa on arrival)
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos (30 days, eVisa / Visa on arrival)
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon (1 month, free visa on arrival, extendable for 2 additional months)
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal (90 days, Online Visa / Visa on arrival)
  // Visa required
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// DJ Passport holders (Djibouti)
// Source: https://en.wikipedia.org/wiki/Visa_requirements_for_Djiboutian_citizens
// As of April 2025, Djiboutian citizens had visa-free or visa on arrival access to 48 countries and territories
visaRequirements.DJ = {
  ...visaRequirements.DJ,
  // Visa not required
  BJ: VISA_TYPES.VISA_FREE, // Benin
  DM: VISA_TYPES.VISA_FREE, // Dominica (21 days)
  ET: VISA_TYPES.VISA_FREE, // Ethiopia (3 months)
  GM: VISA_TYPES.VISA_FREE, // Gambia
  HT: VISA_TYPES.VISA_FREE, // Haiti (3 months)
  FM: VISA_TYPES.VISA_FREE, // Micronesia (30 days)
  PH: VISA_TYPES.VISA_FREE, // Philippines (30 days)
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines (1 month)
  SN: VISA_TYPES.VISA_FREE, // Senegal (90 days)
  SG: VISA_TYPES.VISA_FREE, // Singapore (30 days)
  TZ: VISA_TYPES.VISA_FREE, // Tanzania
  // Visa on arrival
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh (30 days)
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde (3 months, visa on arrival at specific airports, requirement to register online 5 days before arrival)
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros (45 days)
  GH: VISA_TYPES.VISA_ON_ARRIVAL, // Ghana (30 days)
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau (90 days)
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives (30 days)
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius (60 days)
  MZ: VISA_TYPES.VISA_ON_ARRIVAL, // Mozambique (30 days, eVisa / Visa on arrival)
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia (90 days, eVisa/Visa on arrival)
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal (90 days, eVisa / Visa on arrival)
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua (30 days)
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau (30 days)
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda (30 days, eVisa / Visa on arrival)
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa (60 days, Visitor's Permit on arrival)
  SC: VISA_TYPES.VISA_ON_ARRIVAL, // Seychelles (3 months, Visitor's Permit on arrival)
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka (30 days, ETA / Visa on arrival, Electronic Travel Authorization can also be obtained on arrival)
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste (30 days)
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu (1 month)
  UG: VISA_TYPES.VISA_ON_ARRIVAL, // Uganda (3 months, eVisa / Visa on arrival)
  ZM: VISA_TYPES.VISA_ON_ARRIVAL, // Zambia (90 days, eVisa / Visa on arrival)
  // eVisa
  AL: VISA_TYPES.E_VISA, // Albania (90 days, visa not required for holders of valid multiple-entry Schengen, UK or US visa)
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda (90 days)
  AZ: VISA_TYPES.E_VISA, // Azerbaijan (30 days)
  BS: VISA_TYPES.E_VISA, // Bahamas (90 days)
  BH: VISA_TYPES.E_VISA, // Bahrain (14 days)
  BT: VISA_TYPES.E_VISA, // Bhutan (90 days, visa fee is 40 USD per person)
  BO: VISA_TYPES.E_VISA, // Bolivia (90 days, eVisa / Visa on arrival)
  BW: VISA_TYPES.E_VISA, // Botswana (90 days)
  BF: VISA_TYPES.E_VISA, // Burkina Faso (1 month)
  KH: VISA_TYPES.E_VISA, // Cambodia (30 days, eVisa / Visa on arrival)
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad (90 days)
  CO: VISA_TYPES.E_VISA, // Colombia (90 days, may apply online)
  CD: VISA_TYPES.E_VISA, // Democratic Republic of the Congo (90 days)
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire (90 days, e-Visa holders must arrive via Port Bouet Airport)
  CU: VISA_TYPES.E_VISA, // Cuba (90 days)
  SV: VISA_TYPES.E_VISA, // El Salvador (90 days)
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea (90 days)
  GA: VISA_TYPES.E_VISA, // Gabon (90 days, electronic visa holders must arrive via Libreville International Airport)
  GE: VISA_TYPES.E_VISA, // Georgia (30 days)
  GN: VISA_TYPES.E_VISA, // Guinea (90 days)
  IN: VISA_TYPES.E_VISA, // India (60 days, e-Visa holders must arrive via 32 designated airports or 5 designated seaports)
  IR: VISA_TYPES.E_VISA, // Iran (30 days, eVisa/Visa on arrival)
  IQ: VISA_TYPES.E_VISA, // Iraq (30 days)
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KE: VISA_TYPES.E_VISA, // Kenya (Electronic Travel Authorisation, 90 days, eTA fee is USD 32.50)
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LA: VISA_TYPES.E_VISA, // Laos (30 days, eVisa / Visa on arrival)
  LS: VISA_TYPES.E_VISA, // Lesotho
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MG: VISA_TYPES.E_VISA, // Madagascar (90 days, eVisa / Visa on arrival)
  MW: VISA_TYPES.E_VISA, // Malawi (30 days)
  MY: VISA_TYPES.E_VISA, // Malaysia (14 days)
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova (visa not required if holding a valid visa/residence permit from EU/Schengen, Canada, Ireland, UK, US)
  MN: VISA_TYPES.E_VISA, // Mongolia (30 days)
  MM: VISA_TYPES.E_VISA, // Myanmar
  NG: VISA_TYPES.E_VISA, // Nigeria (90 days)
  PK: VISA_TYPES.E_VISA, // Pakistan (online visa eligible)
  PG: VISA_TYPES.E_VISA, // Papua New Guinea (60 days, may apply for an e-visa under the type of "Tourist - Own Itinerary")
  QA: VISA_TYPES.E_VISA, // Qatar
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe (15 days)
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia (30 days)
  SS: VISA_TYPES.E_VISA, // South Sudan (obtainable online, printed visa authorization must be presented at the time of travel)
  SR: VISA_TYPES.E_VISA, // Suriname
  SY: VISA_TYPES.E_VISA, // Syria
  TJ: VISA_TYPES.E_VISA, // Tajikistan (45 days)
  TH: VISA_TYPES.E_VISA, // Thailand
  TG: VISA_TYPES.E_VISA, // Togo (15 days)
  TT: VISA_TYPES.E_VISA, // Trinidad and Tobago
  AE: VISA_TYPES.E_VISA, // United Arab Emirates
  VN: VISA_TYPES.E_VISA, // Vietnam (visa free for 30 days when visiting Phú Quốc)
  ZW: VISA_TYPES.E_VISA, // Zimbabwe
  // Visa required
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra
  AO: VISA_TYPES.VISA_REQUIRED, // Angola
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina (AVE available for holders of valid US visa)
  AM: VISA_TYPES.VISA_REQUIRED, // Armenia
  AU: VISA_TYPES.VISA_REQUIRED, // Australia (may apply online - Online Visitor e600 visa)
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  BB: VISA_TYPES.VISA_REQUIRED, // Barbados
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
  CZ: VISA_TYPES.VISA_REQUIRED, // Czech Republic
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  DO: VISA_TYPES.VISA_REQUIRED, // Dominican Republic (visa not required for holders of valid visa or residence permit of Schengen, Canada, Cyprus, Ireland, UK or US)
  EC: VISA_TYPES.VISA_FREE, // Ecuador (90 days)
  EG: VISA_TYPES.VISA_REQUIRED, // Egypt
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FJ: VISA_TYPES.VISA_REQUIRED, // Fiji
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France
  GD: VISA_TYPES.VISA_REQUIRED, // Grenada
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala
  GY: VISA_TYPES.VISA_REQUIRED, // Guyana
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras (visa not required if holding a valid visa for at least 6 months issued by Canada, US or Schengen Area Member State)
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IL: VISA_TYPES.VISA_REQUIRED, // Israel
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  JM: VISA_TYPES.VISA_REQUIRED, // Jamaica
  JP: VISA_TYPES.VISA_REQUIRED, // Japan (eligible for e-Visa if residing in specific countries)
  JO: VISA_TYPES.VISA_REQUIRED, // Jordan
  KI: VISA_TYPES.VISA_REQUIRED, // Kiribati
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  KR: VISA_TYPES.VISA_REQUIRED, // South Korea (may apply online)
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait (e-Visa can be obtained for holders of a Residence Permit issued by a GCC member state)
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico (visa not required for holders of valid visa of Canada, US, UK or Schengen State)
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro (visa not required for holders of valid Australia, Japan, Canada, New Zealand, Ireland, US, UK or Schengen Visa)
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco (may apply for e-Visa if holding a valid visa or residency document from specific countries)
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia (visa not required for stays up to 15 days if holding a valid multiple entry visa of Canada, US, UK or Schengen Area member state)
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NL: VISA_TYPES.VISA_REQUIRED, // Netherlands
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PA: VISA_TYPES.VISA_REQUIRED, // Panama
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  RU: VISA_TYPES.VISA_REQUIRED, // Russia
  LC: VISA_TYPES.VISA_ON_ARRIVAL, // Saint Lucia (6 weeks, visa on arrival)
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia (tourist visa on arrival for holders of valid multiple entry visa from US, UK or Schengen area)
  RS: VISA_TYPES.VISA_REQUIRED, // Serbia
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
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TR: VISA_TYPES.VISA_REQUIRED, // Turkey
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  UA: VISA_TYPES.VISA_REQUIRED, // Ukraine
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay
  UZ: VISA_TYPES.VISA_REQUIRED, // Uzbekistan
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  VU: VISA_TYPES.VISA_REQUIRED, // Vanuatu
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// DM Passport holders (Dominica)
// Source: https://en.wikipedia.org/wiki/Visa_requirements_for_Dominica_citizens
// As of 2026, Dominica citizens had visa-free or visa on arrival access (including eTAs) to 145 countries and territories, ranking the Dominican passport 29th in the world
visaRequirements.DM = {
  ...visaRequirements.DM,
  // Visa not required
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda (Freedom of movement for OECS states; ID card valid)
  AR: VISA_TYPES.VISA_FREE, // Argentina (90 days)
  AT: VISA_TYPES.VISA_FREE, // Austria (90 days within any 180 day period in the Schengen Area)
  BS: VISA_TYPES.VISA_FREE, // Bahamas (3 months)
  BB: VISA_TYPES.VISA_FREE, // Barbados (180 days, Holders of Caricom Certificate of Skills can stay indefinitely)
  BY: VISA_TYPES.VISA_FREE, // Belarus (30 days, must arrive and depart via Minsk International Airport)
  BE: VISA_TYPES.VISA_FREE, // Belgium (90 days within any 180 day period in the Schengen Area)
  BZ: VISA_TYPES.VISA_FREE, // Belize (6 months, Holders of Caricom Certificate of Skills can stay indefinitely)
  BJ: VISA_TYPES.VISA_FREE, // Benin (90 days, must have an international vaccination certificate)
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina (90 days)
  BW: VISA_TYPES.VISA_FREE, // Botswana (90 days within any year period)
  BR: VISA_TYPES.VISA_FREE, // Brazil (90 days within any 180 day period)
  BG: VISA_TYPES.VISA_FREE, // Bulgaria (90 days within any 180 day period in the Schengen Area)
  CN: VISA_TYPES.VISA_FREE, // China (30 days, visa-free agreement signed with China in effect from 19 Sep 2022)
  CO: VISA_TYPES.VISA_FREE, // Colombia (90 days, extendable up to 180-days stay within a one-year period)
  CR: VISA_TYPES.VISA_FREE, // Costa Rica (30 days)
  HR: VISA_TYPES.VISA_FREE, // Croatia (90 days within any 180 day period in the Schengen Area)
  CU: VISA_TYPES.VISA_FREE, // Cuba (28 days)
  CY: VISA_TYPES.VISA_FREE, // Cyprus (90 days within any 180 day period)
  CZ: VISA_TYPES.VISA_FREE, // Czech Republic (90 days within any 180 day period in the Schengen Area)
  DK: VISA_TYPES.VISA_FREE, // Denmark (90 days within any 180 day period in the Schengen Area)
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic (90 days)
  EC: VISA_TYPES.VISA_FREE, // Ecuador (90 days)
  EE: VISA_TYPES.VISA_FREE, // Estonia (90 days within any 180 day period in the Schengen Area)
  SZ: VISA_TYPES.VISA_FREE, // Eswatini (30 days)
  FJ: VISA_TYPES.VISA_FREE, // Fiji (4 months)
  FI: VISA_TYPES.VISA_FREE, // Finland (90 days within any 180 day period in the Schengen Area)
  FR: VISA_TYPES.VISA_FREE, // France (90 days within any 180 day period in the Schengen Area)
  GM: VISA_TYPES.VISA_FREE, // Gambia (90 days)
  GE: VISA_TYPES.VISA_FREE, // Georgia (90 days, 90 days per 180 days period)
  DE: VISA_TYPES.VISA_FREE, // Germany (90 days within any 180 day period in the Schengen Area)
  GH: VISA_TYPES.VISA_FREE, // Ghana (60 days, may transit without a visa or enter without a visa for up to 60 days per entry for business, tourism or family visits)
  GD: VISA_TYPES.VISA_FREE, // Grenada (Freedom of movement for OECS states; ID card valid)
  GR: VISA_TYPES.VISA_FREE, // Greece (90 days within any 180 day period in the Schengen Area)
  GY: VISA_TYPES.VISA_FREE, // Guyana (6 months, Holders of Caricom Certificate of Skills can stay indefinitely)
  HT: VISA_TYPES.VISA_FREE, // Haiti (3 months)
  HU: VISA_TYPES.VISA_FREE, // Hungary (90 days within any 180 day period in the Schengen Area)
  IS: VISA_TYPES.VISA_FREE, // Iceland (90 days within any 180 day period in the Schengen Area)
  IT: VISA_TYPES.VISA_FREE, // Italy (90 days within any 180 day period in the Schengen Area)
  JM: VISA_TYPES.VISA_FREE, // Jamaica (6 months, Holders of Caricom Certificate of Skills can stay indefinitely)
  KE: VISA_TYPES.VISA_FREE, // Kenya (90 days)
  KI: VISA_TYPES.VISA_FREE, // Kiribati (90 days)
  LV: VISA_TYPES.VISA_FREE, // Latvia (90 days within any 180 day period in the Schengen Area)
  LS: VISA_TYPES.VISA_FREE, // Lesotho (90 days)
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein (90 days within any 180 day period in the Schengen Area)
  LT: VISA_TYPES.VISA_FREE, // Lithuania (90 days within any 180 day period in the Schengen Area)
  LU: VISA_TYPES.VISA_FREE, // Luxembourg (90 days within any 180 day period in the Schengen Area)
  MW: VISA_TYPES.VISA_FREE, // Malawi (90 days)
  MY: VISA_TYPES.VISA_FREE, // Malaysia (30 days)
  MU: VISA_TYPES.VISA_FREE, // Mauritius (180 days per calendar for tourism, 120 days per calendar for business)
  FM: VISA_TYPES.VISA_FREE, // Micronesia (30 days)
  MD: VISA_TYPES.VISA_FREE, // Moldova (90 days within any 180 day period)
  MC: VISA_TYPES.VISA_FREE, // Monaco
  ME: VISA_TYPES.VISA_FREE, // Montenegro (90 days)
  NL: VISA_TYPES.VISA_FREE, // Netherlands (90 days within any 180 day period in the Schengen Area)
  NO: VISA_TYPES.VISA_FREE, // Norway (90 days within any 180 day period in the Schengen Area)
  PA: VISA_TYPES.VISA_FREE, // Panama (90 days)
  PH: VISA_TYPES.VISA_FREE, // Philippines (30 days)
  PL: VISA_TYPES.VISA_FREE, // Poland (90 days within any 180 day period in the Schengen Area)
  PT: VISA_TYPES.VISA_FREE, // Portugal (90 days within any 180 day period in the Schengen Area)
  RO: VISA_TYPES.VISA_FREE, // Romania (90 days within any 180 day period in the Schengen Area)
  RU: VISA_TYPES.VISA_FREE, // Russia (90 days within any 180 day period)
  RW: VISA_TYPES.VISA_FREE, // Rwanda (30 days)
  KN: VISA_TYPES.VISA_FREE, // Saint Kitts and Nevis (Freedom of movement for OECS states; ID card valid)
  LC: VISA_TYPES.VISA_FREE, // Saint Lucia (Freedom of movement for OECS states; ID card valid)
  VC: VISA_TYPES.VISA_FREE, // Saint Vincent and the Grenadines (Freedom of movement for OECS states; ID card valid)
  SM: VISA_TYPES.VISA_FREE, // San Marino
  RS: VISA_TYPES.VISA_FREE, // Serbia (90 days within any 180 day period)
  SG: VISA_TYPES.VISA_FREE, // Singapore (30 days)
  SK: VISA_TYPES.VISA_FREE, // Slovakia (90 days within any 180 day period in the Schengen Area)
  SI: VISA_TYPES.VISA_FREE, // Slovenia (90 days within any 180 day period in the Schengen Area)
  ZA: VISA_TYPES.VISA_FREE, // South Africa
  ES: VISA_TYPES.VISA_FREE, // Spain (90 days within any 180 day period in the Schengen Area)
  SE: VISA_TYPES.VISA_FREE, // Sweden (90 days within any 180 day period in the Schengen Area)
  CH: VISA_TYPES.VISA_FREE, // Switzerland (90 days within any 180 day period in the Schengen Area)
  TZ: VISA_TYPES.VISA_FREE, // Tanzania (90 days)
  TH: VISA_TYPES.VISA_FREE, // Thailand (60 days)
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan (90 days)
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago (6 months, Holders of Caricom Certificate of Skills can stay indefinitely)
  TN: VISA_TYPES.VISA_FREE, // Tunisia
  UA: VISA_TYPES.VISA_FREE, // Ukraine (90 days within any 180 day period)
  UY: VISA_TYPES.VISA_FREE, // Uruguay (90 days)
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan (30 days)
  VA: VISA_TYPES.VISA_FREE, // Vatican City (90 days, open borders but de facto follows Italian visa policy)
  VE: VISA_TYPES.VISA_FREE, // Venezuela (90 days)
  VU: VISA_TYPES.VISA_FREE, // Vanuatu (120 days)
  ZM: VISA_TYPES.VISA_FREE, // Zambia (90 days as tourists or 30 days for business)
  // ETA / Electronic Travel Authorization
  IL: VISA_TYPES.ETA, // Israel (3 months, Electronic Travel Authorization, Non-Ordinary passports require a visa)
  KR: VISA_TYPES.ETA, // South Korea (90 days, Korean electronic travel authorization for 2 years)
  // Visa on arrival
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh (30 days, not available at all entry points)
  BO: VISA_TYPES.VISA_ON_ARRIVAL, // Bolivia (90 days)
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde (not available at all entry points, requirement to register online 5 days before arrival, also pay the airport security fee of CVE 3400 either online or on arrival)
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros (45 days)
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt (30 days, on-arrival visa costs 25 USD for Single entry visa (Tourism))
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau (90 days)
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran (30 days, eVisa/Visa on arrival, arriving at Kish (KIH) or Qeshm (GSM) do not need a visa for a maximum of 14 days)
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan (30 days, eVisa/Visa on arrival, conditions apply, not available at all entry points)
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives (30 days)
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua (90 days)
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau (30 days)
  PG: VISA_TYPES.VISA_ON_ARRIVAL, // Papua New Guinea (30 days, Easy Visitor Permit)
  WS: VISA_TYPES.VISA_ON_ARRIVAL, // Samoa (60 days, Entry Permit on arrival)
  SC: VISA_TYPES.VISA_ON_ARRIVAL, // Seychelles (3 months, Visitor's Permit on arrival, application submitted up to 30 days before travel)
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone (eVisa / Visa on arrival)
  SB: VISA_TYPES.VISA_ON_ARRIVAL, // Solomon Islands (3 months, Free visa on arrival)
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka (30 days, Electronic Travel Authorization/Visa on arrival, the standard visitor visa allows a stay of 60 days within any 6-month period)
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste (30 days, not available at all entry points)
  TO: VISA_TYPES.VISA_ON_ARRIVAL, // Tonga (31 days)
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu (1 month)
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe (30 days, eVisa /Visa on Arrival)
  // eVisa
  AL: VISA_TYPES.E_VISA, // Albania (eVisa, visa not required for holders of a multiple entry visa issued by the US, if having used the visa to enter the US at least once, for a maximum stay of 90 days)
  AO: VISA_TYPES.E_VISA, // Angola
  AM: VISA_TYPES.E_VISA, // Armenia (120 days, eVisa / Visa on arrival, obtainable on arrival at Zvartnots International Airport or prior to travel online)
  BH: VISA_TYPES.E_VISA, // Bahrain
  BT: VISA_TYPES.E_VISA, // Bhutan (applicants can independently obtain an e-Visa whose duration of stay is 90 days, visa fee is 40 USD per person)
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  KH: VISA_TYPES.E_VISA, // Cambodia (30 days, e-Visa/Visa on Arrival, visa obtainable online)
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad
  CL: VISA_TYPES.E_VISA, // Chile (visa obtainable online)
  CD: VISA_TYPES.E_VISA, // Democratic Republic of the Congo (7 days)
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire (90 days, e-Visa holders must arrive via Port Bouet Airport)
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea (must arrive via Malabo International Airport, processing fee 75 USD)
  ET: VISA_TYPES.E_VISA, // Ethiopia (up to 90 days, eVisa holders must arrive via Addis Ababa Bole International Airport)
  GA: VISA_TYPES.E_VISA, // Gabon (electronic visa holders must arrive via Libreville International Airport)
  GN: VISA_TYPES.E_VISA, // Guinea (90 days)
  IN: VISA_TYPES.E_VISA, // India (60 days, e-Visa holders must arrive via 32 designated airports or 5 designated seaports, an Indian e-Tourist Visa may only be obtained twice within 1 calendar year)
  IQ: VISA_TYPES.E_VISA, // Iraq
  KZ: VISA_TYPES.E_VISA, // Kazakhstan
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan (electronic visa holders must arrive via Manas International Airport or Osh Airport or through land crossings with China, Kazakhstan, Tajikistan and Uzbekistan)
  LA: VISA_TYPES.E_VISA, // Laos (30 days, eVisa / Visa on arrival, 18 of the 33 border crossings are only open to regular visa holders)
  LR: VISA_TYPES.E_VISA, // Liberia
  LY: VISA_TYPES.E_VISA, // Libya
  MG: VISA_TYPES.E_VISA, // Madagascar (90 days, eVisa / Visa on arrival)
  MR: VISA_TYPES.E_VISA, // Mauritania
  MN: VISA_TYPES.E_VISA, // Mongolia
  MZ: VISA_TYPES.E_VISA, // Mozambique (30 days, eVisa/Visa on arrival, conditions apply)
  NA: VISA_TYPES.E_VISA, // Namibia
  NP: VISA_TYPES.E_VISA, // Nepal (90 days, visa on arrival /eVisa)
  NG: VISA_TYPES.E_VISA, // Nigeria
  OM: VISA_TYPES.E_VISA, // Oman (holders of a GCC state resident permit can get a 28 days visa on arrival that costs 5 Omani Riyals)
  PK: VISA_TYPES.E_VISA, // Pakistan (90 days, issued free of charge as of August 2024)
  QA: VISA_TYPES.E_VISA, // Qatar (90 days)
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe (visa is obtained online)
  SO: VISA_TYPES.E_VISA, // Somalia (30 days)
  SS: VISA_TYPES.E_VISA, // South Sudan (obtainable online, printed visa authorization must be presented at the time of travel)
  SY: VISA_TYPES.E_VISA, // Syria
  TG: VISA_TYPES.E_VISA, // Togo (15 days)
  AE: VISA_TYPES.E_VISA, // United Arab Emirates (may obtain a visa online through Smart Service)
  UG: VISA_TYPES.E_VISA, // Uganda (determined at the port of entry, may apply online)
  VN: VISA_TYPES.E_VISA, // Vietnam (90 days, Phú Quốc without a visa for up to 30 days)
  // Visa required
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan (visa isn't required if born in Afghanistan or their parent is a national of Afghanistan or was born in Afghanistan)
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria (tourists to cities in the south of Algeria can obtain a visa upon arrival for a maximum of 30 days, but must have a return/onward ticket and a hotel reservation confirmation)
  AU: VISA_TYPES.VISA_REQUIRED, // Australia (may apply online - Online Visitor e600 visa)
  AZ: VISA_TYPES.VISA_REQUIRED, // Azerbaijan (holding a residence visa issued by the United Arab Emirates may obtain a 30-day tourist visa on arrival in Azerbaijan)
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  CA: VISA_TYPES.VISA_REQUIRED, // Canada (visa not required for US permanent resident card Holders)
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  SV: VISA_TYPES.VISA_REQUIRED, // El Salvador (visa not required for Holders of a valid visa issued by Canada, the USA or a Schengen Member State)
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala (visa not required for a max. stay of 90 days for holders of a valid visa issued by Canada, the USA or a Schengen Member)
  HN: VISA_TYPES.VISA_REQUIRED, // Honduras (visa not required for holders of a visa valid for at least 6 months on arrival, issued by Canada, the USA or a Schengen Member State)
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  JP: VISA_TYPES.VISA_REQUIRED, // Japan (holders of a residence permit in Australia, Brazil, Cambodia, Canada, India, Saudi Arabia, Singapore, South Africa, Taiwan, United Arab Emirates, United Kingdom, United States can apply for a single entry e-visa individually)
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait (e-Visa can be obtained for holders of a Residence Permit issued by a GCC member state)
  LB: VISA_TYPES.VISA_REQUIRED, // Lebanon (holding a residence permit issued by a GCC Member State on which the profession of businessmen, managers, company owners, doctors, engineers and lawyers is stated, can obtain a visa upon arrival at Beirut (BEY) Beirut International Airport)
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico (visa not required for holders of a visa issued by Canada, Japan, United States, United Kingdom or a Schengen Member State for a maximum stay of 180 days)
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MA: VISA_TYPES.VISA_REQUIRED, // Morocco (may apply for an e-Visa if holding a valid visa or a residency document issued by one of the following countries: Schengen Area, Australia, Canada, Ireland, New Zealand, United Kingdom, United States a residency document issued by Cyprus, Japan, United Arab Emirates)
  MM: VISA_TYPES.VISA_REQUIRED, // Myanmar
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru (visa issuance: Passengers with an entry permit letter (visa letter) issued by Nauru, applications can be submitted via email before departure)
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand (holders of an Australian Permanent Resident Visa or Resident Return Visa may be granted a New Zealand Resident Visa on arrival permitting indefinite stay)
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia (visa not required for holders of a visa issued by Canada or USA, the visa must be valid for at least 5 days beyond the period of intended stay in North Macedonia, visa exempt for a maximum stay of 15 days)
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  PY: VISA_TYPES.VISA_REQUIRED, // Paraguay (may apply online)
  PE: VISA_TYPES.VISA_REQUIRED, // Peru
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia (residents of GCC countries can apply for Saudi e-Visas online and residents of the United States, United Kingdom and European Union may apply for a visa on arrival)
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan (can obtain a visa upon arrival if married to a national of Sudan or prove that are of Sudanese origins from the father's side)
  TW: VISA_TYPES.VISA_REQUIRED, // Taiwan (eVisa)
  TR: VISA_TYPES.VISA_REQUIRED, // Turkey
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan (eligible for a visa on arrival for a maximum stay of 10 days if having a letter of invitation issued by a company registered in Turkmenistan and approved by the Foreign Ministry)
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen (Dominican Citizens of Yemeni origin with a Yemeni identification document or proof of Yemeni origin do not need a visa)
};

// DO Passport holders (Dominican Republic)
// Source: https://en.wikipedia.org/wiki/Visa_requirements_for_Dominican_Republic_citizens
// As of January 2026, holders of a Dominican Republic passport could travel to only 72 countries and territories without a travel visa or with a visa on arrival, ranking the Dominican Republic passport 65th (tied with eSwatini and Morocco) in terms of travel freedom
visaRequirements.DO = {
  ...visaRequirements.DO,
  // Visa not required
  AO: VISA_TYPES.VISA_FREE, // Angola (30 days)
  BO: VISA_TYPES.VISA_FREE, // Bolivia (90 days)
  BW: VISA_TYPES.VISA_FREE, // Botswana (90 days, 90 days within any year period)
  BR: VISA_TYPES.VISA_FREE, // Brazil (60 days)
  CO: VISA_TYPES.VISA_FREE, // Colombia (90 days, extendable up to 180-days stay within a one-year period)
  EC: VISA_TYPES.VISA_FREE, // Ecuador (90 days)
  SV: VISA_TYPES.VISA_FREE, // El Salvador (6 months)
  GM: VISA_TYPES.VISA_FREE, // Gambia (Dominicans will need a clearance to enter into Gambia, must obtain an entry clearance from the Gambian Immigration prior to travel)
  GE: VISA_TYPES.VISA_FREE, // Georgia (1 year)
  GD: VISA_TYPES.VISA_FREE, // Grenada (90 days)
  GY: VISA_TYPES.VISA_FREE, // Guyana (30 days)
  HN: VISA_TYPES.VISA_FREE, // Honduras (30 days)
  JM: VISA_TYPES.VISA_FREE, // Jamaica (180 days, since March 4, 2025)
  JP: VISA_TYPES.VISA_FREE, // Japan (90 days)
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan (60 days, National Congress of The Dominican Republic Approves 60 days visa free agreement with Kazakhstan)
  KI: VISA_TYPES.VISA_FREE, // Kiribati (90 days)
  KR: VISA_TYPES.VISA_FREE, // South Korea (90 days, visitor must obtain a K-ETA before their departure to South Korea)
  MY: VISA_TYPES.VISA_FREE, // Malaysia (30 days)
  FM: VISA_TYPES.VISA_FREE, // Micronesia (30 days)
  MA: VISA_TYPES.VISA_FREE, // Morocco (60 days)
  PY: VISA_TYPES.VISA_FREE, // Paraguay (60 days)
  PE: VISA_TYPES.VISA_FREE, // Peru (60 days)
  PH: VISA_TYPES.VISA_FREE, // Philippines (30 days)
  QA: VISA_TYPES.VISA_FREE, // Qatar (90 days)
  RU: VISA_TYPES.VISA_FREE, // Russia (60 days, 60 days within any 180 day period)
  WS: VISA_TYPES.VISA_FREE, // Samoa (60 days)
  SG: VISA_TYPES.VISA_FREE, // Singapore (30 days)
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan (30 days)
  TH: VISA_TYPES.VISA_FREE, // Thailand (60 days)
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago (90 days)
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan (30 days)
  ZM: VISA_TYPES.VISA_FREE, // Zambia (90 days, visa free starting on January 1, 2025)
  // ETA / Electronic Travel Authorization
  IL: VISA_TYPES.ETA, // Israel (90 days, Electronic Travel Authorization)
  KE: VISA_TYPES.ETA, // Kenya (90 days, Electronic Travel Authorisation, applications can be submitted up to 90 days prior to travel and must be submitted at least 3 days in advance, eTA fee is USD 32.50)
  // Visa on arrival
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh (30 days, not available at all entry points)
  BJ: VISA_TYPES.VISA_ON_ARRIVAL, // Benin (30 days / 8 days, eVisa / Visa on arrival, must have an international vaccination certificate)
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi (30 days, visa on arrival / eVisa)
  CV: VISA_TYPES.VISA_ON_ARRIVAL, // Cape Verde (not available at all entry points)
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt (15 days)
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau (90 days, eVisa / Visa on arrival)
  IR: VISA_TYPES.VISA_ON_ARRIVAL, // Iran (30 days, eVisa/Visa on arrival)
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan (30 days, eVisa/Visa on arrival, conditions apply, not available at all entry points)
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon (1 month, free visa on arrival, 1 month extendable for 2 additional months, granted free of charge at Beirut International Airport or any other port of entry if there is no Israeli visa or seal)
  MV: VISA_TYPES.VISA_ON_ARRIVAL, // Maldives (30 days, free visa on arrival)
  MU: VISA_TYPES.VISA_ON_ARRIVAL, // Mauritius (60 days)
  NI: VISA_TYPES.VISA_ON_ARRIVAL, // Nicaragua (90 days)
  PW: VISA_TYPES.VISA_ON_ARRIVAL, // Palau (30 days, free visa on arrival)
  SN: VISA_TYPES.VISA_ON_ARRIVAL, // Senegal (90 days)
  SC: VISA_TYPES.VISA_ON_ARRIVAL, // Seychelles (3 months, free Visitor's Permit on arrival)
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka (30 days, Electronic Travel Authorization/Visa on arrival, 30 days extendable to 6 months)
  TL: VISA_TYPES.VISA_ON_ARRIVAL, // Timor-Leste (30 days, not available at all entry points)
  TV: VISA_TYPES.VISA_ON_ARRIVAL, // Tuvalu (1 month)
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe (30 days, eVisa / Visa on arrival)
  // eVisa
  AL: VISA_TYPES.E_VISA, // Albania (eVisa, visa is not required for holders of Schengen, US or UK visa or residence permits, max stay 90 days)
  AG: VISA_TYPES.E_VISA, // Antigua and Barbuda (visa waiver for passengers with valid visas issued by Canada, USA, UK, or Schengen Member State, visa fee: USD-100, for max. of 30 days)
  AM: VISA_TYPES.E_VISA, // Armenia (120 days, eVisa / Visa on arrival, obtainable on arrival at Zvartnots International Airport or prior to travel online)
  BS: VISA_TYPES.E_VISA, // Bahamas (Bahamas tourist visa is not required for US or Canada Resident card holder for a stay up to 30 days)
  BH: VISA_TYPES.E_VISA, // Bahrain
  BT: VISA_TYPES.E_VISA, // Bhutan (90 days, visa fee is 40 USD per person and visa application may be processed within 5 business days)
  BF: VISA_TYPES.E_VISA, // Burkina Faso
  KH: VISA_TYPES.E_VISA, // Cambodia (30 days, eVisa / Visa on arrival)
  CM: VISA_TYPES.E_VISA, // Cameroon
  TD: VISA_TYPES.E_VISA, // Chad (90 days)
  CD: VISA_TYPES.E_VISA, // Democratic Republic of the Congo (90 days)
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire (90 days)
  CU: VISA_TYPES.E_VISA, // Cuba (90 days)
  DJ: VISA_TYPES.E_VISA, // Djibouti (31 days)
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea
  ET: VISA_TYPES.E_VISA, // Ethiopia (up to 90 days, eVisa holders must arrive via Addis Ababa Bole International Airport)
  GA: VISA_TYPES.E_VISA, // Gabon (electronic visa holders must arrive via Libreville International Airport)
  GN: VISA_TYPES.E_VISA, // Guinea (90 days)
  IN: VISA_TYPES.E_VISA, // India (60 days, e-Visa holders must arrive via 32 designated airports or 5 designated seaports, an Indian e-Tourist Visa may only be obtained twice within 1 calendar year)
  IQ: VISA_TYPES.E_VISA, // Iraq (30 days)
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan (electronic visa holders must arrive via Manas International Airport or Osh Airport or through land crossings with China, Kazakhstan, Tajikistan and Uzbekistan)
  LA: VISA_TYPES.E_VISA, // Laos (30 days, eVisa / Visa on arrival, 18 of the 33 border crossings are only open to regular visa holders)
  LS: VISA_TYPES.E_VISA, // Lesotho (14 days)
  LR: VISA_TYPES.E_VISA, // Liberia (30 days)
  LY: VISA_TYPES.E_VISA, // Libya (30 days)
  MG: VISA_TYPES.E_VISA, // Madagascar (90 days, eVisa / Visa on arrival)
  MW: VISA_TYPES.E_VISA, // Malawi (30 days, eVisa / Visa on arrival)
  MR: VISA_TYPES.E_VISA, // Mauritania
  MD: VISA_TYPES.E_VISA, // Moldova (visa waiver for passenger with a valid residence permit, a valid 'C'-type, or a valid 'D'-type visa issued by a Schengen member state or Ireland)
  MZ: VISA_TYPES.E_VISA, // Mozambique (30 days, eVisa / Visa on arrival)
  NA: VISA_TYPES.E_VISA, // Namibia
  NP: VISA_TYPES.E_VISA, // Nepal (90 days, eVisa / Visa on arrival)
  NG: VISA_TYPES.E_VISA, // Nigeria (90 days)
  PK: VISA_TYPES.E_VISA, // Pakistan (online visa)
  PG: VISA_TYPES.E_VISA, // Papua New Guinea (60 days, may apply for an e-visa under the type of "Tourist – Own Itinerary")
  KN: VISA_TYPES.E_VISA, // Saint Kitts and Nevis
  ST: VISA_TYPES.E_VISA, // São Tomé and Príncipe
  SL: VISA_TYPES.E_VISA, // Sierra Leone
  SO: VISA_TYPES.E_VISA, // Somalia (30 days)
  SS: VISA_TYPES.E_VISA, // South Sudan (up to 6 months, obtainable online, printed visa authorization must be presented at the time of travel)
  SY: VISA_TYPES.E_VISA, // Syria
  TZ: VISA_TYPES.E_VISA, // Tanzania (3 months, eVisa / Visa on arrival)
  TG: VISA_TYPES.E_VISA, // Togo (15 days)
  TR: VISA_TYPES.E_VISA, // Turkey (90 days)
  UG: VISA_TYPES.E_VISA, // Uganda (determined at the port of entry, eVisa / Visa on arrival)
  UA: VISA_TYPES.E_VISA, // Ukraine (30 days)
  AE: VISA_TYPES.E_VISA, // United Arab Emirates (30 days, e-visas can be obtained, may apply also using 'Smart service', a 96-hour transit visa can be obtained on arrival at Dubai (DXB))
  VN: VISA_TYPES.E_VISA, // Vietnam (90 days, Phú Quốc without a visa for up to 30 days)
  // Visa required
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  AD: VISA_TYPES.VISA_REQUIRED, // Andorra (no border checkpoints in Andorra, but visitor must visit France or Spain before reach Andorra thus Schengen Visa is required)
  AR: VISA_TYPES.VISA_REQUIRED, // Argentina (visa waiver for passengers with a valid visa issued by the US, or Schengen Member State, visa fee: USD-60, for max. of 90 days, to be obtained online at the DNM Migraciones Argentina)
  AU: VISA_TYPES.VISA_REQUIRED, // Australia (may apply online - Online Visitor e600 visa)
  AT: VISA_TYPES.VISA_REQUIRED, // Austria
  AZ: VISA_TYPES.VISA_REQUIRED, // Azerbaijan (visa on arrival is available providing an official invitation letter)
  BB: VISA_TYPES.VISA_REQUIRED, // Barbados
  BY: VISA_TYPES.VISA_REQUIRED, // Belarus (visas are issued on arrival at the Minsk International Airport if the support documents were submitted not later than 3 business days before expected date of arrival)
  BE: VISA_TYPES.VISA_REQUIRED, // Belgium (transit without visa (TWOV) available)
  BZ: VISA_TYPES.VISA_REQUIRED, // Belize (visa waiver for passengers with multiple-entry valid visa or Permanent Resident Card issued by Canada, USA or Schengen Area, maximum for 30 days)
  BA: VISA_TYPES.VISA_REQUIRED, // Bosnia and Herzegovina (visa waiver for passengers with valid visa or resident permit issued by USA or Schengen Member State)
  BN: VISA_TYPES.VISA_REQUIRED, // Brunei
  BG: VISA_TYPES.VISA_REQUIRED, // Bulgaria
  CA: VISA_TYPES.VISA_REQUIRED, // Canada (visa not required for US permanent resident card Holders)
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic
  CL: VISA_TYPES.VISA_REQUIRED, // Chile (visa not required for max. stay of 90 days for holders of a valid visa issued by USA)
  CN: VISA_TYPES.VISA_REQUIRED, // China (pre-arranged visa on arrival is available)
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  CR: VISA_TYPES.VISA_REQUIRED, // Costa Rica (visa waiver for passengers with multiple-entry valid visa issued by Canada or USA, maximum for 30 days)
  HR: VISA_TYPES.VISA_REQUIRED, // Croatia
  CY: VISA_TYPES.VISA_REQUIRED, // Cyprus
  CZ: VISA_TYPES.VISA_REQUIRED, // Czech Republic
  DK: VISA_TYPES.VISA_REQUIRED, // Denmark
  DM: VISA_TYPES.VISA_REQUIRED, // Dominica (visa exemptions: Passengers with a visa issued by Canada, USA, United Kingdom, or a Schengen Member State for a maximum stay of 6 months)
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea
  EE: VISA_TYPES.VISA_REQUIRED, // Estonia
  SZ: VISA_TYPES.VISA_REQUIRED, // Eswatini
  FJ: VISA_TYPES.VISA_REQUIRED, // Fiji
  FI: VISA_TYPES.VISA_REQUIRED, // Finland
  FR: VISA_TYPES.VISA_REQUIRED, // France (transit without visa (TWOV) available)
  DE: VISA_TYPES.VISA_REQUIRED, // Germany
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana
  GR: VISA_TYPES.VISA_REQUIRED, // Greece
  GT: VISA_TYPES.VISA_REQUIRED, // Guatemala (visa requirement effective on 15 February 2023)
  HT: VISA_TYPES.VISA_REQUIRED, // Haiti (visa not required for max. stay of 3 Months for Holders of a valid visa issued by Canada, the USA or a Schengen Member State)
  HU: VISA_TYPES.VISA_REQUIRED, // Hungary
  IS: VISA_TYPES.VISA_REQUIRED, // Iceland
  ID: VISA_TYPES.VISA_REQUIRED, // Indonesia
  IE: VISA_TYPES.VISA_REQUIRED, // Ireland
  IT: VISA_TYPES.VISA_REQUIRED, // Italy
  KW: VISA_TYPES.VISA_REQUIRED, // Kuwait
  LV: VISA_TYPES.VISA_REQUIRED, // Latvia
  LI: VISA_TYPES.VISA_REQUIRED, // Liechtenstein
  LT: VISA_TYPES.VISA_REQUIRED, // Lithuania
  LU: VISA_TYPES.VISA_REQUIRED, // Luxembourg
  ML: VISA_TYPES.VISA_REQUIRED, // Mali
  MT: VISA_TYPES.VISA_REQUIRED, // Malta
  MH: VISA_TYPES.VISA_REQUIRED, // Marshall Islands
  MX: VISA_TYPES.VISA_REQUIRED, // Mexico (no visa required for those holding a valid visa or residence issued by the United States, Canada, Japan, Colombia, Chile, or Schengen)
  MC: VISA_TYPES.VISA_REQUIRED, // Monaco
  MN: VISA_TYPES.VISA_REQUIRED, // Mongolia (Dominican Republic and Mongolia Sign Visa Exemption Agreement, not in effect yet)
  ME: VISA_TYPES.VISA_REQUIRED, // Montenegro (visa waiver for passengers with a valid visa issued by Canada, USA, UK or a Schengen Member State for 30 days)
  MM: VISA_TYPES.VISA_REQUIRED, // Myanmar
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger
  NZ: VISA_TYPES.VISA_REQUIRED, // New Zealand (holders of an Australian Permanent Resident Visa or Resident Return Visa may be granted a New Zealand Resident Visa on arrival permitting indefinite stay)
  MK: VISA_TYPES.VISA_REQUIRED, // North Macedonia (visa is not required for holders of a valid US, UK, Canada or a Schengen member State visa, maximum for 15 days)
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  NO: VISA_TYPES.VISA_REQUIRED, // Norway
  OM: VISA_TYPES.VISA_REQUIRED, // Oman
  PA: VISA_TYPES.VISA_REQUIRED, // Panama (no visa required for holders of a valid US, Canada, Japan or Schengen Member State visa)
  PL: VISA_TYPES.VISA_REQUIRED, // Poland
  PT: VISA_TYPES.VISA_REQUIRED, // Portugal
  RO: VISA_TYPES.VISA_REQUIRED, // Romania
  RW: VISA_TYPES.E_VISA, // Rwanda (30 days, eVisa / Visa on arrival, may apply online, can also be entered on an East Africa tourist visa issued by Kenya or Uganda)
  LC: VISA_TYPES.VISA_REQUIRED, // Saint Lucia
  VC: VISA_TYPES.VISA_REQUIRED, // Saint Vincent and the Grenadines
  SM: VISA_TYPES.VISA_REQUIRED, // San Marino
  SA: VISA_TYPES.VISA_REQUIRED, // Saudi Arabia
  RS: VISA_TYPES.VISA_REQUIRED, // Serbia (visa not required for holders of Schengen, US or UK visa or residence permits, max stay 90 days)
  SK: VISA_TYPES.VISA_REQUIRED, // Slovakia
  SI: VISA_TYPES.VISA_REQUIRED, // Slovenia
  SB: VISA_TYPES.VISA_REQUIRED, // Solomon Islands (free Visitor's permit on arrival, 3 months)
  ZA: VISA_TYPES.VISA_REQUIRED, // South Africa
  ES: VISA_TYPES.VISA_REQUIRED, // Spain
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan
  SE: VISA_TYPES.VISA_REQUIRED, // Sweden
  CH: VISA_TYPES.VISA_REQUIRED, // Switzerland
  TN: VISA_TYPES.VISA_REQUIRED, // Tunisia
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan
  GB: VISA_TYPES.VISA_REQUIRED, // United Kingdom
  US: VISA_TYPES.VISA_REQUIRED, // United States
  UY: VISA_TYPES.VISA_REQUIRED, // Uruguay (visa not required for max. stay of 90 days for holders of a valid visa issued by USA or the United Kingdom)
  VA: VISA_TYPES.VISA_REQUIRED, // Vatican City (open borders but de facto follows Italian visa policy)
  VE: VISA_TYPES.VISA_REQUIRED, // Venezuela
  VU: VISA_TYPES.VISA_REQUIRED, // Vanuatu
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen
};

// NL Passport holders (Netherlands)
// Source: https://en.wikipedia.org/wiki/Visa_requirements_for_Dutch_citizens
// As of 2025, Dutch citizens had visa-free or visa on arrival access to 188 countries and territories, ranking the Dutch passport 4th in the world according to the Henley Passport Index
visaRequirements.NL = {
  ...visaRequirements.NL,
  // Visa not required (Freedom of movement in EU/EEA/Schengen)
  AD: VISA_TYPES.VISA_FREE, // Andorra
  AO: VISA_TYPES.VISA_FREE, // Angola (30 days, 30 days per trip, but no more than 90 days within any 1 calendar year for tourism purposes only, visitors must have a return/onward ticket and a hotel reservation confirmation, International Certificate of Vaccination required)
  AG: VISA_TYPES.VISA_FREE, // Antigua and Barbuda (6 months)
  AR: VISA_TYPES.VISA_FREE, // Argentina (90 days)
  AM: VISA_TYPES.VISA_FREE, // Armenia (180 days)
  AT: VISA_TYPES.VISA_FREE, // Austria (Freedom of movement, ID card valid)
  BS: VISA_TYPES.VISA_FREE, // Bahamas (8 months)
  BB: VISA_TYPES.VISA_FREE, // Barbados (3 months)
  BY: VISA_TYPES.VISA_FREE, // Belarus (30 days, visa-free until 31 December 2026)
  BE: VISA_TYPES.VISA_FREE, // Belgium (Freedom of movement, ID card valid)
  BZ: VISA_TYPES.VISA_FREE, // Belize (30 days)
  BO: VISA_TYPES.VISA_FREE, // Bolivia (90 days)
  BA: VISA_TYPES.VISA_FREE, // Bosnia and Herzegovina (90 days, 90 days within any 6-month period, ID card valid)
  BW: VISA_TYPES.VISA_FREE, // Botswana (90 days)
  BR: VISA_TYPES.VISA_FREE, // Brazil (90 days, 90 days within any 180 day period)
  BN: VISA_TYPES.VISA_FREE, // Brunei (90 days)
  BG: VISA_TYPES.VISA_FREE, // Bulgaria (Freedom of movement, ID card valid)
  CV: VISA_TYPES.VISA_FREE, // Cape Verde (30 days, airport security tax of CVE 3400 charged for all inbound international flights, online registration required, preferably at least 5 days before departure)
  CL: VISA_TYPES.VISA_FREE, // Chile (90 days)
  CN: VISA_TYPES.VISA_FREE, // China (30 days, visa-free from December 1, 2023 to December 31, 2026)
  CO: VISA_TYPES.VISA_FREE, // Colombia (90 days, extendable up to 180-days stay within a one-year period)
  CR: VISA_TYPES.VISA_FREE, // Costa Rica (90 days)
  HR: VISA_TYPES.VISA_FREE, // Croatia (Freedom of movement, ID card valid)
  CY: VISA_TYPES.VISA_FREE, // Cyprus (Freedom of movement, ID card valid)
  CZ: VISA_TYPES.VISA_FREE, // Czech Republic (Freedom of movement, ID card valid)
  DK: VISA_TYPES.VISA_FREE, // Denmark (Freedom of movement, ID card valid)
  DM: VISA_TYPES.VISA_FREE, // Dominica (90 days, 90 days within any 180 day period)
  DO: VISA_TYPES.VISA_FREE, // Dominican Republic (90 days, tourist card required)
  EC: VISA_TYPES.VISA_FREE, // Ecuador (90 days)
  SV: VISA_TYPES.VISA_FREE, // El Salvador (3 months)
  EE: VISA_TYPES.VISA_FREE, // Estonia (Freedom of movement, ID card valid)
  SZ: VISA_TYPES.VISA_FREE, // Eswatini (30 days)
  FJ: VISA_TYPES.VISA_FREE, // Fiji (4 months)
  FI: VISA_TYPES.VISA_FREE, // Finland (Freedom of movement, ID card valid)
  FR: VISA_TYPES.VISA_FREE, // France (Freedom of movement, ID card valid)
  GM: VISA_TYPES.VISA_FREE, // Gambia (90 days)
  GE: VISA_TYPES.VISA_FREE, // Georgia (1 year, ID card valid)
  DE: VISA_TYPES.VISA_FREE, // Germany (Freedom of movement, ID card valid)
  GR: VISA_TYPES.VISA_FREE, // Greece (Freedom of movement, ID card valid)
  GD: VISA_TYPES.VISA_FREE, // Grenada (3 months)
  GT: VISA_TYPES.VISA_FREE, // Guatemala (90 days)
  GY: VISA_TYPES.VISA_FREE, // Guyana (3 months)
  HT: VISA_TYPES.VISA_FREE, // Haiti (90 days, the Dutch government advises its citizens not to travel to Haiti due to the volatile situation in the country)
  HN: VISA_TYPES.VISA_FREE, // Honduras (3 months)
  HU: VISA_TYPES.VISA_FREE, // Hungary (Freedom of movement, ID card valid)
  IS: VISA_TYPES.VISA_FREE, // Iceland (Freedom of movement, ID card valid)
  IE: VISA_TYPES.VISA_FREE, // Ireland (Freedom of movement, ID card valid)
  IT: VISA_TYPES.VISA_FREE, // Italy (Freedom of movement, ID card valid)
  JM: VISA_TYPES.VISA_FREE, // Jamaica (90 days)
  JP: VISA_TYPES.VISA_FREE, // Japan (90 days)
  KZ: VISA_TYPES.VISA_FREE, // Kazakhstan (30 days)
  KI: VISA_TYPES.VISA_FREE, // Kiribati (90 days, 90 days within any 180 day period)
  XK: VISA_TYPES.VISA_FREE, // Kosovo (90 days, ID card valid)
  KG: VISA_TYPES.VISA_FREE, // Kyrgyzstan (60 days)
  LV: VISA_TYPES.VISA_FREE, // Latvia (Freedom of movement, ID card valid)
  LI: VISA_TYPES.VISA_FREE, // Liechtenstein (Freedom of movement, ID card valid)
  LT: VISA_TYPES.VISA_FREE, // Lithuania (Freedom of movement, ID card valid)
  LU: VISA_TYPES.VISA_FREE, // Luxembourg (Freedom of movement, ID card valid)
  MY: VISA_TYPES.VISA_FREE, // Malaysia (3 months)
  MV: VISA_TYPES.VISA_FREE, // Maldives (30 days, free visa on arrival)
  MH: VISA_TYPES.VISA_FREE, // Marshall Islands (90 days, 90 days within any 180 day period)
  MU: VISA_TYPES.VISA_FREE, // Mauritius (90 days)
  MX: VISA_TYPES.VISA_FREE, // Mexico (180 days)
  FM: VISA_TYPES.VISA_FREE, // Micronesia (90 days, 90 days within any 180 day period)
  MD: VISA_TYPES.VISA_FREE, // Moldova (90 days, 90 days within any 180 day period, ID card valid)
  MC: VISA_TYPES.VISA_FREE, // Monaco (ID card valid)
  MN: VISA_TYPES.VISA_FREE, // Mongolia (30 days, the Ministry of Foreign Affairs of Mongolia has exempted visas for 34 countries from January 2023 to December 2026)
  ME: VISA_TYPES.VISA_FREE, // Montenegro (90 days, ID card valid for 30 days)
  MA: VISA_TYPES.VISA_FREE, // Morocco (90 days)
  MZ: VISA_TYPES.VISA_FREE, // Mozambique (30 days, travelers must register on the e-Visa platform at least 48 hours prior to travel and pay a processing fee of 650 MT)
  NI: VISA_TYPES.VISA_FREE, // Nicaragua (90 days)
  NO: VISA_TYPES.VISA_FREE, // Norway (Freedom of movement, ID card valid)
  OM: VISA_TYPES.VISA_FREE, // Oman (14 days / 30 days, no need of visa for less than 14 days)
  PW: VISA_TYPES.VISA_FREE, // Palau (90 days, 90 days within any 180 day period)
  PA: VISA_TYPES.VISA_FREE, // Panama (90 days)
  PY: VISA_TYPES.VISA_FREE, // Paraguay (90 days)
  PE: VISA_TYPES.VISA_FREE, // Peru (90 days, 90 days within any 6-month period)
  PH: VISA_TYPES.VISA_FREE, // Philippines (30 days, a single or multiple entry eVisa for stays of up to 59 days is also available)
  PL: VISA_TYPES.VISA_FREE, // Poland (Freedom of movement, ID card valid)
  PT: VISA_TYPES.VISA_FREE, // Portugal (Freedom of movement, ID card valid)
  QA: VISA_TYPES.VISA_FREE, // Qatar (90 days)
  RO: VISA_TYPES.VISA_FREE, // Romania (Freedom of movement, ID card valid)
  WS: VISA_TYPES.VISA_FREE, // Samoa (90 days, 90 days within any 180 day period)
  SM: VISA_TYPES.VISA_FREE, // San Marino (ID card valid)
  ST: VISA_TYPES.VISA_FREE, // São Tomé and Príncipe (15 days)
  SN: VISA_TYPES.VISA_FREE, // Senegal (90 days)
  RS: VISA_TYPES.VISA_FREE, // Serbia (90 days, 90 days within any 6-month period, ID card valid)
  SC: VISA_TYPES.VISA_FREE, // Seychelles (3 months)
  SR: VISA_TYPES.VISA_FREE, // Suriname (90 days, an entrance fee of USD 50 or EUR 50 must be paid online prior to arrival, multiple entry e-Visa is also available)
  SG: VISA_TYPES.VISA_FREE, // Singapore (90 days)
  SK: VISA_TYPES.VISA_FREE, // Slovakia (Freedom of movement, ID card valid)
  SI: VISA_TYPES.VISA_FREE, // Slovenia (Freedom of movement, ID card valid)
  SB: VISA_TYPES.VISA_FREE, // Solomon Islands (90 days, 90 days within any 180 day period)
  ZA: VISA_TYPES.VISA_FREE, // South Africa (90 days)
  KR: VISA_TYPES.VISA_FREE, // South Korea (90 days, the validity period of a K-ETA is 3 years from the date of approval, Dutch citizens are exempt from applying for a K-ETA until the end of 2025)
  ES: VISA_TYPES.VISA_FREE, // Spain (Freedom of movement, ID card valid)
  SE: VISA_TYPES.VISA_FREE, // Sweden (Freedom of movement, ID card valid)
  CH: VISA_TYPES.VISA_FREE, // Switzerland (Freedom of movement, ID card valid)
  TJ: VISA_TYPES.VISA_FREE, // Tajikistan (30 days, at Dushanbe International Airport, visa also available online, e-Visa holders can enter through all border points)
  TH: VISA_TYPES.VISA_FREE, // Thailand (60 days, maximum two visits annually if not arriving by air)
  TL: VISA_TYPES.VISA_FREE, // Timor-Leste (90 days, 90 days within any 180 day period)
  TO: VISA_TYPES.VISA_FREE, // Tonga (90 days, 90 days within any 180 day period)
  TT: VISA_TYPES.VISA_FREE, // Trinidad and Tobago (90 days, 90 days within any 180 day period)
  TN: VISA_TYPES.VISA_FREE, // Tunisia (90 days)
  TR: VISA_TYPES.VISA_FREE, // Turkey (90 days, 90 days within 180 day period, ID card valid)
  TV: VISA_TYPES.VISA_FREE, // Tuvalu (90 days, 90 days within any 180 day period)
  UA: VISA_TYPES.VISA_FREE, // Ukraine (90 days, 90 days within any 180 day period, the Dutch government advises its citizens not to travel to Ukraine due to Russia's aggression towards Ukraine)
  AE: VISA_TYPES.VISA_FREE, // United Arab Emirates (90 days, 90 days within any 180 day period)
  UY: VISA_TYPES.VISA_FREE, // Uruguay (90 days)
  UZ: VISA_TYPES.VISA_FREE, // Uzbekistan (30 days)
  VA: VISA_TYPES.VISA_FREE, // Vatican City (ID card valid)
  VE: VISA_TYPES.VISA_FREE, // Venezuela (90 days, entry to Venezuela not possible through Aruba, Curaçao or Bonaire)
  VN: VISA_TYPES.VISA_FREE, // Vietnam (45 days, e-Visa is valid for 90 days and multiple entry)
  ZM: VISA_TYPES.VISA_FREE, // Zambia (30 days, also eligible for a universal visa allowing access to Zimbabwe)
  // ETA / Electronic Travel Authorization / eVisitor
  AU: VISA_TYPES.ETA, // Australia (90 days, eVisitor or Electronic Travel Authority, 90 days on each visit in 12-month period if granted)
  CA: VISA_TYPES.ETA, // Canada (6 months, eTA / Visa not required, eTA required if arriving by air)
  IL: VISA_TYPES.ETA, // Israel (3 months, ETA-IL)
  KE: VISA_TYPES.ETA, // Kenya (90 days, Electronic Travel Authorisation, applications can be submitted up to 90 days prior to travel and must be submitted at least 3 days in advance, eTA fee is USD 32.50)
  NZ: VISA_TYPES.ETA, // New Zealand (3 months, Electronic Travel Authority, may enter using eGate, International Visitor Conservation and Tourism Levy must be paid upon requesting an Electronic Travel Authority)
  GB: VISA_TYPES.ETA, // United Kingdom (6 months, Electronic Travel Authorisation, an ETA is required to travel to the United Kingdom, including Northern Ireland)
  US: VISA_TYPES.ETA, // United States (90 days, Visa Waiver Program, ESTA is valid for 2 years from the date of issuance, ESTA is also required when entering the country by cruise ship or land)
  // Visa on arrival
  BD: VISA_TYPES.VISA_ON_ARRIVAL, // Bangladesh (30 days)
  BH: VISA_TYPES.VISA_ON_ARRIVAL, // Bahrain (14 days, eVisa / Visa on arrival)
  BI: VISA_TYPES.VISA_ON_ARRIVAL, // Burundi (1 month, online visa / Visa on arrival)
  KH: VISA_TYPES.VISA_ON_ARRIVAL, // Cambodia (30 days, eVisa / Visa on arrival, visa is also obtainable online)
  KM: VISA_TYPES.VISA_ON_ARRIVAL, // Comoros (45 days)
  EG: VISA_TYPES.VISA_ON_ARRIVAL, // Egypt (30 days, eVisa / Visa on arrival)
  ET: VISA_TYPES.VISA_ON_ARRIVAL, // Ethiopia (up to 90 days, eVisa / Visa on arrival, visa on arrival is obtainable only at Addis Ababa Bole International Airport)
  GW: VISA_TYPES.VISA_ON_ARRIVAL, // Guinea-Bissau
  ID: VISA_TYPES.VISA_ON_ARRIVAL, // Indonesia (30 days, e-VOA / Visa on arrival)
  JO: VISA_TYPES.VISA_ON_ARRIVAL, // Jordan (eVisa / Visa on arrival, visa can be obtained upon arrival, it will cost a total of 40 JOD, obtainable at most international ports of entry and land border crossings)
  KW: VISA_TYPES.VISA_ON_ARRIVAL, // Kuwait (3 months, eVisa / Visa on arrival)
  LA: VISA_TYPES.VISA_ON_ARRIVAL, // Laos (30 days, eVisa / Visa on arrival, 18 of the 33 border crossings are only open to regular visa holders)
  LB: VISA_TYPES.VISA_ON_ARRIVAL, // Lebanon (1 month, free visa on arrival, 1 month extendable for 2 additional months, granted free of charge at Beirut International Airport or any other port of entry if there is no Israeli visa or seal)
  MG: VISA_TYPES.VISA_ON_ARRIVAL, // Madagascar (90 days, eVisa / Visa on arrival)
  MW: VISA_TYPES.VISA_ON_ARRIVAL, // Malawi (30 days, eVisa / Visa on arrival)
  NA: VISA_TYPES.VISA_ON_ARRIVAL, // Namibia (3 months, eVisa / Visa on arrival, can be obtained online or on arrival for a fee of N$1,600)
  NP: VISA_TYPES.VISA_ON_ARRIVAL, // Nepal (90 days, online visa / Visa on arrival)
  RW: VISA_TYPES.VISA_ON_ARRIVAL, // Rwanda (30 days, eVisa / Visa on arrival)
  SA: VISA_TYPES.VISA_ON_ARRIVAL, // Saudi Arabia (90 days, eVisa / Visa on arrival)
  SL: VISA_TYPES.VISA_ON_ARRIVAL, // Sierra Leone (3 months / 30 days, eVisa / Visa on arrival)
  LK: VISA_TYPES.VISA_ON_ARRIVAL, // Sri Lanka (60 days / 30 days, eVisa / Visa on arrival, the standard visitor visa allows a stay of 60 days within any 6-month period)
  TZ: VISA_TYPES.VISA_ON_ARRIVAL, // Tanzania (90 days, eVisa / Visa on arrival)
  UG: VISA_TYPES.VISA_ON_ARRIVAL, // Uganda (3 months, eVisa)
  ZW: VISA_TYPES.VISA_ON_ARRIVAL, // Zimbabwe (30 days, eVisa / Visa on arrival, also eligible for a universal visa allowing access to Zambia)
  // eVisa
  AZ: VISA_TYPES.E_VISA, // Azerbaijan (30 days)
  BJ: VISA_TYPES.E_VISA, // Benin (30 days, must have an international vaccination certificate)
  BT: VISA_TYPES.E_VISA, // Bhutan (pre-approved visa can be picked up on arrival)
  BF: VISA_TYPES.E_VISA, // Burkina Faso (1 month, the Dutch government advises its citizens not to travel to Burkina Faso due to the political and security situation in the country)
  CM: VISA_TYPES.E_VISA, // Cameroon (pre-approved visa can be picked up on arrival)
  TD: VISA_TYPES.E_VISA, // Chad (90 days, must apply at least 7 days before arrival but maximum 90 days before arrival)
  CD: VISA_TYPES.E_VISA, // Democratic Republic of the Congo (7 days)
  CI: VISA_TYPES.E_VISA, // Côte d'Ivoire (3 months, e-Visa holders must arrive via Port Bouet Airport)
  CU: VISA_TYPES.E_VISA, // Cuba (90 days, can be extended up to 90 days with a fee)
  DJ: VISA_TYPES.E_VISA, // Djibouti (90 days)
  GQ: VISA_TYPES.E_VISA, // Equatorial Guinea (e-Visa holders must arrive via Malabo International Airport)
  GA: VISA_TYPES.E_VISA, // Gabon (90 days, e-Visa holders must arrive via Libreville International Airport)
  GN: VISA_TYPES.E_VISA, // Guinea (90 days)
  IN: VISA_TYPES.E_VISA, // India (30 days, e-Visa holders must arrive via 32 designated airports or 5 designated seaports, an Indian e-Tourist Visa may only be obtained twice within 1 calendar year)
  IR: VISA_TYPES.E_VISA, // Iran (30 days, the Dutch government advises its citizens not to travel to Iran due to the security situation in the country)
  IQ: VISA_TYPES.E_VISA, // Iraq (30 days, authorities in Iraq have decided to remove the visa-on-arrival requirement for nationals of the European Union, requiring them to now apply for an e-visa, the Dutch government advises its citizens not to travel to Iraq due to the high threat of terrorist attacks)
  KG: VISA_TYPES.E_VISA, // Kyrgyzstan
  LS: VISA_TYPES.E_VISA, // Lesotho (14 days)
  LR: VISA_TYPES.E_VISA, // Liberia (90 days, the Liberia Visa on Arrival (VoA) allows travelers to obtain a Visa upon arrival in Liberia by plane, travelers must pre-apply for the visa online)
  LY: VISA_TYPES.E_VISA, // Libya (the Dutch government advises its citizens not to travel to Libya due to the volatile situation in the country)
  MR: VISA_TYPES.E_VISA, // Mauritania (30 days, an eVisa is mandatory before travel)
  MM: VISA_TYPES.E_VISA, // Myanmar (28 days, e-Visa holders must arrive via Yangon, Nay Pyi Taw or Mandalay airports or via land border crossings with Thailand or India)
  NG: VISA_TYPES.E_VISA, // Nigeria (90 days, pre-approved visa can be picked up on arrival)
  PK: VISA_TYPES.E_VISA, // Pakistan (90 days)
  PG: VISA_TYPES.E_VISA, // Papua New Guinea (60 days, available at Gurney Airport (Alotau), Mount Hagen Airport, Port Moresby Airport and Tokua Airport (Rabaul))
  RU: VISA_TYPES.E_VISA, // Russia (16 days)
  SO: VISA_TYPES.E_VISA, // Somalia (30 days, all visitors must have an approved Electronic Visa (eTAS) before the start of their journey, the Dutch government advises its citizens not to travel to Somalia due to the security situation in the country)
  SS: VISA_TYPES.E_VISA, // South Sudan (obtainable online, printed visa authorization must be presented at the time of travel, the Dutch government advises its citizens not to travel to South Sudan due to the unstable and deterioration of the security situation)
  SY: VISA_TYPES.E_VISA, // Syria (the Dutch government advises its citizens not to travel to Syria due to the security situation and multiple conflicts in the country)
  TG: VISA_TYPES.E_VISA, // Togo (15 days)
  // Visa required
  AF: VISA_TYPES.VISA_REQUIRED, // Afghanistan (the Dutch government advises its citizens not to travel to Afghanistan due to the security situation in the country)
  DZ: VISA_TYPES.VISA_REQUIRED, // Algeria
  CF: VISA_TYPES.VISA_REQUIRED, // Central African Republic (the Dutch government advises its citizens not to travel to Central African Republic due to the security situation in the country)
  CG: VISA_TYPES.VISA_REQUIRED, // Republic of the Congo
  ER: VISA_TYPES.VISA_REQUIRED, // Eritrea (pre-approved visa can be picked up on arrival)
  GH: VISA_TYPES.VISA_REQUIRED, // Ghana (pre-approved visa can be picked up on arrival)
  KP: VISA_TYPES.VISA_REQUIRED, // North Korea
  ML: VISA_TYPES.VISA_REQUIRED, // Mali (the Dutch government advises its citizens not to travel to Mali due to the high risk of terrorist attacks and violence against Westerners throughout the country)
  NR: VISA_TYPES.VISA_REQUIRED, // Nauru
  NE: VISA_TYPES.VISA_REQUIRED, // Niger (the Dutch government advises its citizens not to travel to Niger due to the security situation in the country)
  SD: VISA_TYPES.VISA_REQUIRED, // Sudan (the Dutch government advises its citizens not to travel to Sudan due to the ongoing conflict in the country, Khartoum International Airport is closed)
  TM: VISA_TYPES.VISA_REQUIRED, // Turkmenistan (pre-approved visa can be picked up on arrival)
  YE: VISA_TYPES.VISA_REQUIRED, // Yemen (the Dutch government advises its citizens not to travel to Yemen due to the ongoing Yemeni civil war)
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
