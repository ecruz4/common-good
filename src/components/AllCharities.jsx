import React, { useEffect, useState } from 'react';
import { Grid, Button, Slide, makeStyles } from '@material-ui/core';
import firestore from '../db/firebase';
import CharityTile from './tiles/CharityTile';
import capitalize from '../utils/capitalize';

const useStyles = makeStyles((theme) => ({
  moreButton: {
    marginTop: 20,
  },
}));

const AllCharities = ({ searchTerm, criteria }) => {
  const classes = useStyles();
  const retrievedDocs = [];
  const [docs, setDocs] = useState([]);
  const [lastVisibleDoc, setLastVisibleDoc] = useState({});
  const [noMoreDocs, setNoMoreDocs] = useState(true);

  const findInitialCharities = () => {
    firestore.firestore
      .collection('organizations')
      .orderBy('name', 'asc')
      .limit(2)
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

  const findMoreCharities = () => {
    firestore.firestore
      .collection('organizations')
      .orderBy('name', 'asc')
      .startAfter(lastVisibleDoc)
      .limit(2)
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
          console.log('No more docs to fetch.');
          setNoMoreDocs(true);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const findCharityByCriteria = (field, operator, term) => {
    firestore.firestore
      .collection('organizations')
      .where(field, operator, term)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          retrievedDocs.push(doc.data());
        });
        setDocs(retrievedDocs);
      })
      .catch((err) => console.log(err.message));
  };

  const findCharitiesByName = (term) => {
    findCharityByCriteria('search_name', 'array-contains', term);
  };

  const findCharitiesByCity = (term) => {
    findCharityByCriteria('city', '==', capitalize(term));
  };

  const findCharitiesByState = (term) => {
    findCharityByCriteria('state', '==', term.toUpperCase());
  };

  const findCharitiesByTheme = (term) => {
    findCharityByCriteria('focus', '==', capitalize(term));
  };

  const searchSelection = {
    name: findCharitiesByName,
    city: findCharitiesByCity,
    state: findCharitiesByState,
    theme: findCharitiesByTheme,
  };

  useEffect(() => {
    if (!searchTerm || searchTerm === '') {
      findInitialCharities();
    } else {
      searchSelection[criteria](searchTerm);
    }
  }, [searchTerm]);

  return (
    <>
      <Grid container spacing={3}>
        {docs.map((doc) => (
          <CharityTile className="charity-tile" doc={doc} key={doc.name} />
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
            onClick={() => findMoreCharities()}
          >
            more
          </Button>
        </Slide>
      )}
    </>
  );
};

export default AllCharities;
