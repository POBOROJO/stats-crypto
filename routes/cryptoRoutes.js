import express from "express";
import Cryptocurrency from "../models/Cryptocurrency.js";
const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    const { coin } = req.query;
    if (!coin) {
      return res.status(400).json({
        msg: "Coin parameter is required",
      });
    }

    const latestData = await Cryptocurrency.findOne({ coinId: coin }).sort({
      timestamp: -1,
    });

    if (!latestData) {
      return res.status(404).json({
        msg: "Coin not found",
      });
    }

    res.status(200).json({
      price: latestData.price,
      marketCap: latestData.marketCap,
      change24: latestData.change24h,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error",
    });
  }
});

router.get("/deviation", async (req, res) => {
  try {
    const { coin } = req.query;
    if (!coin) {
      res.status(400).json({
        msg: "Coin parameter is required",
      });
    }
    const data = await Cryptocurrency.find({ coinId: coin })
      .sort({ timestamp: -1 })
      .limit(100);

    if (data.length === 0) {
      return res.status(404).json({
        msg: "Coin not found",
      });
    }

    const prices = data.map((item) => item.price);
    const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
    const squareDiff = prices.map((price) => Math.pow(price - mean, 2));
    const variance =
      squareDiff.reduce((sum, diff) => sum + diff, 0) / prices.length;
    const standardDeviation = Math.sqrt(variance);

    res.status(200).json({
      deviation: parseFloat(standardDeviation.toFixed(2)),
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error",
    });
  }
});

export default router;
