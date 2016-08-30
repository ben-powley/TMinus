import React, { Component } from 'react';
import $ from './jquery';
import { Link } from 'react-router';
import Countdown from './Countdown';

class NextLaunch extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nextLaunch: []
        };
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

export default NextLaunch;