import { Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, NavLink, NavbarText, Collapse } from 'reactstrap'
import React, { useState } from 'react';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onLinkClick = props.onLinkClick;

  return (
    <>
      <Navbar
        expand="md"
        fixed="top"
        className="navbar navbar-light bg-light"
      >
        <NavbarBrand style={{ cursor: "pointer" }}>
          CLM
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} onClick={toggle} navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink onClick={onLinkClick} id="portfolio" style={{ cursor: "pointer" }}>
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={onLinkClick} id="contact" style={{ cursor: "pointer" }}>
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="git" href="https://github.com/cmokbel1">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="resume" href="myResume.pdf">
                Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="LinkedIn" href="https://www.linkedin.com/in/claude-mokbel-aa076788/">
                LinkedIn
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