import React from "react";

const TodayWeather = ({ img, temp, pressure, humidity, city, weather }) => {
  const DAYS = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  const today = DAYS[new Date().getDay()];

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 p-2">
          <img
            alt="rain"
            src={`https://openweathermap.org/img/wn/${img}@2x.png`}
          />
          <h2 className="text-4xl font-thin">{`${temp} C`}</h2>
        </div>
        <h3 className="ml-3 text-xs">{`Pressure: ${pressure} hp`}</h3>
        <h3 className="mb-2 ml-3 text-xs">{`Humidity: ${humidity} %`}</h3>
      </div>
      <div className="flex flex-col p-3 pr-4 mt-4 max-w-[175px]  mr-2">
        <h1 className="text-base font-semibold">{city}</h1>
        <h2 className="text-xs">{today}</h2>
        <h2 className="text-2xl font-thin">{weather}</h2>
      </div>
    </div>
  );
};

export default TodayWeather;
