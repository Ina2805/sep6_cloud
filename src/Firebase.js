// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGQQXU5IUdYsRTIZluYLWnRFrO1Tbyios",
  authDomain: "aqueous-radio-368114.firebaseapp.com",
  projectId: "aqueous-radio-368114",
  storageBucket: "aqueous-radio-368114.appspot.com",
  messagingSenderId: "915265365938",
  appId: "1:915265365938:web:cdb5f86a020563844fa6ab",
  measurementId: "G-4MJLM793HX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { displayName } = additionalData;

    try {
      await userRef.set({
        displayName,
        email,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log('Error in creating user', error);
    }
  }
};