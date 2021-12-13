import React, { PureComponent } from "react";
import Child from "./Child";

export default class Parent extends PureComponent {
  state = {
    hasError: "", //标识子组件是否产生错误
  };

  // Parent的子组件出现错误是，触发getDerivedStateFromError，并携带错误信息
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: error };
  }

  componentDidCatch(){
    console.log("统计错误，反馈给服务器，用于通知编码人员进行解决")
  }

  render() {
    return (
      <div>
        <h2>Parent</h2>
        {this.state.hasError ? <h2>当前网络故障</h2> : <Child></Child>}
      </div>
    );
  }
}
