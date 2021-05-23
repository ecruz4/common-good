import React, { useEffect, useState } from 'react';
import firestore from '../db/firebase';
// import UserContext from '../contexts/UserContext';
import RequestTile from './tiles/RequestTile';


const SearchGoods = () => {

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
    <>
      {/* {JSON.stringify(docs)} */}
      {docs.map((doc) =>
        <RequestTile doc={doc} isProfilePage key={doc.title}/>
      )}
    </>
  );

}


export default SearchGoods;