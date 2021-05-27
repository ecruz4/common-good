import React, { useEffect, useState, useContext } from 'react';
import { Grid, Button, Slide, makeStyles } from '@material-ui/core';
import firestore from '../db/firebase';
import OfferTile from './tiles/OfferTile';
import capitalize from '../utils/capitalize';
import { expiryThreshold } from '../utils/moment';

const useStyles = makeStyles((theme) => ({
  moreButton: {
    marginTop: 30,
  },
}));

const AllOffers = ({ uid, searchTerm }) => {
  const classes = useStyles();
  const [docs, setDocs] = useState([]);
  const retrievedDocs = [];
  const [lastVisibleDoc, setLastVisibleDoc] = useState({});
  const [noMoreDocs, setNoMoreDocs] = useState(true);

  const findAll = () => {
    firestore.firestore
      .collection('offers')
      .orderBy('date', 'asc')
      .limit(2)
      .get()
      .then((querySnapshot) => {
        setLastVisibleDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
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
        setTimeout(() => setNoMoreDocs(false), 500);
      })
      .catch((err) => console.log(err.message));
  };

  const findMore = () => {
    firestore.firestore
      .collection('offers')
      .orderBy('date', 'asc')
      .startAfter(lastVisibleDoc)
      .limit(2)
      .get()
      .then((querySnapshot) => {
        const numOfDocsFetched = querySnapshot.docs.length;
        if (numOfDocsFetched > 0) {
          setNoMoreDocs(false);
          setLastVisibleDoc(querySnapshot.docs[numOfDocsFetched - 1]);

          querySnapshot.forEach((doc) => {
            const createTimeInMs = doc.data().date.toMillis();
            // filter for listings no older than 60 days
            if (createTimeInMs > expiryThreshold) {
              const docWithExpiryDate = {
                ...doc.data(),
                expiry: createTimeInMs - expiryThreshold,
              };
              retrievedDocs.push(docWithExpiryDate);
              setDocs([...docs, ...retrievedDocs]);
              setNoMoreDocs(false);
            }
          });
        } else {
          console.log('No more offers to fetch.');
          setNoMoreDocs(true);
        }
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
    <>
      <Grid container spacing={3}>
        {docs.map((doc) => (
          <OfferTile doc={doc} key={doc.title} />
        ))}
      </Grid>

      {noMoreDocs || searchTerm ? (
        <></>
      ) : (
        <Slide direction="up" in>
          <Button
            className={classes.moreButton}
            variant="contained"
            color="primary"
            onClick={() => findMore()}
          >
            more
          </Button>
        </Slide>
      )}
    </>
  );
};

export default AllOffers;
