// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHqRYDQ3PSj_s4kIs0QkJJes9jA-c7K_A",
  authDomain: "fir-2d690.firebaseapp.com",
  projectId: "fir-2d690",
  storageBucket: "fir-2d690.appspot.com",
  messagingSenderId: "477403274340",
  appId: "1:477403274340:web:1c244eecaca1312290d371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);