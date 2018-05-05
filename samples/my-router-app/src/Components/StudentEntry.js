import React, { Component } from 'react'
import HttpService from '../Services/HttpService'

export default class StudentEntry extends Component {

    constructor(props) {
        super(props)
        this.state = { name: '', phone: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);

    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitForm = (e) => {
        e.preventDefault();
        // http service     
        const url = 'http://localhost:25697/api/teachers/add';

        let http = new HttpService();
        http.post(url, this.state).then(result => {
            console.log(result);
        });

        // http.get(url).then(result => {
        //     console.log(result);
        // })

        // var data = new FormData();
        // data.append( "json", JSON.stringify(this.state ) );


        // fetch( url, {   
        //      method: "POST", 
        //      body : this.state,
        //      headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //       },            
        //     }).then(function(res){ console.log(res); });

    }


    render() {
        return (
            <div>
                <h2>Student entry</h2>
                <form onSubmit={this.submitForm}>
                    <input type='text' name='name' id='name' placeholder="input name"
                        value={this.state.name} onChange={this.handleInputChange} /><br />
                    <input type='text' name='phone' id='phone' placeholder="input phone"
                        value={this.state.phone} onChange={this.handleInputChange} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
