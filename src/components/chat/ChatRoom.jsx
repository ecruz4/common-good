/* eslint-disable import/no-extraneous-dependencies */
import {
  Button,
  Typography,
  TextField,
  Container,
  Card,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useRef } from 'react';

import { useCollectionData } from 'react-firebase-hooks/firestore';

import db from '../../db/firebase';
import ChatMessage from './ChatMessage';
import ChatSidebar from './ChatSidebar';

const useStyles = makeStyles(() => ({
  appContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  chatContainer: {
    borderLeftWidth: '2px',
    justify: 'center',
    padding: '7px',
    // background: '#a9a9a9',
  },
  formContainer: {
    justifyContent: 'space-evenly',
    margin: '10px',
  },
  messagesContainer: {
    // background: '#121212',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '500px',
    maxHeight: '500px',
    overflow: 'auto',
    borderRadius: '5px',
  },
  submitButton: {
    margin: '0 0 0 10px',
  },
}));

function ChatRoom() {
  const classes = useStyles();
  const messagesRef = db.firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');
  const [otherUser, setOtherUser] = useState('');

  const otherUid = 'aVtjgriSnURzQsFSPLJrZfdSyXV2';
  const otherName = 'John Doe';

  const dummy = useRef();

  const sendMessage = async (event) => {
    event.preventDefault();

    const { uid, photoURL } = db.auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: new Date(),
      uid,
      recieverId: otherUid,
      recieverName: otherName,
      photoURL,
    });

    setFormValue('');

    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Card>
      <Container className={classes.appContainer}>
        <ChatSidebar setOtherUser={setOtherUser} />
        <Container className={classes.chatContainer}>
          <div className={classes.messagesContainer}>
            {messages &&
              messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} otherUser={otherUser} />
              ))}
            <div ref={dummy} />
          </div>
          <Container className={classes.formContainer}>
            <form onSubmit={sendMessage}>
              <TextField
                value={formValue}
                onChange={(event) => setFormValue(event.target.value)}
              />
              <Button
                className={classes.submitButton}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </form>
          </Container>
        </Container>
      </Container>
    </Card>
  );
}

export default ChatRoom;
