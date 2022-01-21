import React from 'react';
import {  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="success" dark expand="md">
          <NavbarBrand href="/">Claude Mokbel</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://docs.google.com/document/d/1qDSDDD5YhWwbehIJk1GwWd21AXvW0KzKfo6XbMRJWbs/">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/cmokbel1">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
