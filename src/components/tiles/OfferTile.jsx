import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import firestore from '../../db/firebase';


const OfferTile = ({ doc, isProfilePage }) => {

  const { donor_id, title, description, quantity, date } = doc;

  const [donor, setDonor] = useState({});

  useEffect(() => {
    firestore.firestore.collection("users").where("uid", "==", donor_id)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setDonor(doc.data());
      });
    })
    .catch((err) => console.log(err.message))
  }, []);


  return (
    <>
      {isProfilePage ?

        <div>
          <div>{title}</div>
          <div>{description}</div>
          <div>{`x ${quantity}`}</div>
          <div>{`${donor.city}, ${donor.state}`}</div>
        </div> :

        <div>
          <AccountCircleIcon />
          <div>{title}</div>
          <div>{description}</div>
          <div>{`x ${quantity}`}</div>
          <div>{`${donor.city}, ${donor.state}`}</div>
        </div>

      }
    </>
  );

}


export default OfferTile;