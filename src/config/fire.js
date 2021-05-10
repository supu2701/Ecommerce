import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC1lHNAro6Vq_SPtbklNjO4nSnB8ZOJ4cI",
    authDomain: "react-firebase-auth-de143.firebaseapp.com",
    projectId: "react-firebase-auth-de143",
    storageBucket: "react-firebase-auth-de143.appspot.com",
    messagingSenderId: "847140863794",
    appId: "1:847140863794:web:2aacc33204a37d7026212b",
    measurementId: "G-LSNHSS1YYK"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;