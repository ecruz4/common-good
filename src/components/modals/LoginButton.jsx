/* eslint-disable import/no-extraneous-dependencies */
import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import firebase from 'firebase/app';

import fire from '../../db/firebase';
import UserContext from '../../contexts/UserContext';

function LoginButton() {
  const { user } = useContext(UserContext);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    fire.auth.signInWithPopup(provider);
  };

  console.log(user && user.uid);

  // fire.firestore
  //   .collection('messages')
  //   .doc()
  //   .set({ createdAt: new Date(), text: 'test' })
  //   .then(() => {
  //     console.log('Document successfully written!');
  //   });

  return (
    <div>
      <Button onClick={signInWithGoogle} variant="contained" color="primary">
        Sign in with Google
      </Button>
      {user && (
        <>
          <p>Name: {fire.auth.currentUser.displayName}</p>
          <p>Email: {fire.auth.currentUser.email}</p>
          <p>Phone: {fire.auth.currentUser.phoneNumber}</p>
          {/* <p>photoUrl: {user.getIdToken()}</p> */}
        </>
      )}
      {!fire.auth.currentUser && <h1>No user?</h1>}
    </div>
  );
}

export default LoginButton;
