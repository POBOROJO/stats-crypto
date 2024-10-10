import mongoose from "mongoose";

export const cryptoSchema = new mongoose.Schema({
  coinId: {
    type: Strimg,
    required: true,
    enum: ["bitcoin", "etherem", "matic-network"],
  },
  price: {
    type: String,
    required: true,
  },
  marketCap: {
    type: Number,
    required: true,
  },
  "24hChange": {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Cryptocurrency", cryptoSchema);
