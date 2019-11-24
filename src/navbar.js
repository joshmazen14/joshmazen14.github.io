import React from 'preact';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'shards-react';


const SiteNavbar = (props) => (
  <Navbar theme='primary' type='dark'>
    <NavbarBrand href='/'>Josh Mazen</NavbarBrand>

    <Nav navbar>
      <NavLink href='/about'>
        <NavItem>
          <a href='/about'>About</a>
        </NavItem>
      </NavLink>
    </Nav>
    <Nav navbar>
      <NavItem>
        <NavLink href='https://www.linkedin.com/in/joshmazen/'>
          Linkedin
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
)

export default SiteNavbar