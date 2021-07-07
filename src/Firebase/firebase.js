import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBeWHez8MovPLnIXXz2ByrOFNUUoqI9iNk",
    authDomain: "babyoutfits-3b8af.firebaseapp.com",
    projectId: "babyoutfits-3b8af",
    storageBucket: "babyoutfits-3b8af.appspot.com",
    messagingSenderId: "102428444981",
    appId: "1:102428444981:web:ba7170a688df5ffb63e47c"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const database = fb.firestore();
