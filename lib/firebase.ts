import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZXSfnJDByRyh_RNDO6bhKtvI0dn80hd8",
  authDomain: "hexproof-4925f.firebaseapp.com",
  projectId: "hexproof-4925f",
  storageBucket: "hexproof-4925f.firebasestorage.app",
  messagingSenderId: "1035138139223",
  appId: "1:1035138139223:web:554961906160e0f7580f12",
  measurementId: "G-WHMRZGXEPF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
