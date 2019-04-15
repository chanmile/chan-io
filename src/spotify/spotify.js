import React, { Component } from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import '../css/Style.scss'
import SubmitForm from '../Components/SubmitForm.jsx'

function handleClick(creds) {
    alert("Attempting to log in to Spotify using %s" % creds)
}

class Spotify extends Component {
    constructor(props) {super(props);}
  render() {
    return (
        <div className="mainDiv">
            <h2>Spotify API</h2>
            <h3>{this.props.token}</h3>
            <div className="thirdsDiv"><SubmitForm placeholder="Credentials"/></div>
        </div>
    );
  }
}

export default Spotify;
