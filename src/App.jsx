import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import db from './db/firebase';
import UserContext from './contexts/UserContext';

// Routed Components
import AllRequests from './components/AllRequests';
import AllOffers from './components/AllOffers';
import AllCharities from './components/AllCharities';
import SearchOrgs from './components/SearchOrgs';

import Profile from './components/profile-page/Profile';
import Header from './HomePageComponents/Header';
import Homepage from './HomePageComponents/Homepage';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#ffff57',
//       main: '#ffed03',
//       dark: '#c7bb00',
//       contrastText: '#000000',
//     },
//     secondary: {
//       light: '#6ec6ff',
//       main: '#2196f3',
//       dark: '#0069c0',
//       contrastText: '#000000',
//     },
//   },
// });

function App() {
  return (
    <>
      <Router>
        <Header title="Common Good" />
        {/* <SearchOrgs/> */}
        <AllRequests/>
        <AllOffers/>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/donations" exact component={AllOffers} />
          <Route path="/charities" exact component={AllCharities} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
