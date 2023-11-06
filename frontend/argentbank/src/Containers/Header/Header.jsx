import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./header.scss";
import { useSelector } from "react-redux";

function Header() {
  // Get the first name and last name from the Redux store
  const { firstName, lastName } = useSelector((state) => state.userProfile);

  return (
    <div className="header">
      <h1>{`Welcome back ${firstName} ${lastName} !`}</h1>
      <Link to="edit-username">
        <Button className="edit-button" buttonText="Edit Name" />
      </Link>
    </div>
  );
}

export default Header;
