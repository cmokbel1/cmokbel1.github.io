import { Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, NavLink, NavbarText, Collapse } from 'reactstrap'
import React from 'react'

const Header = (props) => {
  const onLinkClick = props.onLinkClick;
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
              <NavLink href="#" id="about" onClick={onLinkClick}>
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" id="portfolio" onClick={onLinkClick}>
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="git" href="https://github.com/cmokbel1">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="resume" href="https://docs.google.com/document/d/1qDSDDD5YhWwbehIJk1GwWd21AXvW0KzKfo6XbMRJWbs/edit?usp=sharing">
                Resume
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

export default Header