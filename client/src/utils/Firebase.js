import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "login-165bc.firebaseapp.com",
    projectId: "login-165bc",
    storageBucket: "login-165bc.firebasestorage.app",
    messagingSenderId: "90806871552",
    appId: "1:90806871552:web:d7d5a21bccab8185fb9ae5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }