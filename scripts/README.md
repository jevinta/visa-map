# Wikipedia Visa Requirements Parser

This script automates the extraction of visa requirement data from Wikipedia pages and generates code that can be added to `src/visaData.js`.

## Usage

```bash
node scripts/parse-wikipedia-visa.js <wikipedia-url> [passport-code]
```

### Examples

```bash
# Parse Algerian citizens visa requirements
node scripts/parse-wikipedia-visa.js https://en.wikipedia.org/wiki/Visa_requirements_for_Algerian_citizens DZ

# The script can also auto-detect the passport code from the URL
node scripts/parse-wikipedia-visa.js https://en.wikipedia.org/wiki/Visa_requirements_for_Algerian_citizens
```

## How it works

1. **Fetches the Wikipedia page** - Downloads the HTML content
2. **Parses the visa requirements table** - Extracts country names and visa requirements from the main table
3. **Maps country names to ISO codes** - Matches country names to ISO 3166-1 alpha-2 codes using the `countryNames` mapping from `visaData.js`
4. **Maps visa requirements to VISA_TYPES** - Converts Wikipedia text (e.g., "Visa not required", "Visa on arrival") to the appropriate `VISA_TYPES` constant
5. **Generates code** - Outputs formatted JavaScript code that can be copied into `visaData.js`

## Output

The script outputs:
- A count of successfully processed entries
- A list of entries that couldn't be processed (with reasons)
- Generated JavaScript code formatted for `visaData.js`

## Supported Visa Types

The script recognizes and maps the following visa requirement types:

- **Visa not required** / **Visa-free** → `VISA_FREE`
- **Right of abode** / **Compact of Free Association** → `RIGHT_OF_ABODE`
- **Electronic Travel Authorization** / **ETA** → `ETA`
- **Visa on arrival** → `VISA_ON_ARRIVAL`
- **eVisa** / **E-visa** / **Electronic visa** → `E_VISA`
- **Visa required** → `VISA_REQUIRED`
- **Travel restricted** / **Admission refused** → `TRAVEL_RESTRICTED`

## Tips

1. **Review the output** - Always check the generated code before adding it to `visaData.js`
2. **Check unmapped entries** - If some countries aren't found, you may need to add them to the `countryVariations` mapping in the script
3. **Verify visa types** - Some Wikipedia pages may use slightly different wording; you may need to adjust the `visaTypeMapping` if needed
4. **Test the code** - After adding the generated code, test it in your application to ensure it works correctly

## Troubleshooting

### Country not found
If a country isn't being matched:
- Check if the country name in Wikipedia matches exactly with the name in `countryNames`
- Add a variation to the `countryVariations` object in the script

### Visa type not recognized
If a visa requirement isn't being mapped:
- Check the exact text in the Wikipedia table
- Add a new mapping to the `visaTypeMapping` object in the script

### Table not found
If the script can't find the table:
- Verify the Wikipedia page has a table with class "wikitable" or "wikitable sortable"
- Some pages may have different table structures; you may need to adjust the parsing logic
