import React, { useEffect, useState } from "react";
import { getCountries } from "../api/countries";
import CountryItem from "../components/CountryItem";

const Home = () => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getCountries()
      .then((data) => {
        console.log(data);
        setCountryList(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl">Country List</h1>
      <div className="flex flex-row flex-wrap gap-5">
        {countryList.length > 0 &&
          countryList.map((country) => (
            <CountryItem
              key={country.countryCode}
              name={country.name}
              code={country.countryCode}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
