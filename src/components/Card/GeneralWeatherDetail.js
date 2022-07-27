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
    <div className="flex flex-col p-4 max-w-md w-full  relative justify-between border bg-slate-50  shadow-md rounded-md">
      <TodayWeather
        weather={todayWeather.weather}
        temp={todayWeather.temp}
        pressure={todayWeather.pressure}
        humidity={todayWeather.humidity}
        img={todayWeather.img}
        city={todayWeather.name}
      />

      <div className="flex justify-between">
        {nextDays?.map((day, i) => (
          <NextDaysWeather
            key={i}
            date={day.date}
            img={day.img}
            data
            temp={day.temp}
          />
        ))}
      </div>
      <button
        onClick={() => deleteCity(todayWeather.name)}
        className="absolute text-xl font-thin mr-2 p-1 top-0 right-0"
      >
        x
      </button>
    </div>
  );
};

export default GeneralWeatherDetail;
