import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import firestore from '../db/firebase';
// import UserContext from '../contexts/UserContext';
import RequestTile from './tiles/RequestTile';


const AllRequests = ({ criteria }) => {

  const [docs, setDocs] = useState([]);
  const retrievedDocs = [];

  // if

  const findAllReqsByUrgency = () => {
    firestore.firestore.collection("requests").where("org_id", "==", "mVYqsR5DJDbMoI51VlmZBrceX6Y2").orderBy("emergency", "asc")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        retrievedDocs.push(doc.data());
      });
      setDocs(retrievedDocs);
    })
    .catch((err) => console.log(err.message))
  }

  useEffect(() => {

    findAllReqsByUrgency();

    // firestore.firestore.collection("requests").where("org_id", "==", 'mVYqsR5DJDbMoI51VlmZBrceX6Y2')
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       retrievedDocs.push(doc.data());
    //     });
    //     setDocs(retrievedDocs);
    //   })
    //   .catch((err) => console.log(err.message))
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