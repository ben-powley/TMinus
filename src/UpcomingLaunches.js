import React, { Component } from 'react';
import $ from './jquery';
import { Link } from 'react-router';
import Countdown from './Countdown';
import NextLaunch from './NextLaunch';

class UpcomingLaunches extends Component {
  constructor(props) {
    super(props);
    this.state = {launches: []};
    this.getLaunches = this.getLaunches.bind(this);
}

  componentDidMount() {
    this.getLaunches();
}

  getLaunches() {
    this.serverRequest = $.get(`https://launchlibrary.net/1.2/launch?next=10`, function(result) {
      this.setState({
        launches: result.launches,
      })
    }.bind(this));
  }

  render() {
    return (
    <div>
        <div className="launchCountdown">
            <NextLaunch />
        </div>
        <div className="ViewContainer">
          <br />
          <p className="upcomingLaunches">Upcoming Launches</p> 
          <div className="launches">
              {
                this.state.launches.map((launch) => {
                  return <Link key={launch.id} to={`/launches/${launch.id}`}><div className="launch" key={launch.id}>{launch.name} <hr /> {launch.net}</div></Link>
                })
              }
          </div>
        </div>
    </div>
    );
  }
}

export default UpcomingLaunches;
