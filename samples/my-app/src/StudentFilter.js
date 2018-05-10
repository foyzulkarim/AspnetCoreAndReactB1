import React, { Component } from 'react'

class StudentFilter extends Component{
    constructor(){
        super();
        this.state = { keyword : ''};
        this.handleChange=this.handleChange.bind(this);
        console.log(this.state)
    }

    // getInitialState(){
    //     return {keyword:''};
    // }

    handleChange(event){
        console.log(event.target.value);
        this.setState({keyword : event.target.value});
    }

    render(){
        return(
            <div>
            <h2>
            Search your names                
                </h2>
                <input type='text' onChange={this.props.handleFilter}/>
            </div>            
        );
    }
}

export default StudentFilter;