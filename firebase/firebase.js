// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAArltJj6v-5JXrNL-IMv0kkneN4wkNe9w",
  authDomain: "lqglasscms.firebaseapp.com",
  projectId: "lqglasscms",
  storageBucket: "lqglasscms.appspot.com",
  messagingSenderId: "88545366466",
  appId: "1:88545366466:web:9f498df615c169eebfc65b",
  measurementId: "G-P4BZ7JZCW7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
