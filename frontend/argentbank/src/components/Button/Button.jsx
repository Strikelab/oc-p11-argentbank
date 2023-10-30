import React from "react";
import "./button.scss";

function Button(props) {
  return (
    <button onClick={props.handleClick} className={props.className} disabled={props.disabled }>
      {props.buttonText}
    </button>
  );
}

export default Button;
