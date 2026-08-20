// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "genwebai-94b49.firebaseapp.com",
  projectId: "genwebai-94b49",
  storageBucket: "genwebai-94b49.firebasestorage.app",
  messagingSenderId: "363801651831",
  appId: "1:363801651831:web:090bfefe9a448d4ed8f472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}