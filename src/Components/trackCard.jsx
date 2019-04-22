import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class TrackCard extends Component {
  constructor(props) {
      super(props);
      this.state = {
          name : this.props.name,
          popularity : this.props.popularity,
          image : this.props.image,
          album : this.props.album,
          artist : this.props.artist
      }
  }

  render() {
    return (
      <Card bg="secondary" text="white" style={{ width: '27rem' }}>
        <Card.Img variant="top" src={this.state.image} />
        <Card.Body style={{"text-align": "center"}}>
          <Card.Title>{this.state.name}</Card.Title>
          <Card.Text>
            <b> Artist: </b> {this.state.artist}<br/>
            <b> Album: </b> {this.state.album}<br/>
            <b> Popularity: </b> {this.state.popularity}<br/>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default TrackCard;
