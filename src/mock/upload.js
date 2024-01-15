import MOCK_DATA from './data.json' assert {type: 'json'}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {addDoc, collection,getFirestore} from "firebase/firestore"


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
 const db = getFirestore (app)

const productosRef = collection(db, 'productos')

MOCK_DATA.forEach(item => {
    delete item.id
    addDoc(productosRef,item)
})