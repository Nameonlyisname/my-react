import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
  getStudentData = () => {
    axios.get("/api1/students").then(
      response => {
        console.log("成功", response.data)
      },
      error => {
        console.log("失败了", error)
      }
    )
  }
  getCarData=()=>{
    axios.get("/api2/cars").then(
      response => {
        console.log("成功", response.data)
      },
      error => {
        console.log("失败了", error)
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>获取学生数据</button>
        <button onClick={this.getCarData}>获取汽车数据</button>
      </div>
    );
  }
}

export default App;