import React from "react";

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const {isDark, setIsDark} = useContext(ThemeContext);
  const toggleTheme = ()=>{
    setIsDark(!isDark);
  }

  return(
    <>
      <footer className="footer"
        style={{
          backgroundColor: isDark ? '#222' : '#eee',
        }}>
        <button onClick={toggleTheme}>다크모드</button>
      </footer>
    </>
  )
};

export default Footer;
