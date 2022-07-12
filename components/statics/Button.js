import React from "react";

function Button({ text, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        " px-6 py-3 font-semibold text-base  text-white rounded-full shadow-sm   " +
        className
      }
      style={{ userSelect: "none" }}
    >
      {text}
    </button>
  );
}

export default Button;
