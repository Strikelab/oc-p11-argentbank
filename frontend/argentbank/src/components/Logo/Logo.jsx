import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../assets/pictures/argentBankLogo.png";
import logo2 from "../../assets/pictures/coffre_v2.svg";
import "./logo.scss";

function Logo() {
  const location = useLocation();
  return (
    <Link to="/" className="logo">
      {location.pathname.includes("edit-username") ? (
        // Render a different logo and text if the current route contains "edit-username"
        <>
          <img className="logo__image2" src={logo2} alt="Argent Bank Logo" />
          <span className="logo__text">Argent</span>
          <span className="logo__text2">Bank</span>
        </>
      ) : (
        // Render the default logo if not in "edit-username" route
        <img className="logo__image" src={logo} alt="Argent Bank Logo" />
      )}
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
  );
}

export default Logo;
