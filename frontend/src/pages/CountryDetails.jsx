import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCountryData } from "../api/countries";
import PopulationChart from "../components/PopulationChart";
import FlagCard from "../components/FlagCard";

const CountryDetails = () => {
  const { code, name } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCountryData = async () => {
    setLoading(true);
    setCountryData(null);
    setError(null);

    try {
      const data = await getCountryData(code, name);
      setCountryData(data);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, [code]);

  return (
    <div className="flex flex-col w-full gap-10">
      <div
        className="flex flex-row w-full items-center gap-5 p-2 shadow-md"
        onClick={() =>
          console.log(countryData?.population?.data?.populationCounts)
        }
      >
        {error ? (
          <p className="text-red-500 font-bold">Error: {error}</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          <FlagCard src={countryData?.flag?.data?.flag} name={name} />
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:justify-between w-full">
        <div className="flex flex-col gap-10 p-2 shadow-md">
          <h3 className="text-2xl">Bordering countries</h3>
          {error ? (
            <p className="text-red-500 font-bold">Error fetching borders</p>
          ) : loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex flex-col gap-5">
              {countryData?.borders?.borders.map((border) => (
                <Link
                  to={`/${border.commonName}/${border.countryCode}`}
                  key={border.countryCode}
                  className="link"
                >
                  - {border.commonName}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="p-2 shadow-md w-full">
          <h3 className="text-2xl">Population Chart</h3>
          {error ? (
            <p className="text-red-500 font-bold">
              Error fetching population data
            </p>
          ) : loading ? (
            <p>Loading...</p>
          ) : (
            <PopulationChart
              data={countryData?.population?.data?.populationCounts}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
