// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "rentify-68610.firebaseapp.com",
  projectId: "rentify-68610",
  storageBucket: "rentify-68610.firebasestorage.app",
  messagingSenderId: "40395609432",
  appId: "1:40395609432:web:b8d16e8a3009c3255e012d"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export{db,storage}