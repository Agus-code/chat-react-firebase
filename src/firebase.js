import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAps8KBSAt2nehuecSBvxNGvO6ejFaPCII",
    authDomain: "chat-react-firebase-6dff1.firebaseapp.com",
    projectId: "chat-react-firebase-6dff1",
    storageBucket: "chat-react-firebase-6dff1.appspot.com",
    messagingSenderId: "309514264577",
    appId: "1:309514264577:web:35b03892614968034ba000"
};

firebase.initializeApp(firebaseConfig);
export default firebase;

export const db = firebase.firestore();
