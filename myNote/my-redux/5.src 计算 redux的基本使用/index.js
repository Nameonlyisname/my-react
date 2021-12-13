import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(<App></App>, document.getElementById("root"));

//监测redux中状态的改变，如果redux的状态发生了改变，则重新渲染app
store.subscribe(() => {
  ReactDOM.render(<App></App>, document.getElementById("root"));
});
