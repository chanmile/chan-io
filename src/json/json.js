import React, { Component } from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import '../css/Style.scss'
import Request from '../Components/Request.jsx'

class Json extends Component {
constructor(props) {super(props);}
  render() {
    return (
        <div className="mainDiv">
            <h2>JSON Response Fetch</h2>
            <div><Request/></div>
        </div>
    );
  }
}

export default Json;
