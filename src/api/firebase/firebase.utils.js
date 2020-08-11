import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyA1Km1BnTfhW8lq0e0NWTzEy26jP1pZc4g',
  authDomain: 'crown-db-96729.firebaseapp.com',
  databaseURL: 'https://crown-db-96729.firebaseio.com',
  projectId: 'crown-db-96729',
  storageBucket: 'crown-db-96729.appspot.com',
  messagingSenderId: '1043888943585',
  appId: '1:1043888943585:web:c7a5037589943df78962a0',
  measurementId: 'G-6RC22QEXM0'
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export function signInWithGoogle() {
  return auth.signInWithPopup(provider);
}

export default firebase;
