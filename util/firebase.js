import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIHXKA27Tf0nzrJGCSGPySGORfPQVnvwc",
  authDomain: "next-learning-56fe2.firebaseapp.com",
  projectId: "next-learning-56fe2",
  storageBucket: "next-learning-56fe2.appspot.com",
  messagingSenderId: "324219510282",
  appId: "1:324219510282:web:f444a0503ba800490609f3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);