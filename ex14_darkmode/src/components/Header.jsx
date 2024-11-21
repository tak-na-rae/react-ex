import React from 'react';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <>
      <header className="header"
        style={{
          backgroundColor: isDark ? '#222' : '#fff',
          color: isDark ? '#fff' : '#222', 
        }}>
        <h1>Welcome {user}</h1>
      </header>
    </>
  )
}

export default Header;
