import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALbEJIOS69rHIgCAO89V0iIQ5M2u1Euos",
  authDomain: "assignment-09-tiny-house.firebaseapp.com",
  projectId: "assignment-09-tiny-house",
  storageBucket: "assignment-09-tiny-house.appspot.com",
  messagingSenderId: "13363893432",
  appId: "1:13363893432:web:552a2e9f44829ad3e1d04d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;