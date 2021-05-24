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
          password,
          phone: '',
          photo_url: '',
          bio: '',
        };

        db.firestore
          .collection('users')
          .doc()
          .set(userData)
          .then(() => {
            handleClose();
          });
      })
      .catch((/* error */) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
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
      />
      <Container>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Sign Up
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </Container>
    </Container>
  );
}

export default SignupModal;
