// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO5zL_6_BNHB2ks7IenJmu3bJoCFmIQ-4",
  authDomain: "laptopku-a55fd.firebaseapp.com",
  projectId: "laptopku-a55fd",
  storageBucket: "laptopku-a55fd.appspot.com",
  messagingSenderId: "958536032366",
  appId: "1:958536032366:web:3e2ad7b4599ffd5eb7867f",
  measurementId: "G-PG2ZYXVJ7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;