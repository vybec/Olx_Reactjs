import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXRbr6KryRmlB4NxvHtRy7WAgI4k6fhUY",
    authDomain: "fir-d2551.firebaseapp.com",
    projectId: "fir-d2551",
    storageBucket: "fir-d2551.appspot.com",
    messagingSenderId: "310535751931",
    appId: "1:310535751931:web:29de99e5c5f7442e46885e",
    measurementId: "G-KWQGC6B3JW"
  };

 export default  firebase.initializeApp(firebaseConfig)