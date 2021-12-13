import React, { Component } from "react";
import qs from "querystring";

const DetailData = [
  { id: "1", content: "内容1" },
  { id: "2", content: "内容2" },
  { id: "3", content: "内容3" },
];

class Detail extends Component {
  render() {
    console.log(this.props);
    //接收params
    // const { id, title } = this.props.match.params;

    // 接收search参数
    // const { search } = this.props.location;
    // const { id, title } = qs.parse(search.slice(1));

    // 接收state参数
    const { id, title } = this.props.location.state || {};

    const findResult =
      DetailData.find((detailObj) => {
        return detailObj.id === id;
      }) || {};
    return (
      <ul>
        <li>ID:{id}</li>
        <li>标题:{title}</li>
        <li>内容:{findResult.content}</li>

        {/* <li>ID:??</li>
        <li>标题:??</li>
        <li>内容:?</li> */}
      </ul>
    );
  }
}

export default Detail;
