import mongoose from "mongoose";

export const cryptoSchema = new mongoose.Schema({
  coinId: {
    type: String,
    required: true,
    enum: ["bitcoin", "ethereum", "matic-network"],
  },
  price: {
    type: Number,
    required: true,
  },
  marketCap: {
    type: Number,
    required: true,
  },
  change24h: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Cryptocurrency", cryptoSchema);
