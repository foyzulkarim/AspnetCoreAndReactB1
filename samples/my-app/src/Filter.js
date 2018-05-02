import React, { Component } from 'react'

class Filter extends Component {
    constructor() {
        super();
    }

    render() {
        return (<div>
            <h3>
                <input type='text' placeholder='type something to search' onChange={this.props.textChanged} />
            </h3>
        </div>);
    }
}

export default Filter;