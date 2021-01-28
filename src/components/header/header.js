import React from 'react'
import styled from 'styled-components'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Linkedin from '../../svg/linkedin.svg';
import Github from '../../svg/github.svg';
import Mail from "../../svg/gmail.svg";
import twitter from "../../svg/twitter.svg";
// import JS from "../../svg/javascript.svg";
// import Node from "../../svg/node.svg";
// import reactLogo from "../../svg/react.svg";


const Navigation = () => {
    return (
    <MyNavbar collapseOnSelect expand="lg" bg="ligth">
      <Navbar.Brand href="#home" style={{color: `#999`, fontSize: `2em`}}>Frank Luis-Ravelo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/*
          <Nav.Link href="#pricing" disabled>Button</Nav.Link>
          <Nav.Link href="#pricing" disabled>Disable</Nav.Link>
          */}
        </Nav>
        <Nav.Link href="https://www.linkedin.com/in/franklr" target="_blank" rel="noopener noreferrer"><Icon src={Linkedin} alt="Linkedin" />
          </Nav.Link>

        <Nav.Link href="https://www.github.com/frankazo" target="_blank" rel="noopener noreferrer"><Icon src={Github} alt="Linkedin" />
          </Nav.Link>

        <Nav.Link href="https://www.twitter.com/frankazolr" target="_blank" rel="noopener noreferrer"><Icon src={twitter} alt="Linkedin" />
          </Nav.Link>

        <Nav.Link href="mailto: Frankluisravlo@gmail.com"><Icon src={Mail} alt="Linkedin" />
          </Nav.Link>
      </Navbar.Collapse>
    </MyNavbar>
    )
}

const MyNavbar = styled(Navbar)`
  background-color: #282c34;
  margin-bottom: -60px;
  `

const Icon = styled.img`
  width: 40px;
  height: auto;
`

export default Navigation