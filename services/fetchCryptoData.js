import axios from "axios";
import dotenv from "dotenv";
import Cryptocurrency from "../models/Cryptocurrency.js";

dotenv.config({
  path: "../services/.env",
});

const coin_id = ["bitcoin", "matic-network", "ethereum"];

export const fetchCryptoData = async () => {
  try {
    const options = {
      method: "GET",
      url: "https://api.coingecko.com/api/v3/simple/price",
      params: {
        ids: coin_id.join(","),
        vs_currencies: "usd",
        include_market_cap: true,
        include_24hr_change: true,
        x_cg_demo_api_key: process.env.COINGECKO_API_KEY,
      },
      headers: {
        accept: "application/json",
      },
    };

    const response = await axios.request(options);
    // console.log("API response", response.data);

    for (const coinId of coin_id) {
      const data = response.data[coinId];
      await Cryptocurrency.create({
        coinId,
        price: data.usd,
        marketCap: data.usd_market_cap,
        change24h: data.usd_24h_change,
      });
    }
    console.log("Crypto data fetched and stored");
  } catch (error) {
    console.error("Error fetching crypto data", error);
  }
};

export default fetchCryptoData;
