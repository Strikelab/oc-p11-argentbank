import { configureStore } from "@reduxjs/toolkit"; // Import configureStore from @reduxjs/toolkit
import thunk from "redux-thunk"; // Import redux-thunk
//----------------------------------------
//                STATE                  -
//----------------------------------------
// State Initial
const initialState = {
  isConnected: false,
  token: null,
  userProfile: {},
};

//-----------------------------------------
//                ACTIONS                 -
//-----------------------------------------
// Action créator
export const firstTest = (value) => ({
  type: "firstTest",
  payload: { value: value },
});

export const setConnexionFlag = (isConnected) => ({
  type: "setConnexionFlag",
  payload: { isConnected: isConnected },
});
export const setToken = (token) => ({
  type: "setToken",
  payload: { token: token },
});
export const setUserProfile = (userProfile) => ({
  type: "setUserProfile",
  payload: {
    userProfile: userProfile,
  },
});
// //-----------------------------------------
//               REDUCER                  -
//-----------------------------------------
// Takes action and state as parameter and return a state.
function reducer(state, action) {
  switch (action.type) {
    case "setConnexionFlag":
      return {
        ...state,
        isConnected: action.payload.isConnected,
      };

    case "setToken":
      return {
        ...state,
        token: action.payload.token,
      };
    case "setUserProfile":
      return {
        ...state,
        userProfile: action.payload.userProfile,
      };

    default:
      return state;
  }
}
//-----------------------------------------
//               STORE                    -
//-----------------------------------------
// Create the Redux store with configureStore
const store = configureStore({
  reducer: reducer, // reducer
  middleware: [thunk],
  preloadedState: initialState, // Set the initial state
  devTools: true, // Enable Redux DevTools
});

export default store;
