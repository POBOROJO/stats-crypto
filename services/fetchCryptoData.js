import axios from "axios";
import Cryptocurrency from "../models/Cryptocurrency";

const COIN_ID = ["bitcoin", "matic-network", "ethereum"];

export const fetchCryptoData = async () => {
  try {
    const url = "https://api.coingecko.com/api/v3/simple/price";
    const response = await axios.get(url, {
      params: {
        ids: COIN_ID.join(","),
        vs_currencies: "usd",
        include_market_cap: true,
        include_24hr_change: true,
      },
    });
    for (const coinId of COIN_ID) {
      const data = response.data[coinId];
      await Cryptocurrency.create({
        coindId,
        price: data.usd,
        marketCap: data.market_cap,
        change24h: data.usd_24h_change,
      });
    }
    console.log("Crypto data fetched and stored");
  } catch (error) {
    console.error("Error fetching crypto data", error);
  }
};

export default fetchCryptoData;
