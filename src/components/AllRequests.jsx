import React, { useEffect, useState } from 'react';
import { Grid, Button, Slide, makeStyles } from '@material-ui/core';
import firestore from '../db/firebase';
import RequestTile from './tiles/RequestTile';
import capitalize from '../utils/capitalize';

const useStyles = makeStyles((theme) => ({
  moreButton: {
    marginTop: 30,
  },
}));

const AllRequests = ({ uid, searchTerm }) => {
  const classes = useStyles();
  const [docs, setDocs] = useState([]);
  const retrievedDocs = [];
  const [lastVisibleDoc, setLastVisibleDoc] = useState({});
  const [noMoreDocs, setNoMoreDocs] = useState(true);

  const findAllByUrgency = () => {
    firestore.firestore
      .collection('requests')
      .orderBy('emergency', 'asc')
      .limit(4)
      .get()
      .then((querySnapshot) => {
        setLastVisibleDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          retrievedDocs.push(doc.data());
        });
        setDocs(retrievedDocs);
        setTimeout(() => setNoMoreDocs(false), 500);
      })
      .catch((err) => console.log(err.message));
  };

  const findMoreByUrgency = () => {
    firestore.firestore
      .collection('requests')
      .orderBy('emergency', 'asc')
      .startAfter(lastVisibleDoc)
      .limit(4)
      .get()
      .then((querySnapshot) => {
        const numOfDocsFetched = querySnapshot.docs.length;
        if (numOfDocsFetched > 0) {
          setNoMoreDocs(false);
          setLastVisibleDoc(querySnapshot.docs[numOfDocsFetched - 1]);
          querySnapshot.forEach((doc) => {
            retrievedDocs.push(doc.data());
          });
          setDocs([...docs, ...retrievedDocs]);
        } else {
          console.log('No more requests to fetch.');
          setNoMoreDocs(true);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const findByCriteria = (field, operator, term) => {
    firestore.firestore
      .collection('requests')
      .where(field, operator, term)
      .orderBy('emergency', 'asc')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          retrievedDocs.push(doc.data());
        });
        setDocs(retrievedDocs);
      })
      .catch((err) => console.log(err.message));
  };

  const findByName = (term) => {
    findByCriteria('title', '==', capitalize(term));
  };

  const findByUid = (id) => {
    findByCriteria('org_id', '==', id);
  };

  useEffect(() => {
    // if an organization's uid is passed as prop, component will render all RequestTiles related to that organization.
    // if no uid is provided, component will default to listening to searches by item name.
    // if no search term exists, it will render all RequestTiles, prioritizing emergency requests.

    if (uid) {
      findByUid(uid);
    } else if (!searchTerm || searchTerm === '') {
      findAllByUrgency();
    } else {
      findByName(searchTerm);
    }
  }, [searchTerm]);

  return (
    <>
      <Grid container spacing={3}>
        {docs.map((doc) => (
          <RequestTile doc={doc} key={doc.title} />
        ))}
      </Grid>

      {noMoreDocs || searchTerm ? (
        <></>
      ) : (
        <Slide direction="up" in>
          <Button
            className={classes.moreButton}
            color='secondary'
            onClick={() => findMoreByUrgency()}
          >
            more
          </Button>
        </Slide>
      )}
    </>
  );
};

export default AllRequests;
