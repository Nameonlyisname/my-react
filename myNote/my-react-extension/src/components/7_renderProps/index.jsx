import React, { PureComponent } from "react";
import "./index.css";

export default class Parent extends PureComponent {
  render() {
    return (
      <div className="parent">
        <h3>Parent</h3>
        {/* <A>hello</A> */}

        {/* <A>
          <B></B>
        </A> */}

        <A render={(name) => <B name={name}></B>}></A>
      </div>
    );
  }
}

class A extends PureComponent {
  state = { name: "??" };
  render() {
    console.log(this.props);
    const {name}=this.state
    return (
      <div className="a">
        <h3>A</h3>
        {/* {this.props.children} */}

        {this.props.render(name)}
      </div>
    );
  }
}

class B extends PureComponent {
  render() {
      console.log(this)
    return (
      <div className="b">
        <h3>B</h3>
        {this.props.name}
      </div>
    );
  }
}
