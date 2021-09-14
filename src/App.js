
import React, { useState} from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./theme/globalStyles";
import { lightTheme, darkTheme } from "./theme/themes.js"

import Navbar from './components/Navbar/Navbar.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Projects from './components/Projects/Projects.js';
import Skills from './components/Skills/Skills.js';
// imp\ort Testimonials from './components/testimonials/testimonials.js';


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
          <Navbar 
            theme={theme}
            themeToggler={themeToggler}
          />
          <About />
          <Projects />
          <Skills />
          {/* <Testimonials /> */}
          <Contact />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
