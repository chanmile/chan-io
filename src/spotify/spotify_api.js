import React, { Component } from 'react';
import {InputGroup, FormControl, Button, ToggleButton, ToggleButtonGroup, ButtonToolbar} from 'react-bootstrap';
import '../css/Style.scss'
import Request from '../Components/Request.jsx'
import SpotifyRequest from '../Components/SpotifyRequest.jsx'


class Spotify_API extends Component {
constructor(props) {super(props);
        this.state = {
            disablePretty : false
        }
    }

    disable = (event) => {
        this.setState( {disablePretty : !this.state.disablePretty } );
        console.log("We toggled!")
    }

  render() {
    return (
        <div className="mainDiv">
        { this.props.token == "changeme" ? (
            <div>
            <h2>Spotify API</h2>
            <p>Please authenticate with Spotify under Spotify > Authenticate </p>
            </div>
        ) : (
            <div><SpotifyRequest onChange={this.disable} initToken={this.props.token}/></div>
        )}
        </div>
    );
  }
}

export default Spotify_API;
