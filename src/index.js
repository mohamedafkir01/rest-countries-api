import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import {Provider} from "context";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
