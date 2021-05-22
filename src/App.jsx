import React from 'react';

import DonorModal from './components/modals/DonorModal';
import LoginButton from './components/modals/LoginButton';
import LogoutButton from './components/modals/LogoutButton';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <DonorModal />
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
