// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzlYz_yPI7s1hsakJP7TbJVcj9609H9LA",
  authDomain: "smithinnovates-b831e.firebaseapp.com",
  projectId: "smithinnovates-b831e",
  storageBucket: "smithinnovates-b831e.appspot.com",
  messagingSenderId: "537002538787",
  appId: "1:537002538787:web:7941819dcc9b6ad543be96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth};