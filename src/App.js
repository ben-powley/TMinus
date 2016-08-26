import React, { Component } from 'react';
import $ from './jquery';
import { Link } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <div>
            <Link to={`/launches/`}>View Upcoming Launches</Link>
          </div>
      )
  }
}

export default App;