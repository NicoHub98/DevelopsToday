import React from "react";
import { Link } from "react-router-dom";

const CountryItem = ({ name, code }) => {
  return (
    <Link
      to={`/${name}/${code}`}
      className="border p-2 rounded-md hover:border-blue-500 transition-all"
    >
      {name}
    </Link>
  );
};

export default CountryItem;
