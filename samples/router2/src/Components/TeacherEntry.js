import React, { Component } from "react";
import HttpService from "./HttpService";

export default class TeacherEntry extends Component {
  constructor() {
    super();
    this.state = { teacher: { id: "", name: "", phone: "", departmentId : "" }, departments: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTeacherNameInputChange = this.handleTeacherNameInputChange.bind(
      this
    );
    this.handleTeacherPhoneInputChange = this.handleTeacherPhoneInputChange.bind(
      this
    );
    this.handleTeacherDepartmentChange = this.handleTeacherDepartmentChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.teacher);
    // here we create a new custom object 
    // send that custom object to server 
    
    let http = new HttpService();
    if (this.state.teacher.id) {
      http.put(this.state.teacher, "/api/teachers/edit").then(response => {
        console.log("edit successful");
        this.props.history.push("/teacher-list");
      });
    } else {
      http.post(this.state.teacher, "/api/teachers/add").then(response => {
        this.setState({ teacher: { id: "", name: "", phone: "" } });
        this.props.history.push("/teacher-list");
      });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    // const name = 'teacher.'+target.name;
    // this.setState({
    //   [name]: value
    // });
  }

  handleTeacherNameInputChange(event) {

    const target = event.target;
    const value = target.value;
    const name = target.name;

    let temp = this.state.teacher;
    temp[name] =  value;

    this.setState({
      teacher: temp
    });
  }

  handleTeacherPhoneInputChange(event) {
    this.setState({
      teacher: {
        id: this.state.teacher.id,
        name: this.state.teacher.name,
        phone: event.target.value,
        departmentId : this.state.teacher.departmentId
      }
    });
  }

  handleTeacherDepartmentChange(event) {
    console.log(event.target);
    this.setState({
      teacher: {
        id: this.state.teacher.id,
        name: this.state.teacher.name,
        phone: this.state.teacher.phone,
        departmentId : event.target.value
      }
    });
  }

  componentDidMount() {
    let self = this;
    let id = this.props.match.params.id;
    let http = new HttpService();
    if (id) {
      http.get("/api/teachers/getdetail?id=" + id).then(result => {
        console.log(result);
        self.setState({ teacher: result });
      });
    }
    
    http.post({}, "/api/departments/search").then(response => {
      self.setState({ departments: response.item1 });
      console.log(response.item1);
    });
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
            onChange={this.handleTeacherNameInputChange}
            placeholder="enter teacher phone"
          />
          <br />
          <select name="departmentId"
            value={this.state.teacher.departmentId}
            onChange={this.handleTeacherNameInputChange}
          >
            {this.state.departments.map(dep => (
              <option value={dep.id}>{dep.name}</option>
            ))}
          </select>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
