import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaGZn0Ejwz22bvcwr_3lEly16wurcAGDE",
  authDomain: "chat-app-e0589.firebaseapp.com",
  projectId: "chat-app-e0589",
  storageBucket: "chat-app-e0589.appspot.com",
  messagingSenderId: "23793862577",
  appId: "1:23793862577:web:1bdd6d9fdb365d44d51f90"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
