import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon, Form, FormControl, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

const defaultState = { data: null, error: null};

function resetState() {
    console.log(this)
    this.setState(defaultState)
}

class appNavbar extends Component {

  render() {
    return (
        <Navbar variant="dark" bg="dark" expand="sm">
          <LinkContainer to="/">
            <Navbar.Brand>Chan.io</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

                <LinkContainer to="/json">
                  <Nav.Link>JSON</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/crypto">
                  <Nav.Link>Crypto</Nav.Link>
                </LinkContainer>

                <NavDropdown title="Spotify API" id="basic-nav-dropdown">
                    <LinkContainer to="/spotify/auth">
                      <NavDropdown.Item>Authenticate</NavDropdown.Item>
                    </LinkContainer>

                    <NavDropdown.Divider />

                    <LinkContainer to="/spotify/api">
                        <NavDropdown.Item>API</NavDropdown.Item>
                    </LinkContainer>

                <LinkContainer to="/spotify/personalization">
                    <NavDropdown.Item>Personalizations</NavDropdown.Item>
                </LinkContainer>

              </NavDropdown>

            </Nav>
            { this.props.lock == "" ? (
                <Nav.Link><i class="fas fa-lock-open"></i></Nav.Link>
            ) : (
                <Nav.Link><i class="fas fa-lock"></i></Nav.Link>
            )}
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-1" size="sm" />
              <Button variant="outline-primary" size="sm">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default appNavbar;
