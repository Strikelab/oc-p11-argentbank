import React from "react";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./nav.scss";
import { useSelector } from "react-redux";
function Nav() {
  const {userName} = useSelector((state) => state.userProfile);
  const location = useLocation();
  function displayNav() {
    if (location.pathname==="/profile") {
      return (
        <Link to="/" className="main-nav-item">
          <i className="fa fa-sign-out"></i>
          <span>Sign Out</span>
        </Link>
      );
    } else if (location.pathname==="/profile/edit-username") {
      return (
        <div className="main-nav__green">
          <Link to="#" className="main-nav-item">
            <span>{userName}</span>
            <i className="fa fa-user-circle"></i>
          </Link>
          <Link to="#" className="main-nav-item">
            <i className="fa fa-gear"></i>
          </Link>
          <Link to="/">
            <i className="fa-solid fa-power-off"></i>
          </Link>
        </div>
      );
    }
    return (
      <Link to="sign-in" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        <span>Sign In</span>
      </Link>
    );
  }

  return (
    <nav className="main-nav">
      <Logo className="logo" />
      <div className="main-nav__links-wrapper">{displayNav()}</div>
    </nav>
  );
}

export default Nav;
