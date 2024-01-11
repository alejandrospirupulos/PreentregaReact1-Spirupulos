// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoBsVcOwrVH497S6qIcBL3GJYhS879T1Y",
  authDomain: "rj1-spirupulos.firebaseapp.com",
  projectId: "rj1-spirupulos",
  storageBucket: "rj1-spirupulos.appspot.com",
  messagingSenderId: "180950126007",
  appId: "1:180950126007:web:3134c15b22d705833c6c32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)