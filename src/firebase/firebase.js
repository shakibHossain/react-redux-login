import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuGHlurM9guYiqnFB84JJqwqhsDXoiphM",
    authDomain: "react-redux-login-44381.firebaseapp.com",
    databaseURL: "https://react-redux-login-44381.firebaseio.com",
    projectId: "react-redux-login-44381",
    storageBucket: "react-redux-login-44381.appspot.com",
    messagingSenderId: "443605413263",
    appId: "1:443605413263:web:ff8a3b5ee95635e8762ffa"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;