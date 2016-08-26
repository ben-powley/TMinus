import React, { Component } from 'react';
import $ from './jquery';
import { Link } from 'react-router';

class Launch extends Component {
  constructor(props) {
    super(props);
    this.state = {launchID: this.props.params.launchID, launchName: "", rocketImageURL: "", launchNet: ''};
  }

  componentDidMount() {
    this.serverRequest = $.get(`https://launchlibrary.net/1.2/launch/${this.state.launchID}`, function(result) {
      this.setState({
          launchID: this.state.launchID, 
          launchName: result.launches[0].name,
          rocketImageURL: result.launches[0].rocket.imageURL,
          launchNet: result.launches[0].net
        })
    }.bind(this))
  }

  render() {
      return (
          <div className="ViewContainer">
            <Link to={'/launches'}>Back to launches</Link>
            <br />
            <br />
            <img className="rocketImg" src={this.state.rocketImageURL} />
            <h1>{this.state.launchName}</h1>
            <p>{this.state.launchNet}</p>
          </div>
      )
  }
}

export default Launch;