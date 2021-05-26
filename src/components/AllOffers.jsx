import React, { useEffect, useState, useContext } from 'react';
import { Grid } from '@material-ui/core';
import firestore from '../db/firebase';
import OfferTile from './tiles/OfferTile';
import capitalize from '../utils/capitalize';
import { expiryThreshold } from '../utils/moment';

const AllOffers = ({ uid, searchTerm }) => {
  const [docs, setDocs] = useState([]);
  const retrievedDocs = [];

  const findAll = () => {
    firestore.firestore
      .collection('offers')
      .orderBy('date', 'asc')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const createTimeInMs = doc.data().date.toMillis();
          // filter for listings no older than 60 days
          if (createTimeInMs > expiryThreshold) {
            const docWithExpiryDate = {
              ...doc.data(),
              expiry: createTimeInMs - expiryThreshold,
            };
            retrievedDocs.push(docWithExpiryDate);
          }
        });
        setDocs(retrievedDocs);
      })
      .catch((err) => console.log(err.message));
  };

  const findByCriteria = (field, operator, term) => {
    firestore.firestore
      .collection('offers')
      .where(field, operator, term)
      .orderBy('date', 'asc')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const createTimeInMs = doc.data().date.toMillis();
          // filter for listings no older than 60 days
          if (createTimeInMs > expiryThreshold) {
            const docWithExpiryDate = {
              ...doc.data(),
              expiry: createTimeInMs - expiryThreshold,
            };
            retrievedDocs.push(docWithExpiryDate);
          }
        });
        setDocs(retrievedDocs);
      })
      .catch((err) => console.log(err.message));
  };

  const findByName = (term) => {
    findByCriteria('title', '==', capitalize(term));
  };

  const findByUid = (id) => {
    findByCriteria('donor_id', '==', id);
  };

  useEffect(() => {
    // if a donor's uid is passed as prop, component will render all OfferTiles related to that donor.
    // if no uid is provided, component will default to listening to searches by item name.
    // if no search term exists, it will render all OfferTiles, prioritizing older listings (close to expiry).

    if (uid) {
      findByUid(uid);
    } else if (!searchTerm || searchTerm === '') {
      findAll();
    } else {
      findByName(searchTerm);
    }
  }, [searchTerm]);

  return (
    <Grid container spacing={3}>
      {docs.map((doc) => (
        <OfferTile doc={doc} key={doc.title} />
      ))}
    </Grid>
  );
};

export default AllOffers;
