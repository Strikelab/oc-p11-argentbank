import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken, setConnexionFlag, setUserProfile } from "../../store";
import Button from "../../components/Button/Button";
import "./sign-in.scss";
import { useDispatch } from "react-redux";
import { loginUser, fetchUserProfile } from "../../services/apiService";
import { isNotEmpty, isValidEmail } from "../../services/validationService";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Define local state variables for controlled inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isNotEmpty(username)) {
      setError("Username is required.");
      return;
    }
    if (!isValidEmail(username)) {
      setError("Username must be a valid email address.");
      return;
    }
    if (!isNotEmpty(password)) {
      setError("Password is required.");
      return;
    }

    try {
      // call API to get token
      const loginData = await loginUser(username, password);
      const token = loginData.body.token;

      dispatch(setToken(token));
      localStorage.setItem("token", token);

      dispatch(setConnexionFlag(true));
      localStorage.setItem("isConnected", "true");

      setError(""); // Clear any previous error message

      const userProfileData = await fetchUserProfile(token);
      const userProfile = userProfileData.body;
      dispatch(setUserProfile(userProfile));
      localStorage.setItem("userProfile", JSON.stringify(userProfile));

      navigate("/profile");
    } catch (error) {
      setError("Failed to sign in. Please try again.");
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={
                error && (!isNotEmpty(username) || !isValidEmail(username)) ? "error" : ""
              }
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={error && !isNotEmpty(password) ? "error" : ""}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <Button type="submit" className="sign-in-button" buttonText="Sign In" />
        </form>
        {error && <div className="error-message">{error}</div>}
      </section>
    </main>
  );
}

export default SignIn;
