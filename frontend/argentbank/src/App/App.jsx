import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken, setUserProfile, setConnexionFlag } from "../store"; // Import Redux actions
import Router from "../Router/Router";

function App() {
  const dispatch = useDispatch();
  

  // Retrieving data from localStorage on app initialization
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserProfile = JSON.parse(localStorage.getItem("userProfile"));

    if (storedToken && storedUserProfile) {
      // Dispatch actions to populate the Redux store with the stored data
      dispatch(setToken(storedToken));
      dispatch(setUserProfile(storedUserProfile));
      dispatch(setConnexionFlag(true)); // Set the connection flag to true
    }
  }, [dispatch]);

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
