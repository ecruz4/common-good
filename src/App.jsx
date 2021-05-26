import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Database
import { useAuthState } from 'react-firebase-hooks/auth';
import db from './db/firebase';
import UserContext from './contexts/UserContext';

// Routed Components
import SearchOrgs from './components/SearchOrgs';
import SearchDonations from './components/SearchDonations';
import Profile from './components/profile-page/Profile';
import Header from './HomePageComponents/Header';
import Homepage from './HomePageComponents/Homepage';

function App() {
  const [user] = useAuthState(db.auth);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (user === null) {
      setUserInfo(null);
      return;
    }
    db.firestore
      .collection('users')
      .where('uid', '==', user.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUserInfo(doc.data());
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }, [user]);

  return (
    <>
      <UserContext.Provider value={{ user, userInfo }}>
        <Router>
          <Header title="CommonGood" />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/donations" exact component={SearchDonations} />
            {/* <Route path="/donations/:pid" exact component={donationDetail} /> */}
            <Route path="/charities" exact component={SearchOrgs} />
            <Route path="/profile/:uid" exact component={Profile} />
            {/* <Route path="/chat/:uid" exact component={ChatScreen} /> */}
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
