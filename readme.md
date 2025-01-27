# TON Staking APY and Price Analysis Scripts

This repository contains scripts and steps to calculate **TON Staking APY/ROI** and retrieve **TON Prices** for specific dates. By following the steps below, you can generate an Excel file and corresponding charts for analysis.

---

## Prerequisites

Ensure you have the following before proceeding:
- Node.js installed.
- Access to the APIs and spreadsheet links mentioned in the steps.

---

## Steps to Use

### 1. Find TON Staking APY
1. Run the `get_ton_staking_apy.js` script after preparing the required data:
    - **StakingDayDatas:** 
      Retrieve `StakingDayDatas` from the following API using the `curl` command:
      ```bash
      curl --location 'https://gateway.thegraph.com/api/de0a7a09c2dfa265f01f0a63b6fa7f43/subgraphs/id/CJLiXNdHXJ22BzWignD62gohDRVTYXJQVgU4qKJEtNVS' \
      --header 'accept: */*' \
      --header 'content-type: application/json' \
      --data '{"query":"query GetGraph($id: String) {\n  stakingDayDatas(first: 1000,orderBy: date, orderDirection: asc) {\n    id\n    totalStaked\n    date\n    __typename\n  }\n}","variables":{}}'
      ```
    - Once retrieved, add the `StakingDayDatas` into the script.
    
2. **Total TON Supply:**
   Retrieve the monthly total TON supply from [this Google Sheet](https://docs.google.com/spreadsheets/u/1/d/1-4dT3nS4q7RwLgGI6rQ7M1hPx9XHI-Ryw1rkBCvTdcs/edit?gid=681869004#gid=681869004). 
   - Create a `totalSupplyByMonth` mapping in `get_ton_staking_apy.js` using data from the spreadsheet.

3. Run `get_ton_staking_apy.js` to calculate TON staking APY.
   - The script will generate an output file: `ton_staking_apy.xlsx`.

---

### 2. Find TON Prices
1. Use the script `create_ton_price_query.js` to generate a query.
   - Running this script creates a file named `query_with_dates.txt`.

2. Access DUNE Analytics:
   - Open this [DUNE query link](https://dune.com/queries/3206902) and fork it.
   - Replace the query in the forked version with the one from `query_with_dates.txt`.

3. Run the DUNE query and export the results:
   - Copy the API curl and entire response. 
   - Save the response as `ton_price.json`.

---

### 3. Map TON Prices with APY
1. Run the `map_ton_price_with_apy.js` script:
   - This script uses `ton_price.json` and `ton_staking_apy.xlsx`.

2. The script generates `ton_staking_apy_with_prices.xlsx`:
   - The file includes dates, TON staking APY, and TON prices.

---

### 4. Create Charts
Use `ton_staking_apy_with_prices.xlsx` to create visualizations of the TON staking APY and price data. Use your preferred spreadsheet software for chart creation.
![image](https://github.com/user-attachments/assets/36b708bb-2c63-4907-a1ab-39d8db271507) 
Here is a sample chart which I created using the Numbers software on MacBook. You can download the file and use it as a reference:
- **Download the sample chart file:** [ton_staking_apy_with_prices.xlsx](https://drive.google.com/file/d/17rPUTGntU-H3egb3EjEv34OGP7HRRAu_/view?usp=sharing)
You can also use this Excel file to create your own chart, comparing the **TON Staking APY** with **TON Price**, and visualize how the staking rewards and price fluctuate over time.
---

## Output Files
- **`ton_staking_apy.xlsx`**: Contains TON staking APY by date.
- **`query_with_dates.txt`**: Query to retrieve TON prices from DUNE.
- **`ton_price.json`**: Response containing TON prices by date.
- **`ton_staking_apy_with_prices.xlsx`**: Combined TON staking APY and price data for analysis.

---

## Notes
- Ensure you update the `StakingDayDatas` and `totalSupplyByMonth` accurately before running the scripts.
- Refer to the respective script comments for detailed implementation guidance.
