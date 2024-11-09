// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);