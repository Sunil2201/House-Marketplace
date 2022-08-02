import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA588NXnUKzqVA77d5YRpZFlw_xIMze-9c",
  authDomain: "house-marketplace-app-99c09.firebaseapp.com",
  projectId: "house-marketplace-app-99c09",
  storageBucket: "house-marketplace-app-99c09.appspot.com",
  messagingSenderId: "429315443333",
  appId: "1:429315443333:web:d0782df11976e573cc77ec"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()