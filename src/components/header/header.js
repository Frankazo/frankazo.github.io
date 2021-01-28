import React from 'react'
import styled from 'styled-components'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Pdf from './frankluisravelo.pdf';
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
      <Brand style={{color: `#fff`}} href={Pdf} target = "_blank">Frank Luis-Ravelo</Brand>
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
  min-height: 10vh;
  `

const Brand = styled(Navbar.Brand)`
  font-family: 'Bungee Shade', cursive;
  font-size: 2em;

  @media only screen and (max-width: 600px) {
    font-size: 1.2em;
  }
`

const Icon = styled.img`
  width: 35px;
  height: auto;

  :hover {
  animation: Icon-animation infinite 10s linear;
    @keyframes Icon-animation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
`

export default Navigation