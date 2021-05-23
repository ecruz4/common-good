import React, { useEffect, useState } from 'react';
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
    <div>
      {docs.map((doc) =>
        <CharityTile doc={doc} key={doc.name}/>
      )}
    </div>
  );

}


export default AllCharities;
