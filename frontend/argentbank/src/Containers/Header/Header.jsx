import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./header.scss";

let userName = "Tony Jarvis";

function Header() {
  return (
    <div className="header">
      <h1>{`Welcome back ${userName} !`}</h1>
      <Link to="edit-username">
        <Button className="edit-button" buttonText="Edit Name" />
      </Link>
    </div>
  );
}

export default Header;
