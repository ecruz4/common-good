import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import firestore from '../db/firebase';
import CharityTile from './tiles/CharityTile';


const AllCharities = () => {

  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const allDocs = [];
    firestore.firestore.collection("organizations").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          allDocs.push(doc.data());
        });
        setDocs(allDocs);
      })
      .catch((err) => console.log(err.message))
  }, []);

  return (
    <Grid container spacing={3}>
      {docs.map((doc) =>
        <CharityTile doc={doc} key={doc.name}/>
      )}
    </Grid>
  );

}


export default AllCharities;
