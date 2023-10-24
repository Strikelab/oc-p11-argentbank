import React from "react";
import "./button.scss";

function Button(props) {
  return (
    <button onClick={props.handleClick} className={props.className}>
      {props.buttonText}
    </button>
  );
}

export default Button;
