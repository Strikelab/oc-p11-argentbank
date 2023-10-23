import React from "react";
import "./button.scss";
import arrow from "../../assets/pictures/arrow.png";

function Button(props) {
  return <button className={props.className}>{props.buttonText}</button>;
}

export default Button;
