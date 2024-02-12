import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARe6z2Ia1rJftR6dJXzjdx1GZc5Fgp2WE",
  authDomain: "twitter-clone-udemy-e59e0.firebaseapp.com",
  projectId: "twitter-clone-udemy-e59e0",
  storageBucket: "twitter-clone-udemy-e59e0.appspot.com",
  messagingSenderId: "454459962613",
  appId: "1:454459962613:web:355fbbdd9fedf08b3241bc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
