import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Navigation from './components/header/header.js';
import Logo from './components/Logo/Logo.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
    </div>
  );
}

export default App;
