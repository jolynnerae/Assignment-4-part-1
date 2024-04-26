import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsHb0e1ngCH8FKYc8-S95bscFt3UZbIww",
    authDomain: "quasar-todolist-127e4.firebaseapp.com",
    projectId: "quasar-todolist-127e4",
    storageBucket: "quasar-todolist-127e4.appspot.com",
    messagingSenderId: "772585640545",
    appId: "1:772585640545:web:a5d8628a15c20389705020"
  };

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
