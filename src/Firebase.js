import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArgK8WwsIzcwrf2fzRDnQaZriYr59yT7o",
  authDomain: "messenger-app-df624.firebaseapp.com",
  databaseURL: "https://messenger-app-df624.firebaseio.com",
  projectId: "messenger-app-df624",
  storageBucket: "messenger-app-df624.appspot.com",
  messagingSenderId: "401015104371",
  appId: "1:401015104371:web:1ab2cffdb8fc1801235b06",
  measurementId: "G-8YSHWJFC7Y",
});

const db = firebaseApp.firestore();

export default db;
