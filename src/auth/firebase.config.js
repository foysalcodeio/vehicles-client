import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK-WFoNHXJrWu6k5S3GUZ-Sy-trVuJBF4",
  authDomain: "vehicles-54ebd.firebaseapp.com",
  projectId: "vehicles-54ebd",
  storageBucket: "vehicles-54ebd.appspot.com",
  messagingSenderId: "2042884049",
  appId: "1:2042884049:web:b675b3c405dae30b5afaf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;