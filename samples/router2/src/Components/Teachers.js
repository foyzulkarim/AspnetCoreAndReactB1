import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Teachers extends Component {
  componentDidMount() {
    let request = {};
    let url = "http://localhost:25697/api/teachers/search";
    let f = fetch(url, {
      body: JSON.stringify(request),
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      mode: "cors"
    }).then((resp) => resp.json()) 
    .then(function(data) {
        // Create and append the li's to the ul
        console.log(data);
        
        });
    
  }

  render() {
    return <div />;
  }
}
