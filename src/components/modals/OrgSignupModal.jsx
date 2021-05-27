/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
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

function OrgSignupModal({ handleClose }) {
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [url, setUrl] = useState('');
  const [focus, setFocus] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  const handleSubmit = () => {
    db.auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        const orgData = {
          uid: cred.user.uid,
          name: orgName,
          search_name: orgName
            .toLowerCase()
            .split(' ')
            .concat([orgName.toLowerCase()]),
          email,
          address,
          city,
          state,
          zip,
          phone,
          photo_url: '',
          bio: '',
          type: 'org',
        };

        db.firestore
          .collection('organizations')
          .doc()
          .set(orgData)
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
        color="secondary"
        className="standard-full-width"
        label="Organization Name"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={orgName}
        onChange={(event) => setOrgName(event.target.value)}
      />
      <TextField
        color="secondary"
        className="standard-full-width"
        label="Charity Theme"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={url}
        onChange={(event) => setFocus(event.target.value)}
      />
      <TextField
        color="secondary"
        className="standard-full-width"
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
        color="secondary"
        className="standard-full-width"
        label="Password"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <TextField
        color="secondary"
        className="standard-full-width"
        label="Phone Number"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <TextField
        color="secondary"
        className="standard-full-width"
        label="Address"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <TextField
        color="secondary"
        className="standard-full-width"
        label="City"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <TextField
        color="secondary"
        className="standard-full-width"
        label="State"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
      <TextField
        color="secondary"
        className="standard-full-width"
        label="Zipcode"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={zip}
        onChange={(event) => setZip(event.target.value)}
      />
      <TextField
        color="secondary"
        className="standard-full-width"
        label="Organization URL"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />

      {/* <FormControl className={classes.formControl}>
        <InputLabel id="focus-select-label">Focus</InputLabel>
        <Select
          labelId="focus-select-label"
          id="focus-select"
          value={focus}
          onChange={(event) => setFocus(event.target.value)}
        >
          <MenuItem value="education">Education</MenuItem>
          <MenuItem value="animals">Animals</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl> */}
      <Container>
        <Button
          style={{
            margin: 8,
            background: '#2196f3',
            color: 'white',
            marginTop: 20,
          }}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Button
          style={{
            margin: 8,
            background: '#2196f3',
            color: 'white',
            marginTop: 20,
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Container>
    </Container>
  );
}

export default OrgSignupModal;
