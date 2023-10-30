import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./edit-username.scss";
import Button from "../../components/Button/Button";
import Accounts from "../../Containers/Accounts/Accounts";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../services/apiService";
import { setUserProfile } from "../../store";

function EditUsername() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { firstName, lastName, userName } = useSelector((state) => state.userProfile);
  const token = useSelector((state) => state.token);

  const [newUsername, setNewUsername] = useState(userName);
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newUsername) {
      setError("Username is required.");
      return;
    }

    // Call the API service to update the username
    updateProfile(token, newUsername)
      .then((response) => {
        if (response && response.body) {
          // Dispatch the set user profile action with the updated user profile data
          dispatch(setUserProfile(response.body));
          navigate("/profile"); // Redirect to the profile page
        } else {
          setError("Failed to update username. Please try again.");
        }
      })
      .catch((error) => {
        console.log(error)
        setError("An error occurred while updating the username.");
      });
  };

  return (
    <main className="main">
      <div className="edit-username">
        <h1 className="edit-username__title">Edit user info</h1>
        <form className="edit-username__form" onSubmit={handleSubmit}>
          <div className="edit-username__input-wrapper">
            <label htmlFor="username">User name:</label>
            <input
              type="text"
              id="username"
              placeholder={userName}
              value={newUsername}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="edit-username__input-wrapper">
            <label htmlFor="first-name">First Name:</label>
            <input type="text" id="first-name" disabled placeholder={firstName} />
          </div>
          <div className="edit-username__input-wrapper">
            <label htmlFor="last-name">Last Name:</label>
            <input type="text" id="last-name" disabled placeholder={lastName} />
          </div>
          <div className="edit-username__buttons-wrapper">
            <Button type="submit" className="edit-username-button" buttonText="Save" />
            <Button
              onClick={() => navigate("/profile")}
              className="edit-username-button"
              buttonText="Cancel"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>
        <Accounts style="dark" />
      </div>
    </main>
  );
}

export default EditUsername;
