import React from "react";
import Button from "../Button/Button";
import "./Keypad.css";

function Keypad() {
  const buttonValue = [
    { value: "C" },
    { value: "del" },
    { value: "/" },
    { value: "*" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "+" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "-" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "=" },
    { value: "0" },
    { value: "." },
  ];

  return (
    <div className="keypad">
      {buttonValue.map((index, key) => (
        <div
          className={
            index.value === "="
              ? "equals"
              : "" /* || index.value === "+"
              ? "equals"
              : "" */ || index.value === "0"
              ? "equals_zero"
              : ""
          }
        >
          <Button
            key={key}
            value={index.value}
            onClick={() => {
              alert(`${index.value}`);
            }}
          ></Button>
        </div>
      ))}
    </div>
  );
}

export default Keypad;
