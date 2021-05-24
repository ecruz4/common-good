import React, { useEffect, useState } from 'react';
import firestore from '../db/firebase';
// import UserContext from '../contexts/UserContext';
import OfferTile from './tiles/OfferTile';


const AllOffers = () => {

  const [docs, setDocs] = useState([]);


  useEffect(() => {
    const allDocs = [];
    firestore.firestore.collection("offers").where("donor_id", "==", "mVYqsR5DJDbMoI51VlmZBrceX6Y2")
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
    <div>
      {docs.map((doc) =>
        <OfferTile doc={doc} isProfilePage key={doc.title}/>
      )}
    </div>
  );

}


export default AllOffers;