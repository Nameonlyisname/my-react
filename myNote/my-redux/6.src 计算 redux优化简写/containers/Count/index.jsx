import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";


class Count extends Component {
  //   加法
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value * 1);
  };

  //   减法
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value * 1);
  };

  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 != 0) {
      this.props.jia(value * 1);
    }
  };

  //   异步加
  decrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jiaAsync(value*1,500)
  };

  render() {
    // console.log("UI组件接受到的props是：", this.props);
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.decrementAsync}>异步加</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({ count: state }),
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction,
  }
)(Count);
