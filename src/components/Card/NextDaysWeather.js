import React from "react";

const NextDaysWeather = ({ img, temp, date }) => {
  return (
    <div className="flex flex-col rounded-md items-center  p-2">
      <h1 className="text-sm">{date}</h1>
      <img
        className="w-9 h-9"
        src={`https://openweathermap.org/img/wn/${img}@2x.png`}
        alt="rain"
      />
      <h2>{`${temp} C`}</h2>
    </div>
  );
};

export default NextDaysWeather;
