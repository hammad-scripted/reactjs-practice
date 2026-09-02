import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Context API Example</h1>
        {/* Header has no props passed to it directly */}
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;