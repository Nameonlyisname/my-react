import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,

  //   <HashRouter>
  //     <App></App>
  //   </HashRouter>,

  <App></App>,
  document.getElementById("root")
);
