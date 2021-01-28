import React from 'react'
import logo from './image.ico';
import './Logo.css';

const Logo = () => {
    return (
      <div className="Logo-container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
}

export default Logo