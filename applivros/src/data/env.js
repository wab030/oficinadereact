import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJlG63CO_RESLEa2LJsG9yOvGenb79eGM",
  authDomain: "books-19d2d.firebaseapp.com",
  projectId: "books-19d2d",
  storageBucket: "books-19d2d.appspot.com",
  messagingSenderId: "1019171676981",
  appId: "1:1019171676981:web:06904f78de983e8907227c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
