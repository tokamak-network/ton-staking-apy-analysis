const xlsx = require('xlsx');
const fs = require('fs');

// File paths
const inputFilePath = 'ton_staking_apy.xlsx';
const outputFilePath = 'query_with_dates.txt';

// Load the Excel file
const workbook = xlsx.readFile(inputFilePath);
const sheetName = workbook.SheetNames[0]; // Get the first sheet
const sheet = workbook.Sheets[sheetName];

// Parse the sheet to JSON
const data = xlsx.utils.sheet_to_json(sheet);

// Extract dates from the "Date" column
const dates = data.map(row => row['Date']);

// Format dates for the SQL query
const formattedDates = dates.map(date => `TRY_CAST('${date.replace(/\//g, '-')}' AS DATE)`).join(', ');

// SQL query template
const sqlQuery = `WITH filtered_minutes AS (
  SELECT
    price,
    minute
  FROM prices.usd
  WHERE
    "contract_address" = FROM_HEX('2be5e8c109e2197D077D13A82dAead6a9b3433C5')
    AND TRY_CAST(minute AS TIME) = TRY_CAST('23:59:00' AS TIME)
    AND DATE(minute) IN (
      ${formattedDates}
    )
)
SELECT
  price,
  minute
FROM filtered_minutes
ORDER BY
  minute DESC
LIMIT 1000;`;

// Write the query to a .txt file
fs.writeFileSync(outputFilePath, sqlQuery);

console.log(`SQL query successfully written to ${outputFilePath}`);