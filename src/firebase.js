import firebase from "firebase";
import "firebase/storage";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyA92vKXcLVXErvJTL0mruUVjLAQJuUsuIo",
  authDomain: "contactform-de0e0.firebaseapp.com",
  projectId: "contactform-de0e0",
  storageBucket: "contactform-de0e0.appspot.com",
  messagingSenderId: "331244687737",
  appId: "1:331244687737:web:4ecf79efa231f28ec35fa8",
});

export const db = app.firestore();
