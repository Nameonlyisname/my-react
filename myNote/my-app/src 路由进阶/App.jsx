import React, { Component } from "react";
import { NavLink, Route, Switch ,Redirect} from "react-router-dom";
import About from "./pages/About"; //路由组件
import Home from "./pages/Home"; //路由组件
import Header from "./components/Header"; //Header一般组件
import MyNavLink from "./components/MyNavLink";

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header></Header>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}

              {/* 编写路由链接 */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home" children="Home" />
              {/* <MyNavLink to="/home/a/b" children="Home" /> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */} 
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Redirect to="about"></Redirect>
                  {/* <Route exact path="/home" component={Home} /> */}
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
