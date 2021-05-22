/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import firebase from 'firebase/app';

import fire from '../../db/firebase';

function DonorModal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = () => {
    const userData = {
      name,
      email,
      zip,
    };

    firebase
      .auth()
      .signInWithEmailAndPassword(email, zip)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential.user;
        // ...
        console.log(user);
      })
      .catch(() => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });

    fire.firestore
      .collection('users')
      .doc()
      .set(userData)
      .then(() => {
        console.log('Document successfully written!');
      });
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default DonorModal;
