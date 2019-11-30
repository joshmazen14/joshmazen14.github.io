import React from 'preact';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'shards-react';
import { SocialIcon } from 'react-social-icons';

const SOCIAL_LINKS = [
  'https://www.linkedin.com/in/joshmazen/',
  'https://twitter.com/joshmazen',
  'https://www.instagram.com/theamazinmazen/',
  'https://github.com/joshmazen14',
];
const ICON_COLOR = '#ffffff';
const ICON_STYLE = { width: 32, height: 32, 'margin-left': 8 }


const SiteNavbar = (props) => (
  <Navbar theme='primary' type='dark'>
    <Nav navbar className='main-nav'>
      <NavbarBrand href='/'>Josh Mazen</NavbarBrand>
      <NavLink href='/about'>
        About
      </NavLink>
    </Nav>
    <Nav navbar>
      <NavItem>
        {SOCIAL_LINKS.map(link => (
          <SocialIcon target='_blank' url={link} bgColor={ICON_COLOR} style={ICON_STYLE} />
        ))}
      </NavItem>
    </Nav>
  </Navbar>
)

export default SiteNavbar