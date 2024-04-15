// firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCa3eDAnFlyRwI6JVhhV7sEJpS1MDnd0h8",
  authDomain: "amakosites.firebaseapp.com",
  databaseURL: "https://amakosites-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "amakosites",
  storageBucket: "amakosites.appspot.com",
  messagingSenderId: "624204015949",
  appId: "1:624204015949:web:6464e2372f878cc562af04",
  measurementId: "G-0YFKVMT2M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { database, analytics };
