// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsKjOTcV5Pi0HbfwTK0JBbHxO3TUaWItc",
  authDomain: "netflixgpt-83ad1.firebaseapp.com",
  projectId: "netflixgpt-83ad1",
  storageBucket: "netflixgpt-83ad1.appspot.com",
  messagingSenderId: "772624312983",
  appId: "1:772624312983:web:7597f785bb86aaf6e017d2",
  measurementId: "G-53FWMRXMPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);