import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  setToken,
  setConnexionFlag,
  setUserProfile,
} from "../../store/userSlice";
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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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
      // 1 - call API to get token
      const loginData = await loginUser(username, password);
      const token = loginData.body.token;

      dispatch(setToken(token));
      localStorage.setItem("token", token);
      dispatch(setConnexionFlag(true));
      // Clear any previous error message
      setError("");
      // 2 - Use token to fetch User Profile
      const userProfileData = await fetchUserProfile(token);
      const userProfile = userProfileData.body;
      dispatch(setUserProfile(userProfile));
      navigate("/profile");
    } catch (error) {
      setError(error.message);
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
                error && (!isNotEmpty(username) || !isValidEmail(username))
                  ? "error"
                  : ""
              }
              autoComplete="username"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={error && !isNotEmpty(password) ? "error" : ""}
              autoComplete="current-password"
            />
            <span
              className={`password-toggle-icon ${
                showPassword ? "reveal-icon fa fa-eye-slash" : "fa fa-eye"
              }`}
              onClick={togglePasswordVisibility}
            ></span>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <Button
            type="submit"
            className="sign-in-button"
            buttonText="Sign In"
          />
        </form>
        {error && <div className="error-message">{error}</div>}
      </section>
    </main>
  );
}

export default SignIn;
