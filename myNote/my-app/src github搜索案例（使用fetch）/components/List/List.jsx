import React, { Component } from "react";
import "./index.css";
import PubSub from "pubsub-js";

class List extends Component {
  state = {
    users: [], //初始状态，users初始为数组
    isFirst: true, //是否为第一次打开网页
    isLoading: false, //是否加载中
    err: "", //存储请求错误信息
  };

  componentDidMount(){
    PubSub.subscribe("handleMessage",(_,stateObj)=>{
        this.setState(stateObj)
    })
  } 

  render() {
    const { users, isFirst, isLoading, err } = this.state;
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
