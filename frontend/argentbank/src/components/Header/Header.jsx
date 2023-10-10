import React from "react";
import Button from "../Button/Button";
import "./header.scss";

let userName = "Tony Jarvis";

function Header() {
  return (
    <div className="header">
      <h1>{`Welcome back ${userName} !`}</h1>
      <Button className="edit-button" buttonText="Edit Name" />
    </div>
  );
}

export default Header;
