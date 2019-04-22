import React, { Component } from 'react';
import '../css/style.scss'
import {InputGroup, FormControl, Button, ToggleButton, ToggleButtonGroup, ButtonToolbar} from 'react-bootstrap';
import JSONTree from 'react-json-tree'
import SpotifyArtist from '../Components/SpotifyArtist.jsx'

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

class SpotifyRequest extends Component {
  constructor(props) {
      super(props);
      this.state = {
          value : this.props.data,
          token : this.props.initToken,
          response : "",
          help : false,
          pretty : false,
          prettyCapable : false
      }
  }

  fetchJSON = () => {
        var request = {
            url: this.state.value,
            access_token: this.state.token
        }
        fetch("/req",{
          method: 'POST',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify(request)
        })
          .then(res => res.json() )
          .then((data) => {
              this.setState({response:data})
              this.showPrettyView()
           })
  }

  showPrettyView = (data) => {
      var resObj = this.state.response
      console.dir(resObj)
      if (resObj == null || resObj.href == null) {
          this.setState({prettyCapable:false})
      } else if (resObj.href == "") {
          this.setState({prettyCapable:true})
      } else if (resObj.href.includes("https://api.spotify.com/v1/artists")) {
          this.setState({prettyCapable:true})
      } else {
          this.setState({prettyCapable:false})
      }
  }

  toggleHelp = () => {
      if (this.state.help) {
          this.setState({help:false})
      } else {
          this.setState({help:true})
      }
  }

  togglePretty = () => {
      if (this.state.pretty) {
          this.setState({pretty:false})
      } else {
          this.setState({pretty:true})
      }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data !== prevState.data) {
      this.showPrettyView(this.state.data)
    }
  }

  render() {
    return (
        <div>
          <ButtonToolbar style={{float: 'right'}}>
              <ToggleButtonGroup onChange={this.togglePretty} type="radio" size="sm" name="options" defaultValue={2}>
                  <ToggleButton className="secondary" value={1}><sm>Pretty</sm></ToggleButton>
                  <ToggleButton className="secondary" value={2}>Raw JSON</ToggleButton>
              </ToggleButtonGroup>
          </ButtonToolbar>

          <h2>Spotify API</h2>

          <div className="thirdsDiv">
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                    <Button id="myButton" onClick={this.fetchJSON}>Submit</Button>
                </InputGroup.Prepend>
                <FormControl onChange={event => this.setState({value : event.target.value})}/>
                <div className="helpicon"><i onClick={this.toggleHelp} class="fas fa-info-circle"></i></div>
            </InputGroup>
                { this.state.help ? (
                    <div className="helptext"><p><small>Try something like <i>https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s</i><br/>
                    The Spotify API documentation can be referenced <a target="_blank" href="https://developer.spotify.com/documentation/web-api/reference/">here.</a></small></p></div>
                ) : (
                    <div></div>
                )}
          </div>
          <div className="halvesDiv">
            { this.state.pretty  ? (
                <div>
                { this.state.prettyCapable ? (
                  <div><SpotifyArtist shouldUpdate={this.state.prettyCapable} token={this.state.token} data={this.state.response}/></div>
                ) : (
                  <div><p>Sorry, Pretty Mode is not available for this request.</p></div> )
                }
                </div>
            ) : (
                <div>
                  <b>Received:</b> <JSONTree data={this.state.response} theme={theme} invertTheme={true} />
                </div>
            )}
          </div>
    </div>
    );
  }
}

export default SpotifyRequest
