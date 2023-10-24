import { createStore } from "redux";
const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//----------------------------------------
//                STATE                  -
//----------------------------------------
// State Initial
const initialState = {
  value: " Initial value",
  isConnected: true,
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
// export const toggleConnexion = () => console.log("clikkk !!");
// cette action a pour but d'inverser la valeur isConnected
export const toggleConnexion = () => ({
  type: "toggleConnexion",
});
// //-----------------------------------------
//               REDUCER                  -
//-----------------------------------------
// Prend une action et un state en paramètres, et retourne un state.

function reducer(state, action) {
  switch (action.type) {
    case "toggleConnexion":
      return {
        ...state,
        isConnected: !state.isConnected,
      };
    case "firstTest":
      return {
        ...state,
        value: action.payload.value,
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
