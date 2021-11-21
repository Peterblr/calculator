import React from "react";
import s from "./Button.module.css";

function Button({ onClick, value }) {
  return (
    <div className={s.btn}>
      <button onClick={onClick}>{value}</button>
    </div>
  );
}

export default Button;
