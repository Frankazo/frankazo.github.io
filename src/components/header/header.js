import React from 'react'

import './header.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
    return (
    <Navbar className='nav' collapseOnSelect expand="lg" bg="ligth">
      <Navbar.Brand className='brand' href="#home" style={{color: `#999`, fontSize: `2em`}}>Frank Luis-Ravelo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/*
          <Nav.Link href="#pricing" disabled>Button</Nav.Link>
          <Nav.Link href="#pricing" disabled>Disable</Nav.Link>
          */}
        </Nav>
        <Nav style={{color: `#999`}}>
        <p>Icon</p>
        <p>Icon</p>
        <p>Icon</p>
        <p>Icon</p>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Navigation