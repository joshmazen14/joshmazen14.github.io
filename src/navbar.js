import React from 'preact';
import { Navbar, NavbarBrand, Nav } from 'shards-react';

const SiteNavbar = (props) => (
  <Navbar theme='primary' type='dark'>
    <NavbarBrand href='/'>Josh Mazen</NavbarBrand>
  </Navbar>
)

export default SiteNavbar