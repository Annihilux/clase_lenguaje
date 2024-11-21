import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAOprvi2YHvaV21yx_VUvRpzuI7wj0iDkg",
  authDomain: "ejemplo-564bb.firebaseapp.com",
  projectId: "ejemplo-564bb",
  storageBucket: "ejemplo-564bb.firebasestorage.app",
  messagingSenderId: "169970429584",
  appId: "1:169970429584:web:0789104ea35549afbe7215",
  measurementId: "G-NCL6GKT4N8"
});

const db = getFirestore(firebaseApp)
