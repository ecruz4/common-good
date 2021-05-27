/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
// import firebase from 'firebase/app';

import db from '../../db/firebase';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',


  },
});

function SignupModal({ handleClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  const handleSubmit = () => {
    db.auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        const userData = {
          uid: cred.user.uid,
          name,
          email,
          zip,
          phone: '',
          photo_url: 'https://images.unsplash.com/photo-1556208738-7a57e7b96aed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80',
          bio: '',
          type: 'user'
        };

        db.firestore
          .collection('users')
          .doc()
          .set(userData)
          .then(() => {
            handleClose();
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Container className={classes.container}>
      <TextField
        id="standard-full-width"
        label="Name"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="standard-full-width"
        label="Email"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        id="standard-full-width"
        label="Zip"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={zip}
        onChange={(event) => setZip(event.target.value)}
      />
      <TextField
        id="standard-full-width"
        label="Password"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        helperText="Password must be at least 6 characters"
      />
      <Container className={classes.buttonContainer}>
        <Button style={{ margin: 8, background: '#2196f3', color: 'white'}} onClick={handleSubmit}>
          Sign Up
        </Button>
        <Button style={{ margin: 8, background: '#2196f3', color: 'white'}} onClick={handleClose}>
          Cancel
        </Button>
      </Container>
    </Container>
  );
}

export default SignupModal;
