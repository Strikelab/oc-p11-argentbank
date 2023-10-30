// SignIn.jsx
import React, {useState} from "react";
import {useNavigate }from "react-router-dom";
import { setToken, setConnexionFlag, setUserProfile } from "../../store";
import Button from "../../components/Button/Button";
import "./sign-in.scss";
import { useDispatch } from "react-redux";
import { loginUser, fetchUserProfile } from "../../services/apiService"; // Import the API service functions
import { isNotEmpty, isValidEmail } from "../../services/validationService"

function SignIn() {
  const navigate = useNavigate()
  const dispatch= useDispatch()
  
  // Define local state variables for controlled inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store validation error messages

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!isNotEmpty(username)) {
    setError("Username is required.");
    console.log(error)
    return;
  }
  if (!isValidEmail(username)) {
    setError("Username must be a valid email address.");
    console.log(error)
    return;
  }
  if (!isNotEmpty(password)) {
    setError("Password is required.");
    console.log(error)
    return;
  }


  try {
    // call API to get token
    const loginData = await loginUser(username, password); // local state value
    const token = loginData.body.token;
    // store token 
    dispatch(setToken(token));
    localStorage.setItem("token", token);
    // store isConnected Flag
    dispatch(setConnexionFlag(true));
    localStorage.setItem( "isConnected", "true")
    //Clear any previous error message
    setError("");
    // call API to get user profile
    const userProfileData = await fetchUserProfile(token);
    const userProfile = userProfileData.body;
    // store user profile
    dispatch(setUserProfile(userProfile));
    localStorage.setItem("userProfile", JSON.stringify(userProfile))
    // user redirection
    navigate("/profile");
  } catch (error) {
    // Handle API call errors, e.g., show an error message to the user
    setError("Failed to sign in. Please try again.");
  }
};

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e)=>handleSubmit(e)} autoComplete="off">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            id="username" 
            value={username} 
            onChange ={(e)=>setUsername(e.target.value)} // Update local state 
          />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update local state
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
     
            <Button type="submit" className="sign-in-button" buttonText="Sign In" />
          
        </form>
      </section>
    </main>
  );
}

export default SignIn;
