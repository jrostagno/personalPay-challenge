import axios from "axios";

export const getCurrentHour = () => {
  let hour = new Date().getHours();

  if (hour >= 0 && hour <= 3) return 3;
  if (hour >= 3 && hour <= 6) return 6;
  if (hour >= 6 && hour <= 9) return 9;
  return 0;
};

export const DAYS = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

const todayDay = DAYS[new Date().getDay()];
export const getCityToday = async (city) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84cbb6c6fcb30fa644a6da1056db1b2b&units=metric`
    );

    const today = res.data;

    let todayWeather = {
      min: Math.round(today.main.temp_min),
      max: Math.round(today.main.temp_max),
      date: todayDay,
      img: today.weather[0].icon,
      pressure: today.main.pressure,
      humidity: today.main.humidity,
      temp: today.main.temp.toFixed(1),
      name: today.name,
      weather: today.weather[0].main,
    };

    return todayWeather;
  } catch (error) {
    throw error;
  }
};
