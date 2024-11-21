import React from 'react';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

const Content = () => {
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <>
      <div className="content"
        style={{
          backgroundColor: isDark ? '#222' : '#fff',
          color: isDark ? '#fff' : '#222', 
        }}>
        <h1>{user} 좋은 하루 보내세요!</h1>
      </div>
    </>
  )
}

export default Content;
