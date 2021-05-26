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

const useStyles = makeStyles(() => ({
  chatContainer: {
    justify: 'center',
    padding: '7px',
    // background: '#a9a9a9',
  },
  formContainer: {
    justifyContent: 'space-evenly',
    margin: '10px',
  },
  messagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '500px',
    overflow: 'auto',
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
    <Card>
      <Container className={classes.chatContainer}>
        <div className={classes.messagesContainer}>
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
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
    </Card>
  );
}

export default ChatRoom;
