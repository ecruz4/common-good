/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useRef, useContext, useEffect } from 'react';
import { Button, TextField, Container, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import db from '../../db/firebase';
import ChatMessage from './ChatMessage';
import ChatSidebar from './ChatSidebar';
import UserContext from '../../contexts/UserContext';

const useStyles = makeStyles(() => ({
  appContainer: {
    display: 'flex',
    flexDirection: 'row',
    background: '#FAF9F6',
  },
  chatContainer: {
    borderLeftWidth: '2px',
    justify: 'center',
    padding: '7px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: '10px',
  },
  messagesContainer: {
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
  textField: {
    maxWidth: '400px',
    minWidth: '400px',
  },
}));

function ChatRoom({ otherUser, setOtherUser }) {
  const [formValue, setFormValue] = useState('');

  const messagesRef = db.firestore.collection('messages');

  const { userInfo, setNewMessagesCount, relevantMessages } =
    useContext(UserContext);

  const classes = useStyles();

  useEffect(() => {
    setNewMessagesCount(0);
  }, []);

  const dummy = useRef();

  const sendMessage = async (event) => {
    if (!otherUser) {
      console.error('No other user');
      return;
    }
    event.preventDefault();

    const { uid, photoURL } = db.auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: new Date(),
      uid,
      user: userInfo.name,
      recieverId: otherUser.id,
      recieverName: otherUser.name,
      photoURL,
    });

    setFormValue('');

    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Card>
      <Container className={classes.appContainer}>
        <ChatSidebar
          otherUser={otherUser}
          setOtherUser={setOtherUser}
          relevantMessages={relevantMessages}
        />
        <Container className={classes.chatContainer}>
          <div className={classes.messagesContainer}>
            {relevantMessages &&
              relevantMessages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} otherUser={otherUser} />
              ))}
            <div ref={dummy} />
          </div>
          <Container className={classes.formContainer}>
            <form onSubmit={sendMessage}>
              <TextField
                className={classes.textField}
                value={formValue}
                onChange={(event) => setFormValue(event.target.value)}
                variant="outlined"
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
