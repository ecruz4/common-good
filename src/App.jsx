/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';


import db from './db/firebase';
import UserContext from './contexts/UserContext';
import LoginButton from './components/modals/LoginButton';
import LogoutButton from './components/modals/LogoutButton';
import SignupButton from './components/modals/SignupButton';
import OrgSignupButton from './components/modals/OrgSignupButton';
import Donations from './details/donations';
import Map from './details/map';

import AllRequests from './components/AllRequests';
import AllOffers from './components/AllOffers';
import AllCharities from './components/AllCharities';

// To use context:
// In the file you want to access the value in,
// import React, { useContext } from 'react';
// import UserContext from '../../contexts/UserContext'; Or whatever the relative path is
// const { user } = useContext(UserContext);
// You can now use user like any other variable!

function App() {
  // user stores authentication data, like email and uid
  const [user] = useAuthState(db.auth);
  // userInfo will store a lot more, like email, and uid, but also bio, pic, etc...
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (user === null) {
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
    <div className="App">
      <UserContext.Provider value={{ user, userInfo }}>
        <SignupButton />
        <LoginButton />
        <LogoutButton />
        <OrgSignupButton />
        <Donations />
        <Map />

        {/* <AllRequests />
        <div>--------------------</div>
        <AllOffers />
        <div>--------------------</div>
        <AllCharities /> */}
      </UserContext.Provider>
    </div>
  );
}

export default App;
