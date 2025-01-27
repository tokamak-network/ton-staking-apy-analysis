using this scripts you can find

TON Staking APY/ROI and TON Prices of the specific Dates

First Step

Find TON Staking APY
for that use this script get_ton_staking_apy.js
so first in this script you can pass StakingDayDatas
which you can get from this Curl

curl --location 'https://gateway.thegraph.com/api/de0a7a09c2dfa265f01f0a63b6fa7f43/subgraphs/id/CJLiXNdHXJ22BzWignD62gohDRVTYXJQVgU4qKJEtNVS' \
--header 'accept: */*' \
--header 'accept-language: en-GB,en;q=0.8' \
--header 'content-type: application/json' \
--header 'origin: https://simple.staking.tokamak.network' \
--header 'priority: u=1, i' \
--header 'referer: https://simple.staking.tokamak.network/' \
--header 'sec-ch-ua: "Not A(Brand";v="8", "Chromium";v="132", "Brave";v="132"' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'sec-ch-ua-platform: "macOS"' \
--header 'sec-fetch-dest: empty' \
--header 'sec-fetch-mode: cors' \
--header 'sec-fetch-site: cross-site' \
--header 'sec-gpc: 1' \
--header 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36' \
--header 'Cookie: __cf_bm=5dEMyMcYZ3t5gTRpMXcalBpwO34rCDaemrLWQcb4pXw-1737954278-1.0.1.1-FiH6VqVwTdDOf7W2m8wsZAjuNoJbNZoo2B6V4ltpkUiHAs4duaxkrmmI9YCFG7OQc8nkc9o3YIQWSXgNWx064A' \
--data '{"query":"query GetGraph($id: String) {\n  stakingDayDatas(first: 1000,orderBy: date, orderDirection: asc) {\n    id\n    totalStaked\n    date\n    __typename\n  }\n}","variables":{}}'


now once you have StakingDayDatas you can add in the script 
now you need total TON supply of the dates as well so for that you can find it from this file 
https://docs.google.com/spreadsheets/u/1/d/1-4dT3nS4q7RwLgGI6rQ7M1hPx9XHI-Ryw1rkBCvTdcs/edit?gid=681869004#gid=681869004
now you need to create totalSupplyByMonth in that script to add correct total supply from this file 
now you are good to go to get correct APY so now run the script 
it will create ton_staking_apy.xlsx where you can see all the TON staking APY of that date


Now you need to find TON Prices of the same dates so for that we will get from DUNE API
so for that you need to create one query using this script create_ton_price_query.js
so once you run this you will get query_with_dates.txt this file where you can see one query 
Now you need to open this dune link https://dune.com/queries/3206902
now you can fork and replace that query with the one which is generate from query_with_dates.txt
now you need to run it and you can copy the that api as curl and copy the entire response of that api
you can add that response  in ton_price.json 

now you just need to fetch the TON price and attach it based on the date to TON APY 
so for that run this script map_ton_price_with_apy.js 
it will create ton_staking_apy_with_prices.xlsx where you can see the date ,TON staking APY , TON Price
now you can create chart of it 





