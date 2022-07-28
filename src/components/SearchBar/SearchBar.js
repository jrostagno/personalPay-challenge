import React from "react";

import ButtonPrimary from "../Button/ButtonPrimary";
import SearchInput from "../Input/SearchInput";

const SearchBar = ({ setCity, city, getWeatherCity }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherCity();
    setCity("");
  };

  function handleOnChange(e) {
    setCity(e.target.value);
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <SearchInput
        data-cy="cityName"
        value={city || ""}
        onChange={handleOnChange}
      />
      <ButtonPrimary data-cy="submitCity" onClick={handleSubmit}>
        Search
      </ButtonPrimary>
    </form>
  );
};

export default SearchBar;
