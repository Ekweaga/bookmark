import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage} from "firebase/storage";
import {getAuth} from  "firebase/auth";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM-9plO79Hh6Pf9PWTM4dRsqhmT9BbfI4",
  authDomain: "bookmak-51549.firebaseapp.com",
  projectId: "bookmak-51549",
  storageBucket: "bookmak-51549.appspot.com",
  messagingSenderId: "241337754397",
  appId: "1:241337754397:web:306c5e751854a134b237f4",
  measurementId: "G-YX5NM59CFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
export {auth,db,storage}
