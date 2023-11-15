// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtdMTZLMBZxqd1kYSCLzVX6Wuu8eiV4oA",
    authDomain: "program-web-89a1e.firebaseapp.com",
    projectId: "program-web-89a1e",
    storageBucket: "program-web-89a1e.appspot.com",
    messagingSenderId: "1078267383055",
    appId: "1:1078267383055:web:ee9142efa4cab429a5027a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

