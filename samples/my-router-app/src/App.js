import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './Components/Home'
import StudentEntry from './Components/StudentEntry'
import StudentList from "./Components/StudentList";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/student-entry">Student Entry</Link></li>
                <li><Link to="/student-list">Student List</Link></li>
              </ul>
              <hr />
              <Route exact path='/' component={Home} />
              <Route path='/student-entry' component={StudentEntry} />
              <Route path='/student-list' component={StudentList} />
            </div>
          </Router>
        </p>
      </div>
    );
  }
}

export default App;
