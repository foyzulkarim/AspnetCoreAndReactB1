import React, { Component } from 'react'
import HttpService from './HttpService';

export default class TeacherDetail extends Component {

constructor(){
    super();
    this.state = {teacher : {}};
}

componentDidMount(){
    let id = this.props.match.params.id;
    console.log(id);
    let http = new HttpService();
    http.get('/api/teachers/getdetail?id='+id).then(result=>{
        console.log(result);
        this.setState({ teacher : result});
    });
}

  render() {
    return (
      <div>
        <h2>i am teacher detail</h2>
        <h3>Name : {this.state.teacher.name}</h3>
      </div>
    )
  }
}
