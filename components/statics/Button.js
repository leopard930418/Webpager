import React from "react";

function Button({ text, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        " px-4 py-2 font-semibold text-base  text-white rounded-full shadow-sm   " +
        className
      }
    >
      {text}
    </button>
  );
}

export default Button;
