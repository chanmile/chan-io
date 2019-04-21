import React, { Component } from 'react';
import {Card, CardColumns} from 'react-bootstrap';
import '../css/Style.scss'

function getGenres(genres) {
    var genreString = ''
    // {genres.map((item, index) => (
    //     genreString = item + ', ' + item
    // ))}

    for (var i=0; i < genres.length; i++) {
        if (i == genres.length-1) {
            genreString += genres[i]
        } else {
        genreString += genres[i] + ', '
        }
    }
    return genreString
}

class Spotify_Auth extends Component {
constructor(props) {
    super(props);

    this.state = {
        data : this.props.data,
        albums : null,
        tracks : null
    }

}

componentWillMount() {
    this.setState({ data: this.props.data });


    var albumRequest = {
        url: this.props.data.href + '/albums',
        access_token: this.props.token
    }
    fetch("/req",{
      method: 'POST', // or 'PUT'
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(albumRequest)
    })
      .then(res => res.json() )
      .then((data) => {
          this.setState({ albums: data });
          console.log(this.state.albums)
        }
      )

      var tracksRequest = {
          url: this.props.data.href + '/top-tracks?country=US',
          access_token: this.props.token
      }
      fetch("/req",{
        method: 'POST', // or 'PUT'
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(tracksRequest)
      })
        .then(res => res.json() )
        .then((data) => {
            this.setState({ tracks: data });
            console.log(this.state.tracks)
          }
        )

}

  render() {
    return (
        <div>
        {
            this.state.albums == null || this.state.tracks == null ? (
                <div> Loading...</div>
            ) : (
                <Card bg="secondary" text="white">
                  <Card.Header>Artist</Card.Header>
                  <Card.Body>
                    <img className="artistCardImage" src={this.state.data.images[0].url}></img>
                    <Card.Title>{this.state.data.name}</Card.Title>

                    <Card.Text>
                        <b>Popularity:</b> {this.state.data.popularity}
                        <br/><br/>
                        <b>Genres: </b>
                        {getGenres(this.state.data.genres)}
                        <br/>
                        <br/>
                        <b>Top Tracks:</b><br/>
                        <ol className="artOl">
                        {this.state.tracks.tracks.map((item, index) => (
                            <li>{item.name}</li>
                        ))}
                        </ol>
                        </Card.Text>
                        <Card.Text>

                        <div>
                        <CardColumns><div>
                        {this.state.albums.items.map((item, index) => (
                            <Card bg="secondary" text="white" style={{ width: '18rem' }}>
                            <img className="artistImage" src={item.images[0].url}/>
                              <Card.Body>
                                {item.name}
                              </Card.Body>
                              </Card>
                        ))}</div>
                        </CardColumns>
                        </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
            )
        }</div>

    );
  }
}

export default Spotify_Auth;
