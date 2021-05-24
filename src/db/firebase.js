/* eslint-disable import/no-extraneous-dependencies */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

const auth = firebase.auth();
const firestore = firebase.firestore();

export default { auth, firestore };
