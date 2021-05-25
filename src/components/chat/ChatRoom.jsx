/* eslint-disable import/no-extraneous-dependencies */
import { Button, Typography, TextField } from '@material-ui/core';
import React, { useState, useRef } from 'react';

import { useCollectionData } from 'react-firebase-hooks/firestore';

import db from '../../db/firebase';
import ChatMessage from './ChatMessage';

function ChatRoom() {
  const messagesRef = db.firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const dummy = useRef();

  const sendMessage = async (event) => {
    event.preventDefault();

    const { uid, photoURL } = db.auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: new Date(),
      uid,
      photoURL,
    });

    setFormValue('');

    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div>
        <Typography variant="h3" gutterBottom>
          {' '}
          ChatRoom
        </Typography>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy} />
      </div>
      <form onSubmit={sendMessage}>
        <TextField
          value={formValue}
          onChange={(event) => setFormValue(event.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default ChatRoom;
