import React from "react";

const SearchInput = ({ ...props }) => {
  return (
    <input
      className="p-3 font-normal rounded-md text-salte-900"
      placeholder="Enter city.."
      type="search"
      {...props}
    />
  );
};

export default SearchInput;
