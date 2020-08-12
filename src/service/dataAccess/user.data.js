import { firestore } from 'api/firebase';

export async function createUser(userAuth) {
  if (!userAuth) {
    throw Error('Cannot create user without userAuth data');
  }

  const { displayName, email, uid } = userAuth;

  const ref = firestore.doc(`users/${uid}`);
  let snapshot = await ref.get();

  // Only create a user if one does not exist
  if (snapshot.exists) {
    console.debug(`Skip creating existing user ${uid}`);
  } else {
    const createdAt = new Date();
    const userData =  { createdAt, displayName, email };

    console.debug(`Creating a new user with uid ${uid}`, userData);
    await ref.set(userData);

    // Get an updated snapshot
    snapshot = await ref.get();
  }

  // Return user data
  return { id: snapshot.id, ...snapshot.data() };
};
