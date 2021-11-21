import React from "react";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";
import s from "./CalcItem.module.css";

function CalcItem() {
  return (
    <div className={s.form}>
      <Display />
      <Keypad />
    </div>
  );
}

export default CalcItem;
