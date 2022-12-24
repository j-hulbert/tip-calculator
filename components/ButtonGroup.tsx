import React, { useState } from "react";
import styles from "../styles/ButtonGroup.module.css";

type ButtonGroupProps = {
  buttons: Array<string>;
  doSomethingAfterClick: Function;
};

const ButtonGroup = ({ buttons, doSomethingAfterClick }: ButtonGroupProps) => {
  const [clickedId, setClickedId] = useState(0);
  const [customTip, setCustomTip] = useState("");

  const handleClick = (e, id) => {
    setClickedId(id);
    setCustomTip("");
    doSomethingAfterClick(e.target.innerHTML);
  };

  const handleCustomTip = (e) => {
    setCustomTip(e.target.value);
    if (e.target.value) {
      setClickedId(-1);
    }
    doSomethingAfterClick(e.target.value);
  };

  return (
    <div className={styles["tip-container"]}>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          name={buttonLabel}
          onClick={(e) => handleClick(e, i)}
          className={
            i === clickedId
              ? styles["tip-button"] + " " + styles["tip-button-active"]
              : styles["tip-button"]
          }
        >
          {buttonLabel}
        </button>
      ))}
      <input
        className={styles["input-text"]}
        type="text"
        name="custom tip"
        placeholder="Custom"
        value={customTip}
        onChange={(e) => handleCustomTip(e)}
      />
    </div>
  );
};

export default ButtonGroup;
