import React, { Component } from 'react'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./index.css"

class App extends Component {

  state = {
    todos: [
      {
        id: "001",
        name: "吃饭",
        status: true
      },
      {
        id: "002",
        name: "睡觉",
        status: false
      },
      {
        id: "003",
        name: "学习",
        status: true
      },
    ]
  }

  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }

  updateTodo = (id, status) => {
    const { todos } = this.state
    const newTodos = todos.map(todoObj => {
      if (todoObj.id === id) return { ...todoObj, status }
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter(todoObj => {
      // if(todoObj.id!==id)return todoObj
      return todoObj.id !== id
    })
    this.setState({ todos: newTodos })
  }

  checkAllTodo = (status) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, status}
    })
    this.setState({ todos: newTodos })
  }

  clearAll=()=>{
    const { todos } = this.state
    const newTodos= todos.filter((todoObj)=>{
      return !todoObj.status 
    })
    this.setState({todos:newTodos})
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container" >
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAll={this.clearAll}></Footer>
        </div>
      </div >
    )
  }
}

export default App;
