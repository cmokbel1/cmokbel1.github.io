import { Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, NavLink, NavbarText, Collapse } from 'reactstrap'
import React, { useState } from 'react';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onLinkClick = props.onLinkClick;
  
  return (
    <>
      <Navbar
        color="success"
        expand="md"
        fixed="top"
      >
        <NavbarBrand>
          CLM
        </NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink onClick={onLinkClick} id="about">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={onLinkClick} id="portfolio">
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