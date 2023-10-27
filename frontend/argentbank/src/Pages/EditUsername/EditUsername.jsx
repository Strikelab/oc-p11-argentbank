import React from "react";
import { useNavigate } from "react-router-dom";
import "./edit-username.scss";
import Button from "../../components/Button/Button";
import Accounts from "../../Containers/Accounts/Accounts";
import { useSelector } from "react-redux";
// CF useNavigate(-1) pour revenir sur previous page
function EditUsername() {
  const navigate = useNavigate()
  const {firstName, lastName, userName} = useSelector((state) => state.userProfile);
  return (
    <main className="main">
      <div className="edit-username">
        <h1 className="edit-username__title">Edit user info</h1>
        <form className="edit-username__form">
          <div className="edit-username__input-wrapper">
            <label htmlFor="username">User name:</label>
            <input type="text" id="username" placeholder={userName} />
          </div>
          <div className="edit-username__input-wrapper">
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              id="first-name"
              disabled
              placeholder={firstName}
            />
          </div>
          <div className="edit-username__input-wrapper">
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              id="last-name"
              disabled
              placeholder={lastName}
            />
          </div>
          <div className="edit-username__buttons-wrapper">
            <Button className="edit-username-button" buttonText="Save" />
            {/* <Link to={navigate(0)}> */}
            {/* <Link to={navigate(0)}> */}
              <Button handleClick={()=>navigate("/profile")} className="edit-username-button" buttonText="Cancel" />
            {/* </Link> */}
          </div>
        </form>
        <Accounts style="dark" />
      </div>
    </main>
  );
}

export default EditUsername;
