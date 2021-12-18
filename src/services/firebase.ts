import firebase from 'firebase/compat/app'; // foi feita uma alteração do original por causa da versao anterior do JS SDK.
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';// foi preciso importar compat/database para ser aceito o env.local

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();