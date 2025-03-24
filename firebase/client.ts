// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmdurXFAyQuAiPLWi1A-04-RmCsQDgmh8",
  authDomain: "prepwise-37711.firebaseapp.com",
  projectId: "prepwise-37711",
  storageBucket: "prepwise-37711.firebasestorage.app",
  messagingSenderId: "528944057525",
  appId: "1:528944057525:web:8540b8d7d177f7ded602fc",
  measurementId: "G-EQ23GQ0GT3",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
