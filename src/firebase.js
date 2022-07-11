// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXgsZtxXNr_UoYRf1K-Ua7B_UiDSmoOS0",
  authDomain: "let-s-grow-smartly.firebaseapp.com",
  databaseURL: "https://let-s-grow-smartly-default-rtdb.firebaseio.com",
  projectId: "let-s-grow-smartly",
  storageBucket: "let-s-grow-smartly.appspot.com",
  messagingSenderId: "595938231874",
  appId: "1:595938231874:web:a96a63cf8d1ec9edba4fdb",
  measurementId: "G-1PZW0J6X5M",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
