import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

class MyNavLink extends Component {
  render() {
    return (
      <NavLink
        activeClassName="activeMenu"
        className="list-group-item"
        {...this.props}
      ></NavLink>
    );
  }
}

export default MyNavLink;
