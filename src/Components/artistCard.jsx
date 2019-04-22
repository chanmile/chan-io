import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

function getGenres(genres) {
    var genreString = ''
    for (var i=0; i < genres.length; i++) {
        if (i == genres.length-1) {
            genreString += genres[i]
        } else {
        genreString += genres[i] + ', '
        }
    }
    return genreString
}

class ArtistCard extends Component {
  constructor(props) {
      super(props);
      this.state = {
          name : this.props.name,
          popularity : this.props.popularity,
          image : this.props.image,
          genres : this.props.genres
      }
  }

  render() {
    return (
      <Card bg="secondary" text="white" style={{ width: '27rem' }}>
        <Card.Img variant="top" src={this.state.image} />
        <Card.Body>
          <Card.Title>{this.state.name}</Card.Title>
          <Card.Text>
            <b> Popularity: </b> {this.state.popularity}<br/>
            <b>Genres: </b> {getGenres(this.state.genres)}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ArtistCard;
