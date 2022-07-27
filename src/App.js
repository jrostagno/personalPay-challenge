import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GeneralWeatherDetail from "./components/Card/GeneralWeatherDetail";

import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import NotFound from "./components/Loader/NotFound";
import { getCityForecast } from "./redux/actions";

function App() {
  const [city, setCity] = useState("");

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);
  const notFound = useSelector((state) => state.notFound);
  const cities = useSelector((state) => state.cities);

  const getWeatherCity = () => {
    dispatch(getCityForecast(city));
  };

  return (
    <Layout setCity={setCity} getWeatherCity={getWeatherCity} city={city}>
      {isLoading ? (
        <Loader></Loader>
      ) : notFound ? (
        <NotFound />
      ) : (
        <div
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          }}
          className=" grid grid-cols-3 w-full mt-4 p-4  flex-col gap-2"
        >
          {cities.length > 0 &&
            cities.map((city, index) => (
              <GeneralWeatherDetail
                key={index}
                nextDays={city.nextDaysWeather}
                todayWeather={city.todayWeather}
              ></GeneralWeatherDetail>
            ))}
        </div>
      )}
    </Layout>
  );
}

export default App;
