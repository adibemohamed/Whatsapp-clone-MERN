import firebase from "firebase";

const firebaseConfig = {
  // put your firebase config here
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database();

export default { db };
