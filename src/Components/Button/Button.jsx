import React from "react";
import s from "./Button.module.css";

function Button({ onClick, value }) {
  let type;
  if (value === "=") type = `${s.equals}`;
  else if (value === "0") type = `${s.equals_zero}`;
  else type = `${s.btn}`;

  return (
    <div>
      <button className={type} onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default Button;
