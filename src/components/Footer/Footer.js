import React from "react";

const Footer = () => {
  return (
    <div className="p-4 bg-slate-200 opacity-40 text-center">
      <span className="text- opacity-40 font-medium ">WeatherApp</span>&copy;{" "}
      {new Date().getFullYear()} - Javier Rostagno - PersonalPay Challenge
    </div>
  );
};

export default Footer;
