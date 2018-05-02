import React, { Component } from 'react'
import Greeting from './GreetingsDiv'
import Student from './Student';
import HttpRepository from './HttpRepository';
import StudentFilter from './StudentFilter';

class MyApp extends Component {

    constructor() {
        super();
        this.state = { students : [], filteredStudent:[], selectedStudent : { name : 'everybody!'}};
        this.studentClicked = this.studentClicked.bind(this);
        this.keywordChanged = this.keywordChanged.bind(this);
    }

    componentDidMount(){
        let http = new HttpRepository();
        http.get('http://localhost:5511/api/Students/GetStudents')
        .then(result => {
            this.setState({ students : result, filteredStudent : result});
        });
    }

    // write some functions can be access from both : student and greetings
    studentClicked(student){
        console.log(student);
        this.setState({selectedStudent : student });
    }

    keywordChanged(event){
        console.log(event.target.value);
        let searchResult = 
        this.state.students.filter(x=> x.name.indexOf(event.target.value) != -1);
        // searching on students. set result on filtered students
        this.setState({
            filteredStudent : searchResult
        });
    }

    render() {
        const now = new Date();
        let value = "hello guys " + now.toDateString();
        let values = ["first", "second", "third"];
        
        return (
            <div>
                <StudentFilter keywordChanged={this.keywordChanged}/>
                <Greeting student={this.state.selectedStudent}/>
                <h2>{values.length}</h2>
                <ul>
                    {this.state.filteredStudent.map((x) =>
                        <li key={x.id}>
                            <Student studentObj={x} studentClicked={this.studentClicked} />
                        </li>)}
                </ul>

            </div>
        );
    }
}

export default MyApp;