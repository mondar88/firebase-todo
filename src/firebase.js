import firebase from 'firebase/app'

import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

firebase.initializeApp({
    apiKey: "AIzaSyAjn8EtOQU7YoYIPxkHkuYgekwUQU0NyO8",
    authDomain: "react-todo-neogc.firebaseapp.com",
    projectId: "react-todo-neogc",
    storageBucket: "react-todo-neogc.appspot.com",
    messagingSenderId: "315314012348",
    appId: "1:315314012348:web:3bbb4c969c8549da8810b9",
    measurementId: "G-G628L03CT0"
})

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;