import {
  auth,
  signInWithGoogle as firebaseSignInWithGoogle
} from 'api/firebase';
import { userDataAccess } from 'dataAccess';

export function onUserStateChange(callback) {
  return auth.onAuthStateChanged(callback);
}

/**
 * Registers a new user and returns a Promise for the User object.
 */
export async function register({ displayName, email, password }) {
  const {
    user: userAuth
  } = await auth.createUserWithEmailAndPassword(email, password);
  return userDataAccess.createUser({ ...userAuth, displayName });
}

export function signIn({ email, password }) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signInWithGoogle() {
  return firebaseSignInWithGoogle();
}

export function signOut() {
  return auth.signOut();
}
