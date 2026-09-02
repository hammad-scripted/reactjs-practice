import React from 'react';
import { useTheme } from './ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  const styles = {
    header: {
      padding: '20px',
      backgroundColor: isDark ? '#1e293b' : '#f8fafc',
      color: isDark ? '#ffffff' : '#0f172a',
      borderRadius: '8px',
      textAlign: 'center',
    },
    button: {
      padding: '8px 16px',
      marginTop: '10px',
      cursor: 'pointer',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: isDark ? '#f8fafc' : '#1e293b',
      color: isDark ? '#0f172a' : '#ffffff',
      fontWeight: 'bold',
    },
  };

  return (
    <header style={styles.header}>
      <h2>Current Theme: {theme.toUpperCase()}</h2>
      <button style={styles.button} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </header>
  );
};

export default Header;