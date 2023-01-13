import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBdpxHwMR-TCqKRwaacET-hWuGTImZL-6I",
  authDomain: "ancestral-a6607.firebaseapp.com",
  projectId: "ancestral-a6607",
  storageBucket: "ancestral-a6607.appspot.com",
  messagingSenderId: "756782902766",
  appId: "1:756782902766:web:9ee7c8a22178577815f2ff"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)