import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MyApp from './MyApp';
import BasicRouterExample from "./BasicRouterExample";

ReactDOM.render(<BasicRouterExample/>, document.getElementById('root')); // which , where

registerServiceWorker(); // progressive web app related code goes here, not our current headache :) 
