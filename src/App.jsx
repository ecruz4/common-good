/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import db from './db/firebase';
import UserContext from './contexts/UserContext';
import LoginButton from './components/modals/LoginButton';
import LogoutButton from './components/modals/LogoutButton';
import SignupButton from './components/modals/SignupButton';

// To use context:
// In the file you want to access the value in,
// import React, { useContext } from 'react';
// import UserContext from '../../contexts/UserContext'; Or whatever the relative path is
// const { user } = useContext(UserContext);
// You can now use user like any other variable!

function App() {
  const [user] = useAuthState(db.auth);

  return (
    <div className="App">
      <UserContext.Provider value={{ user }}>
        <SignupButton />
        <LoginButton />
        <LogoutButton />
      </UserContext.Provider>
    </div>
  );
}

export default App;
