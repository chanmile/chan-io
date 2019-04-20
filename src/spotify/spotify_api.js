import React, { Component } from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import '../css/Style.scss'
import Request from '../Components/Request.jsx'
import SpotifyRequest from '../Components/SpotifyRequest.jsx'

class Spotify_API extends Component {
constructor(props) {super(props);}
  render() {
    return (
        <div className="mainDiv">
        { this.props.token == "" ? (
            <div>
            <h2>Spotify API</h2>
            <p>Please authenticate with Spotify under Spotify > Authenticate </p>
            </div>
        ) : (
            <div>
            <h2>Spotify API</h2>
            <div><SpotifyRequest initToken={this.props.token}/></div>
            </div>
        )}
        </div>
    );
  }
}

export default Spotify_API;
