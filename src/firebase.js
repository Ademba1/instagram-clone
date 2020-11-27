import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDXcXm_UoDCU7QHxJwF7wsgW3IOyYpNRmA",
  authDomain: "instagram-clone-381ef.firebaseapp.com",
  databaseURL: "https://instagram-clone-381ef.firebaseio.com",
  projectId: "instagram-clone-381ef",
  storageBucket: "instagram-clone-381ef.appspot.com",
  messagingSenderId: "1017003232350",
  appId: "1:1017003232350:web:ae27796ecf502a38e138cf",
  measurementId: "G-G2KWFG4GJX",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
