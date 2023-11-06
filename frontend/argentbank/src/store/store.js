// store.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Importez votre slice ici
import thunk from "redux-thunk";

const store = configureStore({
  reducer: userReducer, // Utilisez votre slice comme réducteur
  middleware: [...getDefaultMiddleware(), thunk],
  devTools: true,
});

export default store;
