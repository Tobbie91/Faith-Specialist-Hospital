// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbrVWBbTrjl_I_zYHyda17jwZmDIktD4I",
  authDomain: "faith-hospital-1047b.firebaseapp.com",
  projectId: "faith-hospital-1047b",
  storageBucket: "faith-hospital-1047b.firebasestorage.app",
  messagingSenderId: "826444152307",
  appId: "1:826444152307:web:b0b6e921501a2d6bb3a686",
  measurementId: "G-YMBNXW0KRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Conditionally initialize Firebase Analytics only on the client-side
let analytics = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Export Firestore and Analytics (if initialized) to use in your components
export { db, analytics };
