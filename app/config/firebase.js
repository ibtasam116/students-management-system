import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzelsow3eBs2lX0gVXObMKCthD2HG11Po",
  authDomain: "students-management-syst-ed974.firebaseapp.com",
  projectId: "students-management-syst-ed974",
  storageBucket: "students-management-syst-ed974.appspot.com",
  messagingSenderId: "57872247653",
  appId: "1:57872247653:web:edd2d9ff6b5a7057458f8c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
