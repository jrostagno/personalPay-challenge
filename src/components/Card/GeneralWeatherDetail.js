import React from "react";
import { useDispatch } from "react-redux";

import { removeCity } from "../../redux/actions";

import NextDaysWeather from "./NextDaysWeather";
import TodayWeather from "./TodayWeather";

const GeneralWeatherDetail = ({ todayWeather, nextDays }) => {
  const dispatch = useDispatch();
  const deleteCity = (cityname) => {
    dispatch(removeCity(cityname));
  };

  return (
    <div
      className="relative flex flex-col justify-between w-full max-w-md p-4 border rounded-md shadow-md bg-slate-50"
      data-cy="weatherDisplay"
      data-test-id="weatherDisplay"
    >
      <TodayWeather
        city={todayWeather.name}
        humidity={todayWeather.humidity}
        img={todayWeather.img}
        pressure={todayWeather.pressure}
        temp={todayWeather.temp}
        weather={todayWeather.weather}
      />

      <div className="flex justify-between" data-test-id="nextDays">
        {nextDays?.map((day, i) => (
          <NextDaysWeather
            key={i}
            data
            date={day.date}
            img={day.img}
            temp={day.temp}
          />
        ))}
      </div>
      <button
        className="absolute top-0 right-0 p-1 mr-2 text-xl font-thin"
        onClick={() => deleteCity(todayWeather.name)}
      >
        x
      </button>
    </div>
  );
};

export default GeneralWeatherDetail;
