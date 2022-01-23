import { Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, NavLink, NavbarText, Collapse } from 'reactstrap'
import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar
          color="success"
          expand="md"
          dark
        >
          <NavbarBrand href="/">
            CLM
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="#">
                  About Me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/Project">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/cmokbel1">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              Full Stack Web Developer
            </NavbarText>
          </Collapse>
        </Navbar>
      </>
    )
  }
}

export default Header