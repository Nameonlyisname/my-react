import count from "./count";
import person from "./person";
import { combineReducers } from "redux"; //引入combineReducers，用于汇总多个reducer

// 汇总reducer变为一个总的reducer
export default combineReducers({
  count,
  person,
});
