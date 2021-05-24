import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import firestore from '../db/firebase';
import CharityTile from './tiles/CharityTile';


const AllCharities = ({ searchTerm }) => {
  const [docs, setDocs] = useState([]);
  const allDocs = [];
  console.log('docs', docs);

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

  const findCharitiesByName = (term) => {
    firestore.firestore.collection("organizations").where("search_name", "array-contains", term)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          allDocs.push(doc.data());
        });
        setDocs(allDocs);
      })
      .catch((err) => console.log(err.message))
  }

  useEffect(() => {
    if (searchTerm === '') {
      findAllCharities();
    } else {
      findCharitiesByName(searchTerm);
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
