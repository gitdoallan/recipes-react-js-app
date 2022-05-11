import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './services/themeProvider';
import Routes from './routes';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
