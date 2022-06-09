import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAn6bViRobzNBEvfANu8eFEqBji3_KE7E",
  authDomain: "cestascooperflorabarao-dev.firebaseapp.com",
  databaseURL: "https://cestascooperflorabarao-dev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cestascooperflorabarao-dev",
  storageBucket: "cestascooperflorabarao-dev.appspot.com",
  messagingSenderId: "384118273017",
  appId: "1:384118273017:web:046a319cf0b479f7d2c328"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
