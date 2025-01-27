const xlsx = require('xlsx');
const fs = require('fs');

// File paths
const excelFilePath = 'ton_staking_apy.xlsx';
const jsonFilePath = 'price.json';
const outputExcelFilePath = 'ton_staking_apy_with_prices.xlsx';

// Load the Excel file
const workbook = xlsx.readFile(excelFilePath);
const sheetName = workbook.SheetNames[0]; // Get the first sheet
const sheet = workbook.Sheets[sheetName];

// Parse the Excel sheet to JSON
const excelData = xlsx.utils.sheet_to_json(sheet);

// Load the JSON file
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
const priceData = jsonData.result.rows;

// Create a mapping from date to price
const priceMap = {};
priceData.forEach(row => {
    const dateKey = row.minute.split(' ')[0]; // Extract the date (YYYY-MM-DD)
    priceMap[dateKey] = row.price;
});

// Add the Price column to the Excel data
const updatedData = excelData.map(row => {
    const formattedDate = row.Date.replace(/\//g, '-'); // Convert date to YYYY-MM-DD format
    return {
        ...row,
        Price: priceMap[formattedDate] || null // Map price or set null if not found
    };
});

// Convert updated data back to a worksheet
const updatedSheet = xlsx.utils.json_to_sheet(updatedData);

// Replace the original sheet with the updated one
workbook.Sheets[sheetName] = updatedSheet;

// Write the updated workbook to a new file
xlsx.writeFile(workbook, outputExcelFilePath);

console.log(`Updated Excel file written to ${outputExcelFilePath}`);