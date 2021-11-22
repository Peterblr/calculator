import React from "react";
import Button from "../Button/Button";
import s from "./Keypad.module.css";

function Keypad() {
  const buttonValue = [
    { value: "C" },
    { value: "/" },
    { value: "*" },
    { value: "-" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "+" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "0" },
    { value: "." },
    { value: "=" },
  ];
  return (
    <div className={s.keypad}>
      {buttonValue.map((index) => (
        <Button
          value={index.value}
          onClick={() => {
            alert(`${index.value}`);
          }}
        ></Button>
      ))}
    </div>
  );
}

export default Keypad;
