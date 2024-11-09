// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // If you plan to use Firestore
import { getAuth } from "firebase/auth"; // If you plan to use Firebase Authentication

// Your Firebase configuration (replace with your actual config values from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyBEo30EeiEW4YM_lwAV0uU9j4TjjBEz0zg",
    authDomain: "bahulasusu-matrix.firebaseapp.com",
    projectId: "bahulasusu-matrix",
    storageBucket: "bahulasusu-matrix.firebasestorage.app",
    messagingSenderId: "24403391948",
    appId: "1:24403391948:web:4e5123007d9f57528b1969",
    measurementId: "G-7GHM11LM9M"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Initialize services like Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Export the services for use in other parts of the app
export { db, auth };
