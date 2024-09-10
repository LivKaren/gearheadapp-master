// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU_zKW_qcBzwxIpGlGKhaI710pdC_rUO8",
  authDomain: "apiof-72a2f.firebaseapp.com",
  projectId: "apiof-72a2f",
  storageBucket: "apiof-72a2f.appspot.com",
  messagingSenderId: "554987936271",
  appId: "1:554987936271:web:ef02d46506274620f7217a",
  measurementId: "G-RYRG83Q8SY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
