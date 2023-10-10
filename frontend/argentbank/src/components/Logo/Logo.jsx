import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/pictures/argentBankLogo.png";
import "./logo.scss";

function Logo() {
  return (
    <Link to="/" className="logo">
      <img className="logo__image" src={logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
  );
}

export default Logo;
