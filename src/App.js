import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState} from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./theme/globalStyles";
import { lightTheme, darkTheme } from "./theme/themes.js"

import Navigation from './components/header/header.js';
import Logo from './components/Logo/Logo.js';


function App() {
  const [theme, setTheme] = useState(false);
  const themeToggler = () => {
    theme ? setTheme(false) : setTheme(true)
}
  return (
    <ThemeProvider theme={theme? lightTheme : darkTheme}>
    <>
    <GlobalStyles/>
        <div className="App">
          <Navigation
            theme={theme}
            themeToggler={themeToggler}
          />
          <Logo/>

          {/*       
            <About />
            <Projects />
            <Skills />
            <Testimonials />
            <Contact /> 
          */}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
