
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";



  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyARBVjspDEzSxpJz7WaTU-KZHsD0RugPfE",
    authDomain: "genbackend.firebaseapp.com",
    projectId: "genbackend",
    storageBucket: "genbackend.appspot.com",
    messagingSenderId: "111630538013",
    appId: "1:111630538013:web:636c09da99b52d3c71bdf4",
    measurementId: "G-72GW2PKEVX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  
  // Use this to initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export { auth, db, storage };