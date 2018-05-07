import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Students extends Component {
  render() {

    let studentIds = [1,2,3,4];

// hit the server. fetch the students. loop them in the below li

    return (
      <div>
        <h2>i m students</h2>
        <ul>
        { studentIds.map((x)=> 

        (<li> <Link to={"/student-list/"+x}>{x}</Link></li> )
) }
        </ul>
        
      </div>
    )
  }
}
