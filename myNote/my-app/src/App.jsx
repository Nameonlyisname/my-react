import React, { Component } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { WechatOutlined } from "@ant-design/icons";

export default class App extends Component {
  render() {
    return (
      <div>
        <button>点击</button>
        <Button type="primary">点击</Button>
        <Button>点击</Button>
        <WechatOutlined />
      </div>
    );
  }
}
