import firebase from 'firebase'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7v6uxUQfeWOAcMjZB_j1m97hvUx2eb9U",
    authDomain: "chat-app-9e5a7.firebaseapp.com",
    projectId: "chat-app-9e5a7",
    storageBucket: "chat-app-9e5a7.appspot.com",
    messagingSenderId: "402817779357",
    appId: "1:402817779357:web:ae2bdaa60183437742f674",
    measurementId: "G-EQ2GY0BTRH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db