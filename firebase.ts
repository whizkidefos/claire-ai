import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiox7Zee51_wsvDWmWhdHKj0IjtEtd69k",
  authDomain: "claire-ai-12cb1.firebaseapp.com",
  projectId: "claire-ai-12cb1",
  storageBucket: "claire-ai-12cb1.appspot.com",
  messagingSenderId: "557376211957",
  appId: "1:557376211957:web:2f029c1736a6ea162f6ebc",
  measurementId: "G-FBMF34W08C"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);

export { db }