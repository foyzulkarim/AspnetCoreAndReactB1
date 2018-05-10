import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HttpService from './HttpService';

export default class Teachers extends Component {

  constructor(){
    super();
    this.state = {teachers : [], selectedTeachers : []};
    this.handleTeacherSearch = this.handleTeacherSearch.bind(this);
    this.addToSelectedList = this.addToSelectedList.bind(this);
  }

  handleTeacherSearch (event){
      console.log(event.target.value);
      let self = this;
      let request = {keyword : event.target.value};
      let http = new HttpService();
      http.post(request,"/api/teachers/search").then(response=> {
          self.setState({teachers : response.item1});
      });    
  }

  addToSelectedList(model){
    let tempArray = this.state.selectedTeachers;
    tempArray.push(model);
    this.setState({selectedTeachers : tempArray});
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
    <input type='text' onChange={this.handleTeacherSearch}/>
      <ul>
        {this.state.teachers.map((t)=>
        <li><Link to={'/teacher-list/'+t.id}>{t.name}</Link> <button onClick={()=>this.addToSelectedList(t)}>add me</button></li> 
        )}
      </ul>
      <div>
        <a href="/teacher-entry">Add new teacher</a>
      </div>
      <div>
      {this.state.selectedTeachers.length}
      
      </div>
    </div>;
  }
}
