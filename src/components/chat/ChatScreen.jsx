import React, { useContext } from 'react';

import ChatRoom from './ChatRoom';
import SignupButton from '../modals/SignupButton';
import UserContext from '../../contexts/UserContext';

function ChatScreen() {
  const { user } = useContext(UserContext);

  return <div>{user ? <ChatRoom /> : <SignupButton />}</div>;
}

export default ChatScreen;
