import React, { useContext } from 'react';

import ChatRoom from './ChatRoom';
import SignupButton from '../modals/SignupButton';
import UserContext from '../../contexts/UserContext';
import { Container } from '@material-ui/core';

function ChatScreen() {
  const { user } = useContext(UserContext);

  return (
    <Container maxWidth="sm">
      <div>{user ? <ChatRoom /> : <SignupButton />}</div>
    </Container>
  );
}

export default ChatScreen;
