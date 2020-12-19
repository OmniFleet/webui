import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./app/layout/styles.css";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

const rootElement = document.getElementById("root");

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
}

render();
