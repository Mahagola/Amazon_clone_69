import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhZAhA0BzdxjiYpaI4h5Kd7KUkB2lWibU",
    authDomain: "amzn-cln-69.firebaseapp.com",
    projectId: "amzn-cln-69",
    storageBucket: "amzn-cln-69.appspot.com",
    messagingSenderId: "922693230363",
    appId: "1:922693230363:web:17e96d72c19a14c98afdbe",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;