import React from 'react';
import { useTheme } from './ThemeContext';

const Card = () => {
  const { theme, toggleTheme } = useTheme();
  if (theme === 'light') {
    return (
      <div
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '20px',
          borderRadius: '5px',
        }}
      >
        <h1>Card Component</h1>
        <p>Current theme: {theme}</p>
        <p>lorem ipsum dolor sit amet</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  }
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        borderRadius: '5px',
      }}
        >
      <h1>Card Component</h1>
      <p>Current theme: {theme}</p>
      <p>lorem ipsum dolor sit amet</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Card;
