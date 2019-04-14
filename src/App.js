import React, { Component } from 'react';
import NavBar from './Components/Navbar.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home'
import Spotify from './Spotify/Spotify'
import Spotify_Visualization from './Spotify/Visualization'
import Crypto from './Crypto/Crypto'

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
    // {
    //     path: "/spotify/visualizations",
    //     component: Spotify_Visualization
    // },
    {
        path: "/crypto",
        component: Crypto
    }
]

function RouteWithSubRoutes(route) {
    return (
        <Route
          path={route.path}
          exact={route.exact}
          // pass the sub-routes down to keep nesting
          render={props => (<route.component {...props} routes={route.routes} />)}
        />
    );
}

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <div><NavBar/></div>
                {routes.map((route, i) => ( <RouteWithSubRoutes key={i} {...route} />))}
            </div>
        </Router>
    );
  }
}

export default App;
