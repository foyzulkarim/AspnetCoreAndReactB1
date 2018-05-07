import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Main from "./Main";

export default class MyApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Sidebar />
          <Main />
        </div>
      </Router>
    );
  }
}
