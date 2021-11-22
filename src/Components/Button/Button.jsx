import React from "react";
import s from "./Button.module.css";

function Button({ onClick, value }) {
  return (
    <div>
      <button className={s.btn} onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default Button;
