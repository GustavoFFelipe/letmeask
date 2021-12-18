import firebase from 'firebase/compat/app'; // foi feita uma alteração do original por causa da versao anterior do JS SDK.
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-0pjINXNq22vUXRzvFTG6ZSRpORLBEZE",
    authDomain: "letmeask-1c837.firebaseapp.com",
    databaseURL: "https://letmeask-1c837-default-rtdb.firebaseio.com",
    projectId: "letmeask-1c837",
    storageBucket: "letmeask-1c837.appspot.com",
    messagingSenderId: "106365310691",
    appId: "1:106365310691:web:e49bcc0f595f9c024b17d6"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();