import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './ThemeContext.tsx';
import Card from './Card.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Wrap with ThemeProvider so state and state updates work */}
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  </StrictMode>,
);