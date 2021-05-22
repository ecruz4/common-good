/* eslint-disable import/no-extraneous-dependencies */
import { Button } from '@material-ui/core';
import React from 'react';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';

import fire from '../../db/firebase';

function LoginButton() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    fire.auth.signInWithPopup(provider);
  };

  const [user] = useAuthState(fire.auth);
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
          <p>Name: {fire.auth.currentUser.name}</p>
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
