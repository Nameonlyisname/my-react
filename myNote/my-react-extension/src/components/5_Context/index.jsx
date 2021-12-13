import React, { Component } from "react";
import "./index.css";

// 创建context对象
const MyContext = React.createContext();

// Provider只能用在类式组件，Consumer均可
const { Provider, Consumer } = MyContext;

export default class A extends Component {
  state = { userName: "A", age: "18" };
  render() {
    const { userName, age } = this.state;
    return (
      <div className="parent">
        <h3>A组件</h3>
        <h4>用户名：{userName}</h4>
        <h4>年龄：{age}</h4>
        <Provider value={{ userName, age }}>
          <B></B>
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    console.log("B中接收到的Context", this.context);
    return (
      <div className="child">
        <h3>B组件</h3>
        <C> </C>
      </div>
    );
  }
}

class C extends Component {
  // 谁声明谁接收
  static contextType = MyContext;
  render() {
    console.log("C中接收到的Context", this.context);
    const { userName, age } = this.context;
    return (
      <div className="grand">
        <h3>C组件</h3>
        <h4>Provider获取A组件的用户名：{userName}</h4>
        <h4>Provider获取A组件的年龄：{age}</h4>
        <h4>
          Consumer获取A组件的用户名：
          <Consumer>{(value) => value.userName}</Consumer>
        </h4>
        <h4>
          Consumer获取A组件的年龄：
          <Consumer>{(value) => value.age}</Consumer>
        </h4>
      </div>
    );
  }
}

// function C() {
//   return (
//     <div className="grand">
//       <h3>C组件</h3>
//       <h4>
//         从A组件接受到的用户名：
//         <Consumer>{(value) => value.userName}</Consumer>
//       </h4>
//       <h4>
//         从A组件接受到的年龄：
//         <Consumer>{(value) => value.age}</Consumer>
//       </h4>
//     </div>
//   );
// }
