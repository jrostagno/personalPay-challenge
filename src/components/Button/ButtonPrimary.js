import React from "react";

const commonStyle =
  "transition ease-in-out hover:bg-slate-800 font-normal duration-150 tracking-widest disable:opacity-25 inline-flex items-center px-4 py-2 rounded-md ";

const ButtonPrimary = ({ className, children, disabled, ...props }) => {
  return (
    <button
      className={`${className || ""} bg-slate-700 text-slate-100 ${
        disabled ? "cursor-not-allowed opacity-25" : ""
      } ${commonStyle} `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
