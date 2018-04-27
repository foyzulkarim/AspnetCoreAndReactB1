import React, { Component } from 'react'

class Student extends Component{
    constructor(){
        super();
    }
    
   render(){
        let s = this.props.studentObj;
        let myStyle = {
            background : s.color
        };

       return(
             <h3 style={myStyle} onClick={this.props.handleClick}> {s.name} </h3>
        ); 
       // here we will catch the variable. 
   }
}

export default Student;