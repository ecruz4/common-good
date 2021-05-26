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
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: '#ffed03',
        borderRadius: 3,
        border: 0,
        color: 'black',
        height: 25,
        // width: 50,
        padding: '0 10px',
        boxShadow: '0 3px 5px 2px rgba(51, 51, 51, .2)',



      },
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
