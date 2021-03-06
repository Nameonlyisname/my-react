/* 
    专门为count组件生成action对象
*/
import { DECREMENT, INCREMENT } from "../constant";

// 同步action，指action的值为object类型的一般对象
export const increment = (data) => ({ type: INCREMENT, data });
export const decrement = (data) => ({ type: DECREMENT, data });

// 异步action，指action的值为函数，异步action中一般都会调用同步action,异步action不是必须要用的
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data));
    }, time);
  };
};
