import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {initializeApp} from "firebase/app";

const firebaseConfig = {
 apiKey: "AIzaSyDpnsKgktTT61smOvqgg59P8Vc1kozUp9g",
 authDomain: "journal-react-app-ea0fe.firebaseapp.com",
 projectId: "journal-react-app-ea0fe",
 storageBucket: "journal-react-app-ea0fe.appspot.com",
 messagingSenderId: "247526691252",
 appId: "1:247526691252:web:be9d2eec272eb434de22e1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
 db,
 googleAuthProvider,
 firebase
}
