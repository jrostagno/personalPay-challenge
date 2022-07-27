import axios from "axios";
import { DAYS, getCityToday, getCurrentHour } from "../../services/helpers";

export const GET_CITY_FORECAST = "GET_CITY_FORECAST";
export const REMOVE_CITY = "REMOVE_CITY";
export const GET_INIT = "GET_INIT";
export const CITY_NOT_FOUND = "CITY_NOT_FOUND";
const todayDay = DAYS[new Date().getDay()];

export const getCityForecast = (city) => {
  return async function (dispatch) {
    dispatch({
      type: GET_INIT,
    });
    try {
      const todayWeather = await getCityToday(city);
      const nextDays = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=84cbb6c6fcb30fa644a6da1056db1b2b&units=metric`
      );

      let data = nextDays.data;

      let filterByDay = data.list.filter(
        (days) => DAYS[new Date(days.dt_txt).getDay()] !== todayDay
      );

      let filterByHours = filterByDay.filter((days) => {
        let hour = Number(
          days.dt_txt.split(" ")[1][0].concat(days.dt_txt.split(" ")[1][1])
        );

        return hour === getCurrentHour();
      });

      let nextWeatherDaysParse = filterByHours.map((day) => {
        return {
          today: todayWeather,
          min: Math.round(day.main.temp_min),
          max: Math.round(day.main.temp_max),
          date: DAYS[new Date(day.dt_txt).getDay()],
          img: day.weather[0].icon,
          pressure: day.main.pressure,
          humidity: day.main.humidity,
          temp: day.main.temp.toFixed(1),
          name: data.city.name,
          weather: day.weather[0].main,
        };
      });

      let infoWeather = {
        todayWeather: todayWeather,
        nextDaysWeather: nextWeatherDaysParse,
      };

      return dispatch({
        type: GET_CITY_FORECAST,
        payload: infoWeather,
      });
    } catch (error) {
      return dispatch({
        type: CITY_NOT_FOUND,
      });
    }
  };
};

export const removeCity = (city) => {
  return function (dispatch) {
    dispatch({
      type: GET_INIT,
    });

    return dispatch({
      type: REMOVE_CITY,
      payload: city,
    });
  };
};
