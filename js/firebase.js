// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { 
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc, 
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj5ltY78nSb9AB4L3b4sGTkFHBYufRNCo",
  authDomain: "thegoodnews-e6f0e.firebaseapp.com",
  projectId: "thegoodnews-e6f0e",
  storageBucket: "thegoodnews-e6f0e.appspot.com",
  messagingSenderId: "804199442305",
  appId: "1:804199442305:web:c6ceecf2f2aa0239dd2a80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();

/**
 * Save a New User in Firestore
 * @param {string} name the name of the User
 * @param {string} email the email of the User
 * @param {string} password the password of the User
*/

/**
 * Save a New New in Firestore
 * @param {string} title the name of the User
 * @param {string} author the email of the User
 * @param {string} newspaper the password of the User
*/
export const saveUser = (name, email, password) =>
  addDoc(collection(db, "users"), { name, email, password });
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });


export const  signIn = (auth, email, password) =>
    signInWithEmailAndPassword(auth, email, password)
      .then ((userCredential) => {
        const user = userCredential.user;
      })
      .catch ((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  
export const onGetUsers = (callback) =>
  onSnapshot(collection(db, "users"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteUser = (id) => deleteDoc(doc(db, "users", id));

export const getUser = (id) => getDoc(doc(db, "users", id));

export const updateUser = (id, newFields) =>
  updateDoc(doc(db, "users", id), newFields);

export const getUsers = () => getDocs(collection(db, "users"));
