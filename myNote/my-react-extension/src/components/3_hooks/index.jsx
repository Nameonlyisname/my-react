import React, { Component } from "react";
import ReactDOM from "react-dom";

//类式组件
// export default class Demo extends Component {
//   state = { count: 0 };

//   myRef = React.createRef();

//   add = () => {
//     this.setState((state) => ({ count: state.count + 1 }));
//   };

//   show = () => {
//     console.log(this.myRef);
//     alert(this.myRef.current.value);
//   };

//   unmount = () => {
//     // clearInterval(this.timer)
//     ReactDOM.unmountComponentAtNode(document.getElementById("root"));
//   };

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState((state) => ({ count: state.count + 1 }));
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef} />
//         <h2>当前求和{this.state.count}</h2>
//         <button onClick={this.add}>加一</button>
//         <button onClick={this.unmount}>卸载组件</button>
//         <button onClick={this.show}>展示输入信息</button>
//       </div>
//     );
//   }
// }

//函数式组件
export default function Demo() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("name");
  const myRef = React.useRef();

  React.useEffect(() => {
    console.log("无检测");
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  //   React.useEffect(() => {
  //     console.log("检测count");
  //   },[count]);

  function add() {
    console.log("加一");
    // setCount(count + 1);
    setCount((count) => count + 1);
  }

  function changeName() {
    setName((count) => "");
  }

  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  function show() {
    alert(myRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和{count}</h2>
      <h2>名字{name}</h2>
      <button onClick={add}>加一</button>
      <button onClick={changeName}>改名</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>展示输入信息</button>
    </div>
  );
}
