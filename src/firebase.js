// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBE8yUbHAPy7lqR1OGkdcma1D3CTs5TAA",
  authDomain: "chat-e471a.firebaseapp.com",
  projectId: "chat-e471a",
  storageBucket: "chat-e471a.appspot.com",
  messagingSenderId: "461496529783",
  appId: "1:461496529783:web:093c531faa1059a1116772",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
