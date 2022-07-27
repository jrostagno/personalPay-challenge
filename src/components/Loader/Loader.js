import loading from "../../assets/KgkV.gif";

import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center text-teal-300">
      <img src={loading} alt="" />
    </div>
  );
};

export default Loader;
