import React, { Component } from 'react';
import NavBar from './Components/Navbar.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home'
import Spotify from './Spotify/Spotify'
import Spotify_Visualization from './Spotify/Visualization'
import Crypto from './Crypto/Crypto'
import Json from './Json/Json'

const queryString = require('query-string');

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/spotify/action",
        component: Spotify
    },
    {
        path: "/json",
        component: Json
    },
    {
        path: "/crypto",
        component: Crypto,
    }
]

function RouteWithSubRoutes(route) {
    return (
        <Route
          path={route.path}
          exact={route.exact}
          // pass the sub-routes down to keep nesting
          render={props => (<route.component {...props} routes={route.routes} token={route.token}/>)}
        />
    );
}

class App extends Component {
    constructor(props){
      super(props);
      const parsedHash = queryString.parse(window.location.search);
      const token = parsedHash.token
      if (token == null){
          this.props.token = ""
      } else {
          this.props.token = token
      }
    }


  render() {
    return (
        <Router>
            <div>
                <div><NavBar lock={this.props.token}/></div>
                {routes.map((route, i) => ( <RouteWithSubRoutes token={this.props.token} key={i} {...route} />))}
            </div>
        </Router>
    );
  }
}

export default App;
