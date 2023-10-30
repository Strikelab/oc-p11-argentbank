import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken, setUserProfile } from "../store"; // Import Redux actions
import Router from "../Router/Router";

function App() {
  const dispatch = useDispatch();

  // Retrieving data from localStorage on app initialization
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserProfile = localStorage.getItem("userProfile");

    if (storedToken && storedUserProfile) {
      // Dispatch actions to populate the Redux store with the stored data
      dispatch(setToken(storedToken));
      dispatch(setUserProfile(JSON.parse(storedUserProfile)));
    }
  }, [dispatch]);

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
