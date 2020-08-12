import { firestore } from 'api/firebase';

export async function createUser(userAuth, additionalData) {
  if (!userAuth) {
    return;
  }

  const { displayName, email, uid } = userAuth;
  const ref = firestore.doc(`users/${uid}`);
  let snapshot = await ref.get();

  if (!snapshot.exists) {
    const createdAt = new Date();
    const userData =  { createdAt, displayName, email, ...additionalData };
    console.debug(`Creating a new user with uid ${uid}`, userData);

    try {
      await ref.set(userData);
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return ref;
};
