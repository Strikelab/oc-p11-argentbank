import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
import "./nav.scss";
// const userIcon =
function Nav() {
  return (
    <nav className="main-nav">
      <Logo className="logo"></Logo>
      <Link to="sign-in" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        <span>Sign In</span>
      </Link>
    </nav>
  );
}

export default Nav;
