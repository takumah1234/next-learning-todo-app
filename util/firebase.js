// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIHXKA27Tf0nzrJGCSGPySGORfPQVnvwc",
  authDomain: "next-learning-56fe2.firebaseapp.com",
  projectId: "next-learning-56fe2",
  storageBucket: "next-learning-56fe2.appspot.com",
  messagingSenderId: "324219510282",
  appId: "1:324219510282:web:d28b1d8e5201f4950609f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);