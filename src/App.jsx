/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyC3hpsi0rR-d63ysHHYO7gSKIZByDc3REE',
    authDomain: 'common-ground-f6ee0.firebaseapp.com',
    projectId: 'common-ground-f6ee0',
    storageBucket: 'common-ground-f6ee0.appspot.com',
    messagingSenderId: '126628518410',
    appId: '1:126628518410:web:6295ed2a3ce028a675ddf3',
    measurementId: 'G-MFBV4Y2GS2',
  };
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const firestore = firebase.firestore();

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button type="submit" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query);

  console.log(messages);

  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => {
            console.log('Test');
            return <ChatMessage key={msg.id} message={msg} />;
          })}
      </div>
    </>
  );
}

function ChatMessage({ message }) {
  const { text } = message;

  return <p>{text}</p>;
}

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      {user ? <ChatRoom /> : <SignIn />}
    </div>
  );
}

export default App;
