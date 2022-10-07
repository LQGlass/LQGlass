// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuPvAb5JkkN8H9DRtrUYPS5X2czdrX3z0",
  authDomain: "lqglass-4aec0.firebaseapp.com",
  projectId: "lqglass-4aec0",
  storageBucket: "lqglass-4aec0.appspot.com",
  messagingSenderId: "1068100931045",
  appId: "1:1068100931045:web:82e86b7471681a04b7730c",
  measurementId: "G-5DTTKH1QK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

