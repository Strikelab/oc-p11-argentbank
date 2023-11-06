//index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.scss";
// On importe le provider
import { Provider } from "react-redux";
// On importe le store
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
