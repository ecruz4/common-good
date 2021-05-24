/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import db from '../../db/firebase';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});

function LoginModal({ handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  const handleSubmit = () => {
    db.auth
      .signInWithEmailAndPassword(email, password)
      .then((/* cred */) => {
        // const user = userCredential.user;
        handleClose();
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
          Login
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </Container>
    </Container>
  );
}

export default LoginModal;
