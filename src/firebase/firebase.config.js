// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZKDCPdDakzaIb24xlWLjwJlTTTIJwOg0",
  authDomain: "b12-assignment.firebaseapp.com",
  projectId: "b12-assignment",
  storageBucket: "b12-assignment.appspot.com",
  messagingSenderId: "459478658258",
  appId: "1:459478658258:web:f120130ba23d82af46510b"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default { auth };