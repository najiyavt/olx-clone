import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCUQtZqvCJLsoCjtBlhaV1vI6YrsWywDRw",
    authDomain: "fir-8f39b.firebaseapp.com",
    projectId: "fir-8f39b",
    storageBucket: "fir-8f39b.appspot.com",
    messagingSenderId: "221831694019",
    appId: "1:221831694019:web:2b841a46e5c07d4c824476",
    measurementId: "G-1KMFVBG0XK"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {firestore};