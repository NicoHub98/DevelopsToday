import express from "express";
import axios from "axios";

const router = express.Router();

// Get all countries
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://date.nager.at/api/v3/AvailableCountries"
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching countries:", error.message);
    res.status(500).json({ message: "Failed to fetch countries" });
  }
});

// Get borders of a specific country
router.get("/borders/:countryCode", async (req, res) => {
  try {
    const countryCode = req.params.countryCode;
    const response = await axios.get(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching borders:", error.message);
    res.status(500).json({ message: "Failed to fetch borders" });
  }
});

// Get population of a specific country
router.post("/population", async (req, res) => {
  try {
    const { country } = req.body;

    const response = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/population",
      {
        country,
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch population data" });
  }
});

router.post("/flag", async (req, res) => {
  try {
    const { country } = req.body;

    const response = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/flag/images",
      {
        country,
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch population data" });
  }
});

export default router;
