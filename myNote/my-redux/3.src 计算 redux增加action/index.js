import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(<App></App>, document.getElementById("root"));


store.subscribe(() => {
  ReactDOM.render(<App></App>, document.getElementById("root"));
});
