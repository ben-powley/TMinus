import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ViewContainer from './ViewContainer';
import Launch from './Launch';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/launches" component={ViewContainer} />
    <Route path="/launches/:launchID" component={Launch} />
  </Router>,
  document.getElementById('root')
);
