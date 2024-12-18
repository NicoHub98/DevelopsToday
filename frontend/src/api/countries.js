import axios from "axios";
import api from "./api";

export const getCountries = async () => {
  try {
    const response = await api.get("/api/countries");
    console.log(response);

    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error.message);
    throw new Error("Failed to fetch countries");
  }
};

const getBorders = async (countryCode) => {
  try {
    const response = await api.get(`/api/countries/borders/${countryCode}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching borders:", error.message);
    throw new Error("Failed to fetch borders");
  }
};

const getPopulation = async (country) => {
  try {
    const response = await api.post(`/api/countries/population`, {
      country,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching population:", error.message);
    throw new Error("Failed to fetch population");
  }
};

const getFlag = async (country) => {
  try {
    const response = await api.post(`/api/countries/flag`, {
      country,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching flag:", error.message);
    throw new Error("Failed to fetch flag");
  }
};

export const getCountryData = async (countryCode, country) => {
  console.log(countryCode);

  try {
    const [borders, population, flag] = await Promise.all([
      getBorders(countryCode),
      getPopulation(country),
      getFlag(country),
    ]);

    return { borders, population, flag };
  } catch (error) {
    console.error("Error fetching country data:", error.message);
    throw new Error("Failed to fetch country data");
  }
};
