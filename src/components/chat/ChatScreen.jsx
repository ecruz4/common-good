import React, { useContext } from 'react';
import { Container } from '@material-ui/core';

// PROPS PASSED FROM ROUTER
// import { useLocation } from 'react-router-dom';

import ChatRoom from './ChatRoom';
import SignupButton from '../modals/SignupButton';
import UserContext from '../../contexts/UserContext';
// import db from '../../db/firebase';

function ChatScreen() {
  // const location = useLocation();
  // const { userId } = location.state;
  const { user } = useContext(UserContext);

  return (
    <Container maxWidth="xs">
      <div>{user ? <ChatRoom /> : <SignupButton />}</div>
    </Container>
  );
}

export default ChatScreen;
