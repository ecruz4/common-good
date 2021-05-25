import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';




const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffff57',
      main: '#ffed03',
      dark: '#c7bb00',
      contrastText: '#000000',
    },
    secondary: {
      light: '#6ec6ff',
      main: '#2196f3',
      dark: '#0069c0',
      contrastText: '#000000',
    },
    background: {
      default: '#6ec6ff'
    },
  },

});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
