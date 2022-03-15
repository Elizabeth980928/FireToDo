// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKE9YWnmc56e7x_jUeNCeP6dbyySInFGA",
  authDomain: "to-do-6b776.firebaseapp.com",
  projectId: "to-do-6b776",
  storageBucket: "to-do-6b776.appspot.com",
  messagingSenderId: "206499749758",
  appId: "1:206499749758:web:b988874eac9cac43c1dd2f",
  measurementId: "G-MQ2D69GXZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);