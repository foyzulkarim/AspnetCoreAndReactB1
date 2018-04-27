import React, { Component } from 'react'
import Greeting from './GreetingsDiv'
import Student from './Student';
import StudentFilter from './StudentFilter';

class MyApp extends Component {    

    constructor() {
        super();
        this.state= { student : { name: "everyone"} , keyword: '', students : [], filteredStudents:[]};
        this.handleClick = this.handleClick.bind(this);
        this.handleStudentFilter = this.handleStudentFilter.bind(this);
    }

    handleClick(x){
        this.setState({student : x});
        console.log(this.state);        
    }

    handleStudentFilter(event){
        this.setState({keyword : event.target.value});
        var result = this.state.students.filter(x=> x.name.indexOf(event.target.value)!==-1);
        this.setState({filteredStudents : result});
    }

    componentWillMount(){
        this.setState({students:[
            { objectID:"1", name : "Foyzul", course: "C#", color:'yellow'},
            {objectID:"2", name : "Fazley", course: "F#", color: 'lightgreen'},
            {objectID:"3", name : "Badshah", course: "TS", color: 'lightblue'},
        ]});
        this.setState({ filteredStudents : [
            { objectID:"1", name : "Foyzul", course: "C#", color:'yellow'},
            {objectID:"2", name : "Fazley", course: "F#", color: 'lightgreen'},
            {objectID:"3", name : "Badshah", course: "TS", color: 'lightblue'},
        ]});
    }

    render() {
        const now = new Date();
        let value = "hello guys " + now.toDateString();
        let values = ["first", "second", "third"];        

        return (
            <div>
                <StudentFilter handleFilter={this.handleStudentFilter}/>                
                <h2>Filter : {this.state.keyword}</h2>
                <ul>
                    {this.state.filteredStudents.map((x)=>
                    <li key={x.objectID}>                   
                       <Student studentObj={x} handleClick={this.handleClick}/>
                    </li>)}
                </ul>                
                <div>
                <h3>Click on the name of the above students: </h3>
                <Greeting student={this.state.student}/>
                </div>
                <div>
                <p>
                <a href="https://github.com/foyzulkarim/AspnetCoreAndReactB1/tree/master/samples/my-app" target="_blank">
                https://github.com/foyzulkarim/AspnetCoreAndReactB1/tree/master/samples/my-app</a>
                </p></div>
            </div>
        );
    }
}

export default MyApp;