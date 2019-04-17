import React, { Component } from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import '../css/Style.scss'
import Request from '../Components/Request.jsx'

class Spotify extends Component {
constructor(props) {super(props);}
  render() {
    return (
        <div className="mainDiv">
        { this.props.token == "" ? (
            <div>
            <h2>Spotify API</h2>
            <p>Please authenticate with Spotify to use the API</p>
            </div>
        ) : (
            <div>
            <h2>Spotify API</h2>
            <p><b>Current Token:</b> {this.props.token}</p>
            <div><Request/></div>
            </div>
        )}
        </div>
    );
  }
}

export default Spotify;
