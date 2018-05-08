import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Sidebar extends Component {
  constructor() {
    super();
  }

  componentWillMount() {}

  render() {
    let menus = [
      {
        to: "/",
        text: "Home"
      },
      {
        to: "/teacher-list",
        text: "Teachers"
      },
      {
        to: "/course-list",
        text: "Courses"
      }
    ];

    return (
      <div class="side-menu">
        <nav class="navbar navbar-default" role="navigation">
          <div class="side-menu-container">
            <ul class="nav navbar-nav">          
              {menus.map(x => (
                <li>                 
                  <Link to={x.to}>{x.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
