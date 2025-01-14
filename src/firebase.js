
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https:/AIzaSyB6TMAX9xKz8x8clhRAvtFJWVY2an8RnnM/firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "dismegatron.firebaseapp.com",
  projectId: "dismegatron",
  storageBucket: "dismegatron.firebasestorage.app",
  messagingSenderId: "862539597107",
  appId: "1:862539597107:web:cfa06413179f9b7c7f6a46",
  measurementId: "G-27CM2Q2BMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
