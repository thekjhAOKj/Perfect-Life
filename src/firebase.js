// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM43kSq6MJRSFkORpjzI78X-tBM4PpW5k",
  authDomain: "perfect-life-b3cc4.firebaseapp.com",
  projectId: "perfect-life-b3cc4",
  storageBucket: "perfect-life-b3cc4.appspot.com",
  messagingSenderId: "486590487448",
  appId: "1:486590487448:web:7ae9025099bf07df32e9ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
export default app