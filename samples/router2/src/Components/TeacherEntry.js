import React, { Component } from "react";
import HttpService from './HttpService';

export default class TeacherEntry extends Component {
  constructor() {
    super();
    this.state = { teacher: { name: "", phone: "" } };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTeacherNameInputChange = this.handleTeacherNameInputChange.bind(this);
    this.handleTeacherPhoneInputChange=this.handleTeacherPhoneInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.teacher);
    let http = new HttpService();
    http.post(this.state.teacher, '/api/teachers/add').then(response=>{
        alert('teacher saved');
        this.setState( { teacher: { name: "", phone: "" } });
    });
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = 'teacher.'+target.name;    
    // this.setState({
    //   [name]: value
    // });
  }


  handleTeacherNameInputChange(event){    
    this.setState({ teacher : { name : event.target.value, phone : this.state.teacher.phone}});
  }

  handleTeacherPhoneInputChange(event){
        this.setState({teacher : { name: this.state.teacher.name, phone : event.target.value}});
  }

  componentDidMount(){
    let id = this.props.match.params.id;
    if(id){
        let http = new HttpService();
        http.get('/api/teachers/getdetail?id='+id).then(result=>{
            console.log(result);
            this.setState({ teacher : result});
        });
    }
    
  }

  render() {
    return (
      <div>
        <h2>I am teacher entry page</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.teacher.name}
            onChange={this.handleTeacherNameInputChange}
            placeholder="enter teacher name"
          />
          <br />
          <input
            type="text"
            name="phone"
            id="phone"
            value={this.state.teacher.phone}
            onChange={this.handleTeacherPhoneInputChange}
            placeholder="enter teacher phone"
          />
          <br />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
