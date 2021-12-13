import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";
class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age };
    this.props.jiaren(personObj);
    this.nameNode.value=""
    this.ageNode.value=""
  };
  render() {
    return (
      <div>
        <h1>Person组件,上方组件的和为：{this.props.he}</h1>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="输入名字"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.yiqunren.map((item) => {
            return (
              <li key={item.id}>
                姓名：{item.name} 年龄：{item.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ yiqunren: state.rens,he:state.he }), {
  jiaren: createAddPersonAction,
})(Person);
