// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdYBQrtEK1ONTKoDJlPnSQ49BY_9zbrNw",
  authDomain: "fir-auth-edb93.firebaseapp.com",
  projectId: "fir-auth-edb93",
  storageBucket: "fir-auth-edb93.appspot.com",
  messagingSenderId: "974936798647",
  appId: "1:974936798647:web:7b2ba7b74055da8ec1a432"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export {auth,db};