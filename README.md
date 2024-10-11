# Koinx Cryptocurrency Stats Tracker

A server-side application to track cryptocurrency prices and stats (Bitcoin, Matic, and Ethereum) using Node.js, Express, and MongoDB. This project fetches cryptocurrency data every 2 hours, stores it in a database, and provides APIs to retrieve the latest stats and calculate standard deviation for the last 100 records.

## Features

- Fetches cryptocurrency data from the CoinGecko API (price, market cap, and 24-hour change).
- Background job that runs every 2 hours to store cryptocurrency data in MongoDB.
- Provides API endpoints to get the latest cryptocurrency stats and calculate the standard deviation of prices over time.

## Table of Contents

- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [Get Cryptocurrency Stats](#get-cryptocurrency-stats)
  - [Get Price Deviation](#get-price-deviation)
- [How to Test the API](#how-to-test-the-api)
- [Environment Variables](#environment-variables)
- [Cron Job](#cron-job)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- An API key from CoinGecko (if applicable)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/POBOROJO/stats-crypto.git
   cd stats-crypto

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:

   ```bash
   # CoinGecko API key
   COINGECKO_API_KEY=YOUR_API_KEY
   #PORT
   PORT=3000
   # MongoDB connection string
   MONGODB_URI=mongodb://localhost:27017/stats-crypto
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
### Get Cryptocurrency Stats

- Endpoint: `/api/v1/stats`
- Method: `GET`
- Query Parameters:
  - 'coin': The coin ID (e.g., 'bitcoin', 'matic', 'ethereum')

 - Example request:
 ``` plaintext
 GET https://stats-crypto-server.onrender.com/api/v1/stats?coin=bitcoin
 ```
 - Response:
 ``` json
 {
  "price": 10000,
  "market_cap": 10000000,
  "change_24h": 0.1
 }
 ```

### Get Price Deviation

- Endpoint: `/api/v1/deviation`
- Method: `GET`
- Query Parameters:
  - 'coin': The coin ID (e.g., 'bitcoin', 'matic', 'ethereum')
  - 'days': The number of days to calculate the deviation for (default: 100)

 - Example request:
 ``` plaintext
 GET https://stats-crypto-server.onrender.com/api/v1/deviation?coin=bitcoin&days=100
 ```
 - Response:
 ``` json
 {
 "price": 60198,
  "marketCap": 1188537228447.773,
  "change24": -0.742740383701355
 }
 ```

## How to Test the API
``` plaintext
GET https://stats-crypto-server.onrender.com/api/v1/stats?coin=bitcoin
```

``` plaintext
GET https://stats-crypto-server.onrender.com/api/v1/deviation?coin=bitcoin
```

### NOTE - coin = bitcoin or matic or ethereum
