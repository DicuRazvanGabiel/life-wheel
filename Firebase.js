import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7CRGfBzFZah9ssDDxYF4EG2vabwSf8rs",
    authDomain: "life-wheel-41fa7.firebaseapp.com",
    projectId: "life-wheel-41fa7",
    storageBucket: "life-wheel-41fa7.appspot.com",
    messagingSenderId: "458556618534",
    appId: "1:458556618534:web:53e76232f5e428639673e7",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
