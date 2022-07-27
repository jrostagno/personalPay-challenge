import React from "react";

const SearchInput = ({ ...props }) => {
  return (
    <input
      className="rounded-md p-3  font-normal text-salte-900"
      type="search"
      placeholder="Enter city.."
      {...props}
    />
  );
};

export default SearchInput;
