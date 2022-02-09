import React from "react";
import "../public/styles/main.css";
import ReactDOM from "react-dom";
import App from "./App";
import { disableReactDevTools } from "./config/disableReactDevTools";
import { Provider } from "react-redux";
import { store } from "./redux/store";

process.env.NODE_ENV === "production" && disableReactDevTools();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
