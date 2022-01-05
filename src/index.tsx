import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StoreProvider from "./redux/Provider/StoreProvider";
const rootElement = document.getElementById("root");

render(
  <StoreProvider >
    <App />
  </StoreProvider>,
  rootElement
);
reportWebVitals();
