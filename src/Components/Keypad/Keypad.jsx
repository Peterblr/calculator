import React from "react";
import Button from "../Button/Button";
import s from "./Keypad.module.css";

function Keypad() {
  return (
    <div className={s.keypad}>
      <Button>
        <span>0</span>
      </Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
    </div>
  );
}

export default Keypad;
