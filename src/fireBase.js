import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCapcKO9MozYFXVL8T9tBBcbJbJWkWNgmg",
  authDomain: "reactduy222.firebaseapp.com",
  projectId: "reactduy222",
  storageBucket: "reactduy222.appspot.com",
  messagingSenderId: "483462154709",
  appId: "1:483462154709:web:527f377fd7d26f6b07555c",
  measurementId: "G-W8768DBYNJ",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
