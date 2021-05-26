import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import firestore from '../db/firebase';
import CharityTile from './tiles/CharityTile';
import capitalize from '../utils/capitalize';

const AllCharities = ({ searchTerm, criteria }) => {
  const allDocs = [];
  const [docs, setDocs] = useState([]);
  const [lastVisibleDoc, setLastVisibleDoc] = useState({});
  const [noMoreDocs, setNoMoreDocs] = useState(false);

  const findInitialCharities = () => {
    firestore.firestore
      .collection('organizations')
      .orderBy('name', 'asc')
      .limit(2)
      .get()
      .then((querySnapshot) => {
        setLastVisibleDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          allDocs.push(doc.data());
        });
        setDocs(allDocs);
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
          setLastVisibleDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            allDocs.push(doc.data());
          });
          setDocs([...docs, ...allDocs]);
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
          allDocs.push(doc.data());
        });
        setDocs(allDocs);
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
          <CharityTile doc={doc} key={doc.name} />
        ))}
      </Grid>
      <br />
      {noMoreDocs ? (
        <div>All Charities Displayed</div>
      ) : (
        <div onClick={() => findMoreCharities()}>More</div>
      )}
    </>
  );
};

export default AllCharities;
