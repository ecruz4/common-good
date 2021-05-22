/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import db from './db/firebase';
import UserContext from './contexts/UserContext';
import DonorModal from './components/modals/DonorModal';
import LoginButton from './components/modals/LoginButton';
import LogoutButton from './components/modals/LogoutButton';

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
        <h1>Hello World!</h1>
        <DonorModal />
        <LoginButton />
        <LogoutButton />
      </UserContext.Provider>
    </div>
  );
}

export default App;
