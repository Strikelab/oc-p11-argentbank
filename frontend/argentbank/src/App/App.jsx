//App.jsx
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken, setConnexionFlag, setUserProfile } from "../store/userSlice"; // Import Redux actions
import Router from "../Router/Router";
import { fetchUserProfile } from "../services/apiService"; // Import the API service function to fetch user profile

function App() {
  const dispatch = useDispatch();

  // The purpose is to deal with refreshing pages

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      // Dispatch action to populate the Redux store with the stored token
      dispatch(setToken(storedToken));
      dispatch(setConnexionFlag(true)); // Set the connection flag to true

      // Fetch user profile data using the token and update the Redux store
      fetchUserProfile(storedToken)
        .then((userProfileData) => {
          const userProfile = userProfileData.body;
          dispatch(setUserProfile(userProfile));
        })
        .catch((error) => {
          if (error.message === "invalid token") {
            dispatch(setConnexionFlag(false)); // Set the connection flag to false
            console.error("Invalid token. Logging out.");
          }

          console.error("Error fetching user profile:", error);
        });
    }
  }, [dispatch]);

  return <Router />;
}

export default App;
