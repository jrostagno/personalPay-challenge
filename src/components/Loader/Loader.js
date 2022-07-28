import React from "react";

import loading from "../../assets/KgkV.gif";

const Loader = () => {
  return (
    <div className="flex justify-center text-teal-300">
      <img alt="" src={loading} />
    </div>
  );
};

export default Loader;
