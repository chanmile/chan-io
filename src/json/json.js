import React, { Component } from 'react';
import '../css/Style.scss'
import Request from '../Components/Request.jsx'

class Json extends Component {
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
