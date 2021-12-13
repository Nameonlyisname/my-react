import React, { Component,PureComponent } from "react";
import "./index.css";

export default class Parent extends PureComponent {
  state = { carName: "卡丁车" };

  changeCar = () => {
    this.setState({ carName: "没了" });
    // this.setState({  });
  };

//   shouldComponentUpdate(nextProps, nextState) {
//     return !this.state.carName === nextState.carName 
//   }

  render() {
    console.log("Parent---render");
    const { carName } = this.state;
    return (
      <div className="parent">
        <h3>Parent组件</h3>
        <h4>车名：{carName}</h4>
        <button onClick={this.changeCar}>换车</button>
        {/* <Child carName={carName}></Child> */}
        <Child></Child>
      </div>
    );
  }
}

class Child extends PureComponent {
//   shouldComponentUpdate(nextProps, nextState) { 
//     return this.props.carName === nextProps.carName
//   }

  render() {
    console.log("Child---render");
    return (
      <div className="child">
        <h3>Child组件</h3>
        <h4>接到的车是:{this.props.carName}</h4>
      </div>
    );
  }
}
