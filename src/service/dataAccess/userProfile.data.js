import { firestore } from 'api/firebase';

export async function createUserProfile(userAuth, additionalData) {
  if (!userAuth) {
    return;
  }

  const { displayName, email, uid } = userAuth;
  const ref = firestore.doc(`users/${uid}`);
  const snapshot = await ref.get();

  if (!snapshot.exists) {
    const createdAt = new Date();
    const userData = { displayName, email, createdAt, ...additionalData };
    console.log(`Creating a new user with uid ${uid}`, userData);

    let created = false;
    try {
      await ref.set();
      created = true;
    } catch (error) {
      console.log('Error creating user', error.message);
    }

    return { created, uid, ...userData };
  }
};
