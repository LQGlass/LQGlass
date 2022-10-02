// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFo-7XxxRYjB9W10jeZCNZJpLrYANFbYs",
  authDomain: "laboratorios-quimicos.firebaseapp.com",
  projectId: "laboratorios-quimicos",
  storageBucket: "laboratorios-quimicos.appspot.com",
  messagingSenderId: "1021001237209",
  appId: "1:1021001237209:web:d3de3a223b265fff36b4c8",
  measurementId: "G-JZXCBC5F8P",
};

let categories

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
/* const colRef = collection(db, "categories");
getDocs(colRef).then((snapshot) => {
  categories = [];
  snapshot.docs.forEach((doc) => {
    categories.push({ ...doc.data(), id: doc.id });
  });
  console.log(categories);
});
export const categorias = categories;

*/