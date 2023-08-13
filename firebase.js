import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyDPYtwHNh6Z901yc5IqmSbzaZ1t0PzR4Xg",
    authDomain: "clone-36942.firebaseapp.com",
    projectId: "clone-36942",
    storageBucket: "clone-36942.appspot.com",
    messagingSenderId: "801269527776",
    appId: "1:801269527776:web:f5dc89e6f59c74148a8c85",
    measurementId: "G-739L6ECHXB"
  };
  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };