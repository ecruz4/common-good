/* eslint-disable object-shorthand */
/* eslint-disable prefer-const */
/* eslint-disable import/order */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
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

function EditOrgModal({ handleClose }) {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [name, setName] = useState(userInfo.name);
  const [phone, setPhone] = useState(userInfo.phone);
  const [address, setAddress] = useState(userInfo.address);
  const [city, setCity] = useState(userInfo.city);
  const [state, setState] = useState(userInfo.state);
  const [zip, setZip] = useState(userInfo.zipcode);
  const [bio, setBio] = useState(userInfo.bio);
  const [url, setURL] = useState(userInfo.url);
  const [photo, setPhoto] = useState(userInfo.photo_url);


  const classes = useStyles();

  const handleSubmit = () => {
    db.firestore.collection("organizations").where("uid", "==", userInfo.uid)
      .get()
      .then((query) => {
        let docId = query.docs[0].id;
        db.firestore.collection("organizations").doc(docId)
          .update({
            name: name,
            phone: phone,
            address: address,
            city: city,
            state: state,
            zipcode: zip,
            bio: bio,
            url: url,
            photo_url: photo
          })
          .then(() => {
            console.log('Document successfully updated!')
            setUserInfo({
              name: name,
              phone: phone,
              address: address,
              city: city,
              state: state,
              zipcode: zip,
              bio: bio,
              url: url,
              photo_url: photo,
              email: userInfo.email,
              uid: userInfo.uid
            })
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => console.log(err.message));
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
        label="Phone"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <TextField
        id="standard-full-width"
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
        id="standard-full-width"
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
        id="standard-full-width"
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
        label="Bio"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={bio}
        onChange={(event) => setBio(event.target.value)}
      />
      <TextField
        id="standard-full-width"
        label="URL"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={url}
        onChange={(event) => setURL(event.target.value)}
      />
      <TextField
        id="standard-full-width"
        label="Photo"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={photo}
        onChange={(event) => setPhoto(event.target.value)}
      />      
      <Container>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Update
        </Button>
        <Button onClick={handleClose} variant="contained" color="primary">
          Cancel
        </Button>
      </Container>
    </Container>
  );
}

export default EditOrgModal;