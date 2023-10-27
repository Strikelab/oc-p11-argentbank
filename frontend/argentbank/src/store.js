import { legacy_createStore as createStore } from "redux";
const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//----------------------------------------
//                STATE                  -
//----------------------------------------
// State Initial
const initialState = {
  isConnected: false,
  token: "",
  userProfile: {},
};

//-----------------------------------------
//                ACTIONS                 -
//-----------------------------------------
//Objet Javascript
//Décrire la raison de changement de state
//Propriété obligatoire : type
//Propriété optionnelle : payload

// const monTestAction = {
//   type = "monTest"
//   payload:{uneValeur:"maValeur"}
// }

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
// Prend une action et un state en paramètres, et retourne un state.

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
// on crée le store avec le state et le reducer
export const store = createStore(reducer, initialState, reduxDevtools);
