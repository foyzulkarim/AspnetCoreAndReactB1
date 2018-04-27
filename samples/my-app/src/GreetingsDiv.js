import React, { Component } from 'react'

class GreetingsDiv extends Component{
    constructor(){
        super();
    }

    render(){
        console.log('i m in greetings. ',this.props.student);

        return(
                <div student={this.props.student}>
                    <h1>Hello {this.props.student.name}</h1>
                </div>
        );
    }
}

export default GreetingsDiv;