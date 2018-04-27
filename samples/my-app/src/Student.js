import React, { Component } from 'react'

class Student extends Component{
    constructor(){
        super();
        this.handleClickStudent = this.handleClickStudent.bind(this);
        this.handleClickObj = this.handleClickObj.bind(this);
    }

    handleClickStudent (){
        console.log(this.props.studentObj);
    }

    handleClickObj(){
        console.log(this.props);
        this.props.handleClick(this.props.studentObj);
    }

    componentWillMount(){
        let s = this.props.studentObj;
        console.log(s);
    }
    
   render(){
        let s = this.props.studentObj;
        let myStyle = {
            background : s.color
        };

       return(
             <h3 style={myStyle} onClick={this.handleClickObj}> {s.name} </h3>
        ); 
       // here we will catch the variable. 
   }
}

export default Student;