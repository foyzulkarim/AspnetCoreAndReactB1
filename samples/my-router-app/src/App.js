import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import StudentEntry from './StudentEntry';
import StudentList from './StudentList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            Routes
          </p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/student-list">Student List</Link>
            </li>
            <li>
              <Link to="/student-entry">Student Entry</Link>
            </li>
          </ul>
          <hr />          
          <Route exact path="/" component={Home}></Route>
          <Route path="/student-list" component={StudentList}></Route>
          <Route path="/student-entry" component={StudentEntry}></Route>
        </div>
         
      </Router>
    );
  }
}

export default App;
