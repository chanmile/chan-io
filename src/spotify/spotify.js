import React, { Component } from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import '../css/Style.scss'
import SubmitForm from '../Components/SubmitForm.jsx'

function handleClick(creds) {
    alert("Attempting to log in to Spotify using %s" % creds)
}

class Spotify extends Component {
  render() {
    return (
        <div className="mainDiv">
            <h2>Spotify API</h2>
            <div className="thirdsDiv"><SubmitForm placeholder="Credentials"/></div>
        </div>
    );
  }
}

export default Spotify;
