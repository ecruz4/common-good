import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import firestore from '../db/firebase';
import RequestTile from './tiles/RequestTile';
import capitalize from '../utils/capitalize';


const AllRequests = ({ uid, searchTerm }) => {

  const [docs, setDocs] = useState([]);
  const retrievedDocs = [];

  const findAllByUrgency = () => {
    firestore.firestore.collection("requests").orderBy("emergency", "asc")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        retrievedDocs.push(doc.data());
      });
      setDocs(retrievedDocs);
    })
    .catch((err) => console.log(err.message))
  }

  const findByCriteria = (field, operator, term) => {
    firestore.firestore.collection("requests").where(field, operator, term).orderBy("emergency", "asc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          retrievedDocs.push(doc.data());
        });
        setDocs(retrievedDocs);
      })
      .catch((err) => console.log(err.message))
  }

  const findByName = (term) => {
    findByCriteria('title', '==', capitalize(term));
  }

  const findByUid = (id) => {
    findByCriteria('org_id', '==', id);
  }

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
    <Grid container spacing={3}>
      {docs.map((doc) =>
        <RequestTile doc={doc} key={doc.title}/>
      )}
    </Grid>
  );

}


export default AllRequests;