// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUY67JUuISBk709CZwiEIjkasZh5iLMMQ",
  authDomain: "shapeupudemy-71b78.firebaseapp.com",
  projectId: "shapeupudemy-71b78",
  storageBucket: "shapeupudemy-71b78.appspot.com",
  messagingSenderId: "741107358196",
  appId: "1:741107358196:web:00391f34f70857326881a1",
  measurementId: "G-7N90ME5180"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);