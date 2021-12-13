import thunk from "redux-thunk";//用于支持异步action
import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers"

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
