/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';

import db from '../../db/firebase';
import UserContext from '../../contexts/UserContext';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    margin: 10,
    marginTop: 30,
  },
});

function OfferModal({ handleClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imgURL, setImgURL] = useState('');
  const { user } = useContext(UserContext);

  const classes = useStyles();

  const handleSubmit = () => {
    if (!user) {
      console.log('Must be logged in to make a donation');
      return;
    }
    const offerData = {
      donor_id: user.uid,
      date: new Date(),
      id: uuidv4(),
      title,
      description,
      quantity,
      imgURL: `https://source.unsplash.com/400x200/?${title}`,
    };
    db.firestore
      .collection('offers')
      .doc()
      .set(offerData)
      .then(() => {
        handleClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container className={classes.container}>
      <TextField
        color="secondary"
        id="standard-full-width"
        label="Donation Item"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        color="secondary"
        id="standard-full-width"
        label="Description"
        style={{ margin: 8 }}
        margin="normal"
        multiline
        InputLabelProps={{
          shrink: true,
        }}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <TextField
        color="secondary"
        id="standard-full-width"
        label="Quantity"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
      {/* <TextField
        id="standard-full-width"
        label="Image URL"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={imgURL}
        onChange={(event) => setImgURL(event.target.value)}
      /> */}

      <Container>
        <Button
          className={classes.button}
          style={{ margin: 8, background: '#2196f3', color: 'white' }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          className={classes.button}
          style={{ margin: 8, background: '#2196f3', color: 'white' }}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Container>
    </Container>
  );
}

export default OfferModal;
