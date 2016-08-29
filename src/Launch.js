import React, { Component } from 'react';
import $ from './jquery';
import { Link } from 'react-router';

class Launch extends Component {
  constructor(props) {
    super(props);
    this.state = {launchID: this.props.params.launchID, launch: [], location: [], rocket: [], mission: []};
  }

  componentDidMount() {
    this.serverRequest = $.get(`https://launchlibrary.net/1.2/launch/${this.state.launchID}`, function(result) {
      this.setState({
          launchID: this.state.launchID,
          launch: result.launches[0],
          location: result.launches[0].location.pads[0],
          rocket: result.launches[0].rocket,
          mission: result.launches[0].missions[0]
        })
    }.bind(this))
  }

  render() {
      return (
          <div className="ViewContainer">
            <div className="centerButton">
                <Link to={'/'}>Back to launches</Link>
            </div>
            <br />
            <br />
            <img className="rocketImg" src={this.state.rocket.imageURL} alt={this.state.rocket.name} />
            <br />
            <br />
            <div className="launchInfo">
                <h1>{this.state.launch.name}</h1>
                <p><strong>NET Launch Time:</strong> {this.state.launch.net}</p>
                <p><strong>Launch Window Start:</strong> {this.state.launch.windowstart}</p>
                <p><strong>Launch Window End:</strong> {this.state.launch.windowend}</p>
                <hr />
                <h3>Location</h3>
                <p><strong>Pad Name:</strong> {this.state.location.name}</p>
                <p><strong>Pad Latitude:</strong> {this.state.location.latitude}</p>
                <p><strong>Pad Longitude:</strong> {this.state.location.longitude}</p>
                <hr />
                <h3>Rocket</h3>
                <p><strong>Rocket Name:</strong> {this.state.rocket.name}</p>
                <p><strong>Rocket Family:</strong> {this.state.rocket.familyname}</p>
                <hr />
                <h3>Mission</h3>
                <p><strong>Mission Name:</strong> {this.state.mission.name}</p>
                <p><strong>Mission Description:</strong> {this.state.mission.description}</p>
                <p><strong>Mission Type:</strong> {this.state.mission.typeName}</p>
            </div>
          </div>
      )
  }
}

export default Launch;
