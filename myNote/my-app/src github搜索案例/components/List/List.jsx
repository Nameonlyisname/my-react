import React, { Component } from "react";
import "./index.css";

class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎使用</h2>
        ) : isLoading ? (
          <h2>加载中</h2>
        ) : err ? (
          <h2 style={{ color: "red" }}>{err}</h2>
        ) : (
           users.map((userObj) => {
            return (
              <div className="card" key={userObj.id}>
                <a href={userObj.html_url} rel="noreferrer" target="_blank">
                  <img
                    src={userObj.avatar_url}
                    alt="head_portrait"
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default List;
