import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCoq3jtgW2f-Kp0uw4NW6unyjO3mOjpUDE",
    authDomain: "whatsapp-clone-9888b.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-9888b.firebaseio.com",
    projectId: "whatsapp-clone-9888b",
    storageBucket: "whatsapp-clone-9888b.appspot.com",
    messagingSenderId: "801234079623",
    appId: "1:801234079623:web:43aa25abafef9524e54d22",
    measurementId: "G-72Z37S51YP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.database();


  export default {db}