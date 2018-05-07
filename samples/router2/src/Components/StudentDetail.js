import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class StudentDetail extends Component {

    componentWillMount() {
    
    
    }

    componentDidMount(){
        // we need the paramter
    let p = this.props;
    console.log(p.match.params.id);

        // axios call to server
        // then do the set state
    }

  render() {

    // we need the paramter
    let p = this.props;
    
    return (
      <div>
        <h1>I am student detail {p.match.params.id}</h1>
        <h3><Link to="/student-list">Students</Link></h3>
      </div>
    )
  }
}

