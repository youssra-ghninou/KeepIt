// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDcHiiMCaRHsTKBFCkTOO5IU57NtDjoFvU',
  authDomain: 'keepit-99f82.firebaseapp.com',
  projectId: 'keepit-99f82',
  storageBucket: 'keepit-99f82.appspot.com',
  messagingSenderId: '286821503278',
  appId: '1:286821503278:web:edc2df6e555b1013426abf',
  measurementId: 'G-Z63B8JY3F3',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
export { app, auth, firestore, createUserWithEmailAndPassword }
