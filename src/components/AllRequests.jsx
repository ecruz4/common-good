import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import firestore from '../db/firebase';
// import UserContext from '../contexts/UserContext';
import RequestTile from './tiles/RequestTile';


const AllRequests = () => {

  const [docs, setDocs] = useState([]);


  useEffect(() => {
    const allDocs = [];
    firestore.firestore.collection("requests").where("org_id", "==", 'mVYqsR5DJDbMoI51VlmZBrceX6Y2')
      .get()
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
        <RequestTile doc={doc} key={doc.title}/>
      )}
    </Grid>
  );

}


export default AllRequests;