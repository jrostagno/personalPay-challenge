import React from "react";

import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({ setCity, city, handleOnchange, getWeatherCity }) => {
  return (
    <div className="flex items-center justify-center h-20 px-8 py-6 sm:justify-between bg-slate-800">
      <h1 className="hidden text-3xl font-medium text-white opacity-50 sm:block">
        WeatherApp
      </h1>
      <SearchBar
        city={city}
        getWeatherCity={getWeatherCity}
        handleOnchange={handleOnchange}
        setCity={setCity}
      />
    </div>
  );
};

export default NavBar;
