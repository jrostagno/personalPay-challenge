import React from "react";

const NextDaysWeather = ({ img, temp, date }) => {
  return (
    <div className="flex flex-col items-center p-2 rounded-md">
      <h1 className="text-sm">{date}</h1>
      <img
        alt="rain"
        className="w-9 h-9"
        src={`https://openweathermap.org/img/wn/${img}@2x.png`}
      />
      <h2>{`${temp} C`}</h2>
    </div>
  );
};

export default NextDaysWeather;
