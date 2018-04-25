import React from 'react';
import ReactDOMMama from 'react-dom';
import './index.css';
import AppAlias from './App';
import registerServiceWorker from './registerServiceWorker';
import MyApp1 from './MyApp';

ReactDOMMama.render(<AppAlias/>, document.getElementById('root'));
ReactDOMMama.render(<MyApp1/>, document.getElementById('myapp')); // which , where

registerServiceWorker(); // progressive web app related code goes here, not our current headache :) 
