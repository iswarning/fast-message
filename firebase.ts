// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUxKa3lqs3xmzRvGrMTjVxtXvV6ouj1wA",
  authDomain: "saas-translation-fecc7.firebaseapp.com",
  projectId: "saas-translation-fecc7",
  storageBucket: "saas-translation-fecc7.appspot.com",
  messagingSenderId: "901510791859",
  appId: "1:901510791859:web:1a48d3c060de9f12f366c6",
  measurementId: "G-8B5LXSB57Q"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const functions = getFunctions(app)

export { auth, db, functions }