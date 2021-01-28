import React from 'react'
import logo from './image.ico';
import './Logo.css';
import Pdf from '../header/frankluisravelo.pdf';

const Logo = () => {
    return (
      <div className="Logo-container">
        <a href={Pdf} target = "_blank" rel="noopener noreferrer"><img src={logo} className="App-logo" alt="logo" /></a>
      </div>
    )
}

export default Logo