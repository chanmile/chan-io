import React, { Component } from 'react';
import '../css/style.scss'
import SpotifyRequest from '../Components/SpotifyRequest.jsx'


class Spotify_API extends Component {
constructor(props) {super(props);
        this.state = {
            disablePretty : false
        }
    }

  render() {
    return (
        <div className="mainDiv">
        { this.props.token == "" ? (
            <div>
            <h2>Spotify API</h2>
            <p>Please authenticate with Spotify under Spotify > Authenticate </p>
            </div>
        ) : (
            <div><SpotifyRequest initToken={this.props.token}/></div>
        )}
        </div>
    );
  }
}

export default Spotify_API;
