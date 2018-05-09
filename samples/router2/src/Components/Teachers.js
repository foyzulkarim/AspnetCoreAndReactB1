import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HttpService from './HttpService';

export default class Teachers extends Component {

  constructor(){
    super();
    this.state = {teachers : []};
  }

  componentDidMount() {
    let self = this;
    let request = {};
    let http = new HttpService();
    http.post(request,"/api/teachers/search").then(response=> {
        self.setState({teachers : response.item1});
    });    
  }

  render() {
    return <div>
      <ul>
        {this.state.teachers.map((t)=>
        <li><Link to={'/teacher-list/'+t.id}>{t.name}</Link> </li>
        )}
      </ul>
    </div>;
  }
}
