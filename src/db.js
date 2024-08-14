// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs, query, where, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD16ttrwH2UFuN5XL_UyaYXRDSpaO1MfG0",
  authDomain: "contact-book-ca2f8.firebaseapp.com",
  projectId: "contact-book-ca2f8",
  storageBucket: "contact-book-ca2f8.appspot.com",
  messagingSenderId: "841782238127",
  appId: "1:841782238127:web:9041fc0b754bef4ea1ed5a",
  measurementId: "G-7JSY7Z2T8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, query, where, doc, getDoc, updateDoc, deleteDoc };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db, collection, addDoc, getDocs, query, where };

