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
    <div className="flex  justify-between">
      <div className="flex  flex-col">
        <div className="flex items-center p-2 gap-2">
          <img
            src={`https://openweathermap.org/img/wn/${img}@2x.png`}
            alt="rain"
          />
          <h2 className="text-4xl  font-thin">{`${temp} C`}</h2>
        </div>
        <h3 className="text-xs ml-3">{`Pressure: ${pressure} hp`}</h3>
        <h3 className="text-xs ml-3 mb-2">{`Humidity: ${humidity} %`}</h3>
      </div>
      <div className="flex flex-col p-3 pr-4 mt-4 mr-2">
        <h1 className="text-base font-semibold">{city}</h1>
        <h2 className="text-xs">{today}</h2>
        <h2 className="font-thin text-2xl">{weather}</h2>
      </div>
    </div>
  );
};

export default TodayWeather;
