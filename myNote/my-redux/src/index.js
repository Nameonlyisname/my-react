import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  /*  需要用Provider包裹app，让App所有的后代容器组件接受到store */
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
