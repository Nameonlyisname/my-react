import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  search = () => {
    const {
      keyWordElement: { value: keyWord },
    } = this;

    this.props.updateAppState({
      isFirst: false,
      isLoading: true,
    });

    // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
    //     res => { console.log("成功", res.data) },
    //     error => { console.log("失败", error) }
    // )
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      (res) => {
        this.props.updateAppState({
          isLoading: false,
          users: res.data.items,
        });
      },
      (error) => {
        this.props.updateAppState({
          isLoading: false,
          err: error.message,
        });
      }
    );
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
