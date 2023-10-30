// authService.js
import { setToken, setUserProfile, setConnexionFlag } from "../store";

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
