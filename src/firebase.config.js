
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCQRhRxm0VIEtl7sHBpS9gVe4SS4XFjWHI",
  authDomain: "real-estate-e912d.firebaseapp.com",
  projectId: "real-estate-e912d",
  storageBucket: "real-estate-e912d.appspot.com",
  messagingSenderId: "604148130974",
  appId: "1:604148130974:web:161da9941e7ecddb7e878f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;