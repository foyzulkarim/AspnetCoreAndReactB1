import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Students from "./Students";
import Home from "./Home";
import StudentDetail from "./StudentDetail";

export default class Main extends Component {
  render() {
  let routes = [
      {
        path: "/",
        exact: true,      
        componentName: Home
      },       
      {
        path: "/student-list",
        exact: true,
        componentName: Students
      },
      {
        path: "/student-list/:id",
        exact: true,
        componentName: StudentDetail
      }
    ];

    return (
      <div class="container-fluid"> 
       <div class="side-body"> 
          {
              routes.map((route,index)=>(
                  <Route path={route.path} exact={route.exact} component={route.componentName}/>))
          }
        </div>
      </div>
    );
  }
}
