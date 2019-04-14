import React, { Component } from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import '../css/Style.scss'
import SubmitForm from '../Components/SubmitForm.jsx'
import Request from '../Components/Request.jsx'

class Spotify extends Component {
  render() {
    return (
        <div className="mainDiv">
            <h2>Spotify API</h2>
            <div className="thirdsDiv"><Request/></div>
        </div>
    );
  }
}

export default Spotify;
