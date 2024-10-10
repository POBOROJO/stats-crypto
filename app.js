import express from "express";
import dotenv from "dotenv";
import cron from "node-cron";
import fetchCryptoData from "./services/fetchCryptoData.js";
import cryptoRoutes from "./routes/cryptoRoutes.js";
import connectDB from "./config/db.js";
const app = express();

dotenv.config({
  path: ".env",
});

connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1", cryptoRoutes);

cron.schedule("0 */2 * * *", async () => {
  await fetchCryptoData();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

fetchCryptoData();
