import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBsU1LHzEZdDUUd_HBL67LPyn3PupgUZhE",
  authDomain: "renovemoscolombia-64914.firebaseapp.com",
  databaseURL: "https://renovemoscolombia-64914-default-rtdb.firebaseio.com",
  projectId: "renovemoscolombia-64914",
  storageBucket: "renovemoscolombia-64914.appspot.com",
  messagingSenderId: "395451145069",
  appId: "1:395451145069:web:24d4f416f2dd881146d864",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
