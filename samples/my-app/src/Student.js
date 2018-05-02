import React, { Component } from 'react'

class Student extends Component{
    constructor(){
        super();
        this.clicked = this.clicked.bind(this);
    }

    clicked(){        
        this.props.studentClicked(this.props.studentObj);
    }
    
   render(){
        let s = this.props.studentObj;
        let myStyle = {
            background : s.color
        };

       return(
             <h3 style={myStyle} onClick={this.clicked}> {s.name} {s.phone}</h3>
        ); 
       // here we will catch the variable. 
   }
}

export default Student;