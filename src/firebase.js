import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyBozBJDhErsze0IJgygOky2hplt-rhhlB8",
  authDomain: "panier-achat-fsj.firebaseapp.com",
  databaseURL: "https://panier-achat-fsj-default-rtdb.firebaseio.com",
  projectId: "panier-achat-fsj",
  storageBucket: "panier-achat-fsj.appspot.com",
  messagingSenderId: "827452650180",
  appId: "1:827452650180:web:7c8928380ddc7d8a844f91",
  measurementId: "G-7SJNXY6SXX"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
