// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD94WChuWZLH9CW_qpMhSgOfspoJkr3O7k",
  authDomain: "project-3dadd.firebaseapp.com",
  databaseURL: "https://project-3dadd-default-rtdb.firebaseio.com/",
  projectId: "project-3dadd",
  storageBucket: "project-3dadd.appspot.com",
  messagingSenderId: "1095164005209",
  appId: "1:1095164005209:web:0ccbb920dc3346bf491a48",
  measurementId: "G-L0VEHYTBYV",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
