import React, { Component } from 'react'
import Greeting from './GreetingsDiv'
import Student from './Student';

class MyApp extends Component {    

    constructor() {
        super();
        this.state= { student : { name: "everyone"} };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(x){
        this.setState({student : x});
        console.log(this.state);        
    }

    render() {
        const now = new Date();
        let value = "hello guys " + now.toDateString();
        let values = ["first", "second", "third"];
        let students = [
            { objectID:"1", name : "Foyzul", course: "C#", color:'yellow'},
            {objectID:"2", name : "Fazley", course: "F#", color: 'lightgreen'},
            {objectID:"3", name : "Badshah", course: "TS", color: 'lightblue'},
        ];

        return (
            <div>
                <Greeting student={this.state.student}/>
                <h2>{values.length}</h2>
                <ul>
                    {students.map((x)=>
                    <li key={x.objectID}>                   
                       <Student studentObj={x} handleClick={this.handleClick}/>
                    </li>)}
                </ul>                
            </div>
        );
    }
}

export default MyApp;