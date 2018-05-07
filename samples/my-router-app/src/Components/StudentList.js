import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HttpService from '../Services/HttpService';
import Student from './Student';

export default class StudentList extends Component {

    constructor() {
        super();
        this.state = { students: [] };
    }

    componentDidMount() {
        // fetch data from server
        let http = new HttpService();
        let requestModel = {};
        http.post('api/teachers/search', requestModel)
            .then(response => {
                console.log(response.item1);
                this.setState({ students: response.item1 });
            });
    }

    render() {
        return (
            <div>
                <h2>Student list</h2>
                <div>
                    <table>
                        <th>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Phone</td>
                            <td>Modified</td>
                        </th>
                        {
                            this.state.students.map((s) =>
                                <tr>
                                    <td>
                                        <Link to={'/student-list/'+ s.id}>{s.id}</Link>
                                    </td>
                                    <td>{s.name}</td>
                                    <td>{s.phone}</td>
                                    <td>{new Date(s.modified).toDateString()}</td>
                                </tr>
                            )
                        }

                    </table>
                </div>
                <hr />
                <div>

<h3>hello guys!</h3>
            {this.state.students.map((s, index) => (
          <Route exact 
          path='/student-list/:{s.id}' component={Student}/>
        ))}         
                </div>
            </div>
        )
    }
}
