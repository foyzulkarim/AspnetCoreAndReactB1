import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Sidebar extends Component {
 
  constructor() {
    super();
  }

  menus : [];

  componentWillMount() {}

  render() {    
   let menus = [
        {
        to: '/', text:'Home'
    },
    {
        to: '/student-list', text : 'Students'
    }];

    return (      
        <div>
          I am sidebar
          <ul style={{ listStyleType: "none", padding: 0 }}>
          { menus.map((x)=> 

(<li> <Link to={x.to}>{x.text}</Link></li> )
) }                
          </ul>         
        </div>        
    );
  }
}
