import React, { useEffect, useState, useContext } from 'react';
import { Grid } from '@material-ui/core';
import firestore from '../db/firebase';
import UserContext from '../contexts/UserContext';
import OfferTile from './tiles/OfferTile';


const AllOffers = () => {

  const [docs, setDocs] = useState([]);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    // console.log(user.uid);
    // 'v9S7AcPHKaYdVWF5aPAG6SMiMvP2'
    const allDocs = [];
    firestore.firestore.collection("offers").where("donor_id", "==", userInfo.uid || 'mVYqsR5DJDbMoI51VlmZBrceX6Y2')
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
        <OfferTile doc={doc} key={doc.title}/>
      )}
    </Grid>
  );

}


export default AllOffers;