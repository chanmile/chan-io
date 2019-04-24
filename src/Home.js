import React, { Component } from 'react';
import './css/style.scss'

class Home extends Component {
  render() {
    return (
        <div className="mainDiv">
  <h2>Welcome to Chan.io!</h2>
  <p>
    Chan.io is a web based dashboard application. It is used to manage my
    projects as well as provide a simple and accessible way of visualizing the
    results of those projects! These projects include:
  </p>
  <ul>
    <li>Spotify API Integration</li>
    <li>Cryptography</li>
    <li><b>AND MORE</b></li>
  </ul>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
     non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <p>
 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it to make a type
 specimen book. It has survived not only five centuries, but also the leap into
 electronic typesetting, remaining essentially unchanged. It was popularised in
 the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
 and more recently with desktop publishing software like Aldus PageMaker including
 versions of Lorem Ipsum.
  </p>
  <p>Source code for this website is available <a target="_blank" href="https://github.com/chanmile/chan-io">here</a></p>
</div>
    );
  }
}

export default Home;
