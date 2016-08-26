import React, { Component } from 'react';
import $ from './jquery';
import { Link } from 'react-router';
import Countdown from './Countdown';

class NextLaunch extends Component {
    constructor(props) {
        super(props);
        this.state = {nextLaunch: []};
    }

    componentDidMount() {
        this.serverRequest = $.get("https://launchlibrary.net/1.2/launch?next=1", function(result) {
            this.setState({
                nextLaunch: result.launches[0].net
            })
        }.bind(this));
    }

    render() {
        return (
            <div className="nextLaunchCountdown">
                <Countdown endDate={this.state.nextLaunch} />
            </div>
        )
    }
}

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {launches: [], offset: 0};
    this.getLaunches = this.getLaunches.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
}

  componentDidMount() {
    this.getLaunches();
  }

  getLaunches() {
    this.serverRequest = $.get(`https://launchlibrary.net/1.2/launch?next=10&offset=${this.state.offset}`, function(result) {
      this.setState({
        launches: result.launches,
      })
    }.bind(this));
  }

  handleNextClick() {
    if (this.state.offset >= 120) {
      this.setState({
        offset: 120
      }, function() {
        this.getLaunches();
      })
    } else {
      this.setState({
        offset: this.state.offset + 10
      }, function() {
        this.getLaunches();
      })
    }
  }

  handleBackClick() {
    if (this.state.offset <= 0) {
      this.setState({
        offset: 0
      }, function() {
        this.getLaunches();
      })
    } else {
      this.setState({
        offset: this.state.offset - 10
      }, function() {
        this.getLaunches();
      })
    }
  }

  render() {
    return (
      <div className="ViewContainer">
        <NextLaunch />
        {
          this.state.launches.map((launch) => {
            return <div className="launch" key={launch.id}><Link to={`/launches/${launch.id}`}>{launch.name}</Link> // {launch.net}</div>
          })
        }
        <br />
        <button className="backButton" onClick={this.handleBackClick}>Back</button>
        <button className="nextButton" onClick={this.handleNextClick}>Next</button>
      </div>
    );
  }
}

export default Launches;
