import React, { PureComponent } from "react";

export default class Child extends PureComponent {
  state = {
    // users: [
    //   { id: "1", name: "tom", age: 18 },
    //   { id: "2", name: "jack", age: 18 },
    // ],
    users: "a",
  };
  render() {
    return (
      <div>
        <h2>Child</h2>
        {this.state.users.map((obj) => {
          return (
            <h4 key={obj.id}>
              {obj.name}----{obj.age}
            </h4>
          );
        })}
      </div>
    );
  }
}
