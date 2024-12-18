import React from "react";

const FlagCard = ({ src, name }) => {
  return (
    <>
      <img src={src} alt="flag" className="w-40 h-24 border" />
      <h2 className="text-2xl font-semibold">{name}</h2>
    </>
  );
};

export default FlagCard;
