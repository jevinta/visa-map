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
