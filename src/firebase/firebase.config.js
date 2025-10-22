// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_IG5c2kqhMo5cEenDOQJlpyLprFO593U",
  authDomain: "game-hub-a7f5b.firebaseapp.com",
  projectId: "game-hub-a7f5b",
  storageBucket: "game-hub-a7f5b.firebasestorage.app",
  messagingSenderId: "842069522637",
  appId: "1:842069522637:web:1f0da75ab9b638123e1184",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
