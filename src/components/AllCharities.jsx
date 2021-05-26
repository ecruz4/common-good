import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import firestore from '../db/firebase';
import CharityTile from './tiles/CharityTile';
import capitalize from '../utils/capitalize';

const AllCharities = ({ searchTerm, criteria }) => {
  const [docs, setDocs] = useState([]);
  const allDocs = [];

  const findAllCharities = () => {
    firestore.firestore.collection("organizations").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          allDocs.push(doc.data());
        });
        setDocs(allDocs);
      })
      .catch((err) => console.log(err.message))
  }

  const findCharityByCriteria = (field, operator, term) => {
    firestore.firestore.collection("organizations").where(field, operator, term)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          allDocs.push(doc.data());
        });
        setDocs(allDocs);
      })
      .catch((err) => console.log(err.message))
  }

  const findCharitiesByName = (term) => {
    findCharityByCriteria("search_name", "array-contains", term);
  }

  const findCharitiesByCity = (term) => {
    findCharityByCriteria("city", "==", capitalize(term));
  }

  const findCharitiesByState = (term) => {
    findCharityByCriteria("state", "==", term.toUpperCase())
  }

  const findCharitiesByTheme = (term) => {
    findCharityByCriteria("focus", "==", capitalize(term))
  }

  const searchSelection = {
    name: findCharitiesByName,
    city: findCharitiesByCity,
    state: findCharitiesByState,
    theme: findCharitiesByTheme
  };

  useEffect(() => {
    if (!searchTerm || searchTerm === '') {
      findAllCharities();
    } else {
      searchSelection[criteria](searchTerm);
    }
  }, [searchTerm]);

  return (
    <Grid container spacing={3}>
      {docs.map((doc) =>
        <CharityTile doc={doc} key={doc.name}/>
      )}
    </Grid>
  );

}


export default AllCharities;
