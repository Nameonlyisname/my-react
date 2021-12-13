import React, { Component } from "react";
import List from "./components/List/List";
import Search from "./components/Search/Search";
class App extends Component {
  state = {
    users: [], //初始状态，users初始为数组
    isFirst:true,//是否为第一次打开网页
    isLoading:false,//是否加载中
    err:"",//存储请求错误信息
  };

  updateAppState = (stateObj) => {
     this.setState(stateObj)
  };


  render() { 
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state}/>
      </div>
    );
  }
}

export default App;
