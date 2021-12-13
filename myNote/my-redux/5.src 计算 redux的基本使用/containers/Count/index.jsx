import CountUI from "../../components/Count";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from "../../redux/count_action";
import { connect } from "react-redux";

// mapStateToProps函数的返回对象作为状态传递给了ui组件
// 返回的对象中的key作为传递给ui组件props的key，value就作为传递给ui组件props的value
// mapStateToProps用于传递状态
function mapStateToProps(state) {
  return { count: state };
}

// mapDispatchToProps函数的返回对象作为状态传递给了ui组件
// 返回的对象中的key作为传递给ui组件props的key，value就作为传递给ui组件props的value
// mapDispatchToProps用于传递操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    jia: (num) => dispatch(createIncrementAction(num)),
    jian: (num) => dispatch(createDecrementAction(num)),
    jiaAsync:(num,time)=>dispatch(createIncrementAsyncAction(num,time))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI); //创建并暴露一个Count的容器组件
