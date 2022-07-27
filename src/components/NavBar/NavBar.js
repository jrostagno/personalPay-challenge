import React from "react";

import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({ setCity, city, handleOnchange, getWeatherCity }) => {
  return (
    <div className="flex justify-center sm:justify-between items-center  bg-slate-800 px-8 py-6 h-20">
      <h1 className="text-3xl font-medium text-white hidden sm:block opacity-50">
        WeatherApp
      </h1>
      <SearchBar
        handleOnchange={handleOnchange}
        getWeatherCity={getWeatherCity}
        city={city}
        setCity={setCity}
      ></SearchBar>
    </div>
  );
};

export default NavBar;
