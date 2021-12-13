import React, { Component } from 'react';
import "./index.css"

class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    handleClearAll=()=>{
        this.props.clearAll()
    }
    render() {
        const { todos } = this.props
        const finish = todos.reduce((pre, todo) => pre + todo.status, 0)
        const total = todos.length
        return (

            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={finish === total && total !== 0 ? true : false} onChange={this.handleCheckAll} />
                </label>
                <span>
                    <span>已完成{finish}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAll}>清除已完成任务</button>
            </div>

        );
    }
}

export default Footer;