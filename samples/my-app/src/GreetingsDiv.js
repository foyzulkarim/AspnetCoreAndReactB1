import React, { Component } from 'react'

class GreetingsDiv extends Component{
    constructor(){
        super();
    }

    render(){
        return(
                <div>
                    <h1>Hello {this.props.selectedStudentObject.name}</h1>
                </div>
        );
    }
}

export default GreetingsDiv;