import React from "react";
import "./button.scss";

function Button(props) {
  return <button className={props.className}>{props.buttonText}</button>;
}

export default Button;
