/* eslint-disable prefer-const */
/* eslint-disable object-shorthand */
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

function EditProfileModal({ handleClose }) {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [name, setName] = useState(userInfo.name);
  const [phone, setPhone] = useState(userInfo.phone);
  const [zip, setZip] = useState(userInfo.zipcode);
  const [bio, setBio] = useState(userInfo.bio);
  const [photo, setPhoto] = useState(userInfo.photo_url);


  const classes = useStyles();

  const handleSubmit = () => {
    db.firestore.collection("users").where("uid", "==", userInfo.uid)
      .get()
      .then((query) => {
        let docId = query.docs[0].id;
        db.firestore.collection("users").doc(docId)
          .update({
            name: name,
            phone: phone,
            zipcode: zip,
            bio: bio,
            photo_url: photo
          })
          .then(() => {
            console.log('Document successfully updated!')
            setUserInfo({
              name: name,
              phone: phone,
              zipcode: zip,
              bio: bio,
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
        label="Photo"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={photo}
        onChange={(event) => setPhoto(event.target.value)}
      />
      <Container className={classes.buttonContainer}>
        <Button style={{ margin: 8, background: '#2196f3', color: 'white'}} onClick={handleSubmit}>
          Update
        </Button>
        <Button style={{ margin: 8, background: '#2196f3', color: 'white'}} onClick={handleClose} >
          Cancel
        </Button>
      </Container>
    </Container>
  );
}

export default EditProfileModal;
