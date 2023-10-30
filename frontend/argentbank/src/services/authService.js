// authService.js
import { setToken, setUserProfile, setConnexionFlag } from "../store";
import { loginUser as apiLoginUser, fetchUserProfile } from "./apiService";

export const logout = (dispatch) => {
  // Clear user information from localStorage
  localStorage.removeItem("token");
  localStorage.removeItem("userProfile");
  localStorage.removeItem("isConnected"); // If you set this value

  // Reset the Redux state by dispatching appropriate actions
  dispatch(setToken(""));
  dispatch(setUserProfile({}));
  dispatch(setConnexionFlag(false)); // If you set this value
};

export const loginUser = async (userName, password, dispatch, navigate) => {
  try {
    const loginData = await apiLoginUser(userName, password);
    const token = loginData.body.token;

    dispatch(setToken(token));
    localStorage.setItem("token", token);

    dispatch(setConnexionFlag(true));
    localStorage.setItem("isConnected", "true");

    const userProfileData = await fetchUserProfile(token);
    const userProfile = userProfileData.body;
    dispatch(setUserProfile(userProfile));
    localStorage.setItem("userProfile", JSON.stringify(userProfile));

    navigate("/profile");
    // Return null or an empty string to indicate success (no error)
    return "";
  } catch (error) {
    // Handle API call errors, e.g., show an error message to the user
    // Return the error message as a string
    return "Failed to sign in. Please try again.";
  }
};
