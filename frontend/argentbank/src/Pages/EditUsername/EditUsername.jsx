import React from "react";
import { Link } from "react-router-dom";
import "./edit-username.scss";
import Button from "../../components/Button/Button";
import Accounts from "../../Containers/Accounts/Accounts";
// CF useNavigate(-1) pour revenir sur previous page
function EditUsername() {
  return (
    <main className="main">
      <div className="edit-username">
        <h1 className="edit-username__title">Edit user info</h1>
        <form className="edit-username__form">
          <div className="edit-username__input-wrapper">
            <label htmlFor="username">User name:</label>
            <input type="text" id="username" placeholder="User Name" />
          </div>
          <div className="edit-username__input-wrapper">
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              id="first-name"
              disabled
              placeholder="First Name"
            />
          </div>
          <div className="edit-username__input-wrapper">
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              id="last-name"
              disabled
              placeholder="Last Name"
            />
          </div>
          <div className="edit-username__buttons-wrapper">
            <Button className="edit-username-button" buttonText="Save" />
            <Link to="/user">
              <Button className="edit-username-button" buttonText="Cancel" />
            </Link>
          </div>
        </form>
        <Accounts style="dark" />
      </div>
    </main>
  );
}

export default EditUsername;
