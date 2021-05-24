import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {yellow, lightBlue} from '@material-ui/core/colors';


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
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
