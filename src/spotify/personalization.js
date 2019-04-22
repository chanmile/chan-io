import React, { Component } from 'react';
import {Button, ToggleButton, ToggleButtonGroup, ButtonToolbar} from 'react-bootstrap';
import {OverlayTrigger, Tab, Row, Col, ListGroup} from 'react-bootstrap';
import ArtistCard from '../Components/artistCard.jsx';
import TrackCard from '../Components/trackCard.jsx';

import '../css/Style.scss'

const theme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};

function getPopularityArtists(artists) {
  var sum = 0
    for (var i=0; i < artists.length; i++) {
      sum += Number(artists[i].popularity)
    }
    return sum / artists.length
}

function getPopularityTracks(tracks) {
  var sum = 0
    for (var i=0; i < tracks.length; i++) {
      sum += Number(tracks[i].popularity)
    }
    return sum / tracks.length
}

class Personalization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artOrTrack : "artists",
            term : "short_term",
            response : null
        }
    }

     changeArtist = (event) => {
        this.setState({artOrTrack:"artists"})
    }
     changeTracks = (event) => {
        this.setState({artOrTrack:"tracks"})
    }
     changeShort = (event) => {
        this.setState({term:"short_term"})
    }
     changeMed = (event) => {
        this.setState({term:"medium_term"})
    }
     changeLong = (event) => {
        this.setState({term:"long_term"})
    }
    fetchUser = (event) => {

        this.setState({ response: null });
        var reqUrl = 'https://api.spotify.com/v1/me/top/' + this.state.artOrTrack + '?time_range=' + this.state.term + '&limit=50'
        var request = {
            url: reqUrl,
            access_token: this.props.token
        }
        fetch("/req",{
          method: 'POST', // or 'PUT'
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify(request)
        })
          .then(res => res.json() )
          .then((data) => {
              this.setState({ response: data });
              console.dir(data)
            }
          )
   }



  render() {
    return (
        <div className="mainDiv">
        { this.props.token == "" ? (
            <div>
            <h2>Spotify API</h2>
            <p>Please authenticate with Spotify under Spotify > Authenticate </p>
            </div>        ) : (
        <div>
            <h2>Spotify Visualizations</h2>
            <ButtonToolbar>
                <ToggleButtonGroup  type="radio" size="sm" name="options" defaultValue={1}>
                    <ToggleButton onChange={this.changeArtist} className="secondary" value={1}>Artists</ToggleButton>
                    <ToggleButton onChange={this.changeTracks} className="secondary" value={2}>Tracks</ToggleButton>
                </ToggleButtonGroup>
                <br/>
            </ButtonToolbar>
            <ButtonToolbar>
            <ToggleButtonGroup  type="radio" size="sm" name="options" defaultValue={1}>
                <ToggleButton onChange={this.changeShort} className="secondary" value={1}>Short Term</ToggleButton>
                <ToggleButton onChange={this.changeMed} className="secondary" value={2}>Medium Term</ToggleButton>
                <ToggleButton onChange={this.changeLong} className="secondary" value={3}>Long Term</ToggleButton>
            </ToggleButtonGroup>
        </ButtonToolbar>
        <Button size='sm' id="myButton" onClick={this.fetchUser}>Submit</Button>
        <div>
        { this.state.response == null ?
        ( <div></div>) : (
            <div>
            { this.state.response.href.includes("top/artists") ? (
                <div>
                <br/>
                <b>Average Popularity: </b>{getPopularityArtists(this.state.response.items)}
                <br/>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row><Col sm={4}>
                <ListGroup>
                  {this.state.response.items.map((item, index) => (
                      <OverlayTrigger
                        data={item.name}
                        placement="right-start"
                        trigger='focus'
                        overlay={
                            <div><ArtistCard
                                    popularity={item.popularity}
                                    genres={item.genres}
                                    name={item.name}
                                    image={item.images[0].url}/>
                                    </div>}>
                          <ListGroup.Item variant="dark" action><b>{index + 1}  {item.name}</b></ListGroup.Item>
                      </OverlayTrigger>
                  ))}
                  </ListGroup>
                  </Col>
                  </Row>
                  </Tab.Container>
                </div>
            ) : (
              <div>
              <br/>
              <b>Average Popularity: </b>{getPopularityTracks(this.state.response.items)}
              <br/>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row><Col sm={4}>
            <ListGroup>
              {this.state.response.items.map((item, index) => (
                  <OverlayTrigger
                    data={item.name}
                    placement="right-start"
                    trigger='focus'
                    overlay={
                        <div><TrackCard
                                popularity={item.popularity}
                                artist={item.artists[0].name}
                                album={item.album.name}
                                name={item.name}
                                image={item.album.images[0].url}/>
                                </div>}>
                      <ListGroup.Item variant="dark" action><b>{index + 1}  {item.name}</b></ListGroup.Item>
                  </OverlayTrigger>
              ))}
              </ListGroup>
              </Col>
              </Row>
              </Tab.Container>
            </div>)
            }
            </div>
            )
        }
        </div>
        </div>
        ) }
        </div>

    );
  }
}

export default Personalization;
