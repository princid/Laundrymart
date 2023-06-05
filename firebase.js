import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEj4pfj8ERGbBL2KieggnxZV6Us2gcrec",
  authDomain: "laundrymart-51e51.firebaseapp.com",
  projectId: "laundrymart-51e51",
  storageBucket: "laundrymart-51e51.appspot.com",
  messagingSenderId: "667034347279",
  appId: "1:667034347279:web:49726d1c221967c195007a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
