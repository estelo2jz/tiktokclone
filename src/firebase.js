import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAolbvlqhwV7JiTq3epG5CJ3-Mk8bAr1vQ",
  authDomain: "tiktokclone-d4954.firebaseapp.com",
  databaseURL: "https://tiktokclone-d4954.firebaseio.com",
  projectId: "tiktokclone-d4954",
  storageBucket: "tiktokclone-d4954.appspot.com",
  messagingSenderId: "526660530080",
  appId: "1:526660530080:web:4cfac867406597cfa0fec5",
  measurementId: "G-C2CZFS0V4E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firestore is the database instance
const db = firebaseApp.firestore();

export default db;