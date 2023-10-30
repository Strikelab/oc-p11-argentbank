// api.js
//eslint-disable-next-line no-undef
const API_URL = process.env.REACT_APP_API_PATH; // Get the API URL from your environment variables

// Function to make a POST request to the login endpoint
export const loginUser = async (email, password) => {
  const requestUrl = `${API_URL}/user/login`;
  const requestHeaders = {
    "Content-Type": "application/json",
  };
  const requestBody = {
    email,
    password,
  };
  //eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(requestUrl, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: requestHeaders,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to login");
    }
  } catch (error) {
    throw error;
  }
};

// Function to fetch user profile after login
export const fetchUserProfile = async (token) => {
  const requestUrl = `${API_URL}/user/profile`;
  const requestHeaders = {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  //eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(requestUrl, {
      method: "POST", // Change this to GET if the profile request is a GET request
      headers: requestHeaders,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch user profile");
    }
  } catch (error) {
    throw error;
  }
};
