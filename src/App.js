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
    setCity("");
  };

  return (
    <Layout city={city} getWeatherCity={getWeatherCity} setCity={setCity}>
      {isLoading ? (
        <Loader />
      ) : notFound ? (
        <NotFound />
      ) : (
        <div
          className="grid flex-col w-full grid-cols-3 gap-2 p-4 mt-4 "
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          }}
        >
          {cities.length > 0 &&
            cities.map((city, index) => (
              <GeneralWeatherDetail
                key={index}
                nextDays={city.nextDaysWeather}
                todayWeather={city.todayWeather}
              />
            ))}
        </div>
      )}
    </Layout>
  );
}

export default App;
