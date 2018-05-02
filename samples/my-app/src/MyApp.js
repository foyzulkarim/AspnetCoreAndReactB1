import React, { Component } from 'react'
import Greeting from './GreetingsDiv'
import Student from './Student';
import axios from 'axios';
import Filter from './Filter';
import HttpRepository from './HttpRepository';


class MyApp extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = { students: [], filteredStudents:[], selectedStudentObject: { name: 'everyone!' }, keyword : '' };
        this.textChanged = this.textChanged.bind(this);
    }

    handleClick(x) {
        console.info('i am in myapp');
        console.log(x);
        this.setState({ selectedStudentObject: x });
    }

    textChanged(event){
        let keyword= event.target.value;
        this.setState({keyword : keyword});
        var result = this.state.students.filter(x => x.name.indexOf(event.target.value) !== -1);
        console.log(result);
        this.setState({filteredStudents : result});
    }

    componentDidMount() {
        
        let http = new HttpRepository();
        //const url = 'https://jsonplaceholder.typicode.com/users';
        const url = 'http://localhost:5511/api/Students/GetStudents';
        http.get(url).then(result=>{
            this.setState({students : result, filteredStudents: result});
        }); 
    }

    render() {
        const now = new Date();
        let value = "hello guys " + now.toDateString();

        return (
            <div>
                <Filter textChanged={this.textChanged}/>
                <ul>
                    {this.state.filteredStudents.map((x) =>
                        <li key={x.id}>
                            <Student studentObj={x} handleClick={this.handleClick} />
                        </li>)}
                </ul>
                <Greeting selectedStudentObject={this.state.selectedStudentObject} />
            </div>
        );
    }
}

export default MyApp;