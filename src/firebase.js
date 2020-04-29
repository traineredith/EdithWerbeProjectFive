import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const firebaseConfig = {
    apiKey: "AIzaSyClv1sxb2aGdLblCtPESRKcyg9HN4z9Bf4",
    authDomain: "yearbook-7c442.firebaseapp.com",
    databaseURL: "https://yearbook-7c442.firebaseio.com",
    projectId: "yearbook-7c442",
    storageBucket: "yearbook-7c442.appspot.com",
    messagingSenderId: "282236459809",
    appId: "1:282236459809:web:a0a28c52659ea7d9803c60"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;