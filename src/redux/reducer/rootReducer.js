import {
  GET_CITY_FORECAST,
  REMOVE_CITY,
  GET_INIT,
  CITY_NOT_FOUND,
} from "../actions";

const initialState = {
  cities: [],
  loading: false,
  notFound: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY_FORECAST:
      return {
        ...state,
        cities: [...state.cities, action.payload],
        notFound: false,
        loading: false,
      };

    case GET_INIT:
      return {
        ...state,
        loading: true,
        notFound: false,
      };

    case CITY_NOT_FOUND:
      return {
        ...state,
        notFound: true,
        loading: false,
      };

    case REMOVE_CITY:
      return {
        ...state,
        cities: state.cities.filter(
          (city) => city.todayWeather.name !== action.payload
        ),
        notFound: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default rootReducer;
