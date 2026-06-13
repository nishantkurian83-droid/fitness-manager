// Firebase setup for Fitness Business Manager
// This connects the app to your cloud Firestore database.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdOB7XNBj58SjCQv-T2TRTff3--whp5H4",
  authDomain: "fitness-manager-78c05.firebaseapp.com",
  projectId: "fitness-manager-78c05",
  storageBucket: "fitness-manager-78c05.firebasestorage.app",
  messagingSenderId: "836512706782",
  appId: "1:836512706782:web:41b04983883e1bd1b3924f",
  measurementId: "G-806E947RVT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);