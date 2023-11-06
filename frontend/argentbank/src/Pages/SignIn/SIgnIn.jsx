//SignIn.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./sign-in.scss";
import { useDispatch } from "react-redux";
import { isNotEmpty, isValidEmail } from "../../services/validationService";
import { signInAsync } from "../../store/userSlice";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Local state to check form inputs and display error messages to the user.
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    error: "",
    showPassword: false,
    rememberMe: false,
  });
  // Toggle password visibility for the password input field.
  const togglePasswordVisibility = () => {
    setFormState({
      ...formState,
      showPassword: !formState.showPassword,
    });
  };
  // Handle form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password, rememberMe } = formState;

    if (!isNotEmpty(username)) {
      setFormState({ ...formState, error: "Username is required." });
      return;
    }
    if (!isValidEmail(username)) {
      setFormState({
        ...formState,
        error: "Username must be a valid email address.",
      });
      return;
    }
    if (!isNotEmpty(password)) {
      setFormState({ ...formState, error: "Password is required." });
      return;
    }
    // Dispatch the signInAsync action to handle user authentication.
    const signInResult = await dispatch(
      signInAsync(username, password, rememberMe)
    );
    if (signInResult === true) {
      navigate("/profile"); // Redirect to the user profile page on success.
    } else if (signInResult && signInResult.success === false) {
      setFormState({ ...formState, error: signInResult.error.message });
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
              value={formState.username}
              onChange={(e) =>
                setFormState({ ...formState, username: e.target.value })
              }
              className={
                formState.error &&
                (!isNotEmpty(formState.username) ||
                  !isValidEmail(formState.username))
                  ? "error"
                  : ""
              }
              autoComplete="username"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type={formState.showPassword ? "text" : "password"}
              id="password"
              value={formState.password}
              onChange={(e) =>
                setFormState({ ...formState, password: e.target.value })
              }
              className={
                formState.error && !isNotEmpty(formState.password)
                  ? "error"
                  : ""
              }
              autoComplete="current-password"
            />
            <span
              className={`password-toggle-icon ${
                formState.showPassword
                  ? "reveal-icon fa fa-eye-slash"
                  : "fa fa-eye"
              }`}
              onClick={togglePasswordVisibility}
            ></span>
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={formState.rememberMe}
              onChange={() =>
                setFormState({
                  ...formState,
                  rememberMe: !formState.rememberMe,
                })
              }
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <Button
            type="submit"
            className="sign-in-button"
            buttonText="Sign In"
          />
        </form>
        {formState.error && (
          <div className="error-message">{formState.error}</div>
        )}
      </section>
    </main>
  );
}

export default SignIn;
