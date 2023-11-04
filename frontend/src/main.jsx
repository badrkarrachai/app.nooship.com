import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Login from "./Auth/Login.jsx";
import { store } from "./redux/Store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
