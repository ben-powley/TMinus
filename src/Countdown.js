import React, { Component } from 'react';
import $ from './jquery';

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsLeft: '',
            minutesLeft: '',
            hoursLeft: '',
            daysLeft: '',
            nextLaunch: []
        };

        this.tick = this.tick.bind(this);

    }

    tick() {
        const endDate = new Date(this.state.nextLaunch.net);
        const _second = 1000;
        const _minute = _second * 60;
        const _hour = _minute * 60;
        const _day = _hour * 24;

        let timer;
        let now = new Date();
        let distance = endDate - now;

        this.setState({
            secondsLeft: Math.floor((distance % _minute) / _second),
            minutesLeft: Math.floor((distance % _hour) / _minute),
            hoursLeft: Math.floor((distance & _day) / _hour),
            daysLeft: Math.floor(distance / _day)
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);

        this.serverRequest = $.get("https://launchlibrary.net/1.2/launch?next=1", function(result) {
            this.setState({
                nextLaunch: result.launches[0]
            })
        }.bind(this));
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h2>Countdown to <strong>{this.state.nextLaunch.name}</strong></h2>
                <strong>{this.state.daysLeft}</strong> Days <strong>{this.state.hoursLeft}</strong> Hours <strong>{this.state.minutesLeft}</strong> Minutes <strong>{this.state.secondsLeft}</strong> Seconds
            </div>
        )
    }
}

export default Countdown;
