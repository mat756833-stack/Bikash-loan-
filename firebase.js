// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, addDoc, collection, query, where, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCASR93m1w6vu-TDPqtpuLYOrcSqyDNUMk",
  authDomain: "bikash-loan.firebaseapp.com",
  projectId: "bikash-loan",
  storageBucket: "bikash-loan.firebasestorage.app",
  messagingSenderId: "69662484628",
  appId: "1:69662484628:web:755d3a1a2d4c7418e72c81",
  measurementId: "G-M5PQT9B01V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);