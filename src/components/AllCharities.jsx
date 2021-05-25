import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import firestore from '../db/firebase';
import CharityTile from './tiles/CharityTile';


const AllCharities = ({ searchTerm, criteria }) => {
  const [docs, setDocs] = useState([]);
  const allDocs = [];

  const capitalize = (str) => {
    let output = '';
    if (str !== '') {
      str.split(' ').forEach((w) => {
        if (w !== '') {
          output += w[0].toUpperCase() + w.slice(1) + ' ';
        }
      });
      return output.slice(0, -1);
    }
  }

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

  const searchCharityByCriteria = (field, operator, term) => {
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
    searchCharityByCriteria("search_name", "array-contains", term);
  }

  const findCharitiesByCity = (term) => {
    searchCharityByCriteria("city", "==", term);
  }

  const findCharitiesByState = (term) => {
    searchCharityByCriteria("state", "==", term)
  }

  const findCharitiesByTheme = (term) => {
    searchCharityByCriteria("focus", "==", term)
  }

  useEffect(() => {

    if (searchTerm === '') {
      findAllCharities();
    } else if (criteria === 'name') {
      console.log('Searching by name');
      findCharitiesByName(searchTerm);
    } else if (criteria === 'city') {
      console.log('Searching by city');
      findCharitiesByCity(capitalize(searchTerm));
    } else if (criteria === 'state') {
      console.log('Searching by state');
      findCharitiesByState(searchTerm);
    } else if (criteria === 'theme') {
      console.log('Searching by theme');
      findCharitiesByTheme(capitalize(searchTerm));
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
