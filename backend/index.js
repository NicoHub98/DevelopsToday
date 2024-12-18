import express from "express";
import cors from "cors";
import countriesRoutes from "./routes/countriesRoutes.js";
import { config } from "dotenv";

config();

const app = express();
const URL = process.env.URL;
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send({ message: "API is running" });
});

app.use("/api/countries", countriesRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on ${URL}:${PORT}`);
});
