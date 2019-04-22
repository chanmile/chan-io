import React, { Component } from 'react';
import '../css/style.scss'
import Authorization from '../Components/Authorization.jsx'

class Spotify_Auth extends Component {
  render() {
    return (
        <div className="mainDiv">
        { this.props.token == "" ? (
            <div>
            <h2>Spotify API</h2>
            <p>Please authenticate with Spotify to use the API</p>
            <div><Authorization/></div>
            </div>
        ) : (
            <div>
            <h2>Spotify API</h2>
            <p><b>Current Token:</b> {this.props.token}</p>
            </div>
        )}
        </div>
    );
  }
}

export default Spotify_Auth;
