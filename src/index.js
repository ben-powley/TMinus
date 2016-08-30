import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UpcomingLaunches from './UpcomingLaunches';
import Launch from './Launch';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import './style.css';
import './launch.png';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={UpcomingLaunches} />
    <Route path="/launches/:launchID" component={Launch} />
  </Router>,
  document.getElementById('root')
);
