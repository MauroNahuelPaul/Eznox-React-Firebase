// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore}   from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPu5SQ97Nt-E7x_f_cYjRs4tSwPlDfiaA",
    authDomain: "eznox-277e2.firebaseapp.com",
    projectId: "eznox-277e2",
    storageBucket: "eznox-277e2.appspot.com",
    messagingSenderId: "550433414260",
    appId: "1:550433414260:web:a3a5c20907afcb9f1dc521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)