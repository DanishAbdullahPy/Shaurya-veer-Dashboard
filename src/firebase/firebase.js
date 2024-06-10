import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database"; // Import Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyDlkr6Lu6WRITiXn9GrwJPAsgZtTWqf5to",
  authDomain: "gym-management-3a159.firebaseapp.com",
  projectId: "gym-management-3a159",
  storageBucket: "gym-management-3a159.appspot.com",
  messagingSenderId: "369504279537",
  appId: "1:369504279537:web:c27f6af49fe10b5b59c250",
  databaseURL:
    "https://gym-management-3a159-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.database(); // Initialize Realtime Database
export const auth = firebase.auth();
