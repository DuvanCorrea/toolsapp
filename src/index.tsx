import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Storefn from "./redux/store/index";
import { Provider } from "react-redux";
import "./index.css";

const Store = Storefn();

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
