import React, { Component } from "react";
import PubSub from "pubsub-js";
class Search extends Component {
  search = async () => {
    const {
      keyWordElement: { value: keyWord },
    } = this;

    // 使用fetch发送网络请求(未优化)
    // fetch(`/api1/search/users2?q=${keyWord}`)
    //   .then(
    //     (res) => {
    //       console.log("联系服务器成功");
    //       return res.json();
    //     },
    //     (error) => {
    //       console.log("联系服务器成功失败");
    //       return new Promise(()=>{})
    //     }
    //   )
    //   .then(
    //     (res) => {
    //       console.log("获取数据成功", res);
    //     },
    //     (error) => {
    //       console.log("获取数据失败", error);
    //     }
    //   )

    // fetch(优化)
    try {
      const response = await fetch(`/api1/search/users2?q=${keyWord}`);
      const data = await response.json();
      console.log(data);
      PubSub.publish("handleMessage", { isFirst: false, users: data.items });
    } catch (error) {
      console.log("请求出错", error);
      PubSub.publish("handleMessage", { isLoading: false, err: error.message });
    }
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="输入关键词点击搜索"
          />
          &nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}

export default Search;
