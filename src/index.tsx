import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.render(
  // <Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </Provider>,
  document.getElementById("root")
);
