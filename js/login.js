// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { } from 'firebase/auth';
import { } from 'firebase/firestore';
import { login } from "./auth";
import { async } from "@firebase/util";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDHHnKKUQVfETEVhshu5RrAffSRiadUo7M",
authDomain: "the-good-news-4a82e.firebaseapp.com",
projectId: "the-good-news-4a82e",
storageBucket: "the-good-news-4a82e.appspot.com",
messagingSenderId: "367123733170",
appId: "1:367123733170:web:3ed0371ecd3bf18512c7ab",
measurementId: "G-T07GKM8NG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { login,logout } from "./auth.js";
const buttonLogin = document.querySelector('#button-login');

buttonLogin.addEventListener("click",async (e) => {
    try{
        await login();

    } catch(error){

    }
});