import React, { Component } from 'react'

class StudentFilter extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <input type='text' onChange={this.props.keywordChanged} placeholder='type your keyword'/>
                </div>
        );
    }
}

export default StudentFilter;