import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {yellow, lightBlue} from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: lightBlue,
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
