# Koinx Cryptocurrency Stats Tracker

A server-side application to track cryptocurrency prices and stats (Bitcoin, Matic, and Ethereum) using Node.js, Express, and MongoDB. This project fetches cryptocurrency data every 2 hours, stores it in a database, and provides APIs to retrieve the latest stats and calculate standard deviation for the last 100 records.

## Features

- Fetches cryptocurrency data from the CoinGecko API (price, market cap, and 24-hour change).
- Background job that runs every 2 hours to store cryptocurrency data in MongoDB.
- Provides API endpoints to get the latest cryptocurrency stats and calculate the standard deviation of prices over time.
