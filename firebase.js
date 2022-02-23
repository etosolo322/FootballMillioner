
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNYZ9OA5zh99lKHMnOfeSJhWlsGHomQyA",
  authDomain: "footballquiz-50cea.firebaseapp.com",
  projectId: "footballquiz-50cea",
  storageBucket: "footballquiz-50cea.appspot.com",
  messagingSenderId: "834486630569",
  appId: "1:834486630569:web:f094c548bd539de49f51b8",
  measurementId: "G-7C720BX00T"
};

// Initialize Firebase
let app
if (firebase.getApps.length===0){
    app = initializeApp(firebaseConfig);
} else {
    app=firebase.app()
}

//////////////////////////////////////////

initializeApp(firebaseConfig);

const firestore = getFirestore();

await setDoc(doc(firestore, "characters", "mario"), {
  employment: "plumber",
  outfitColor: "red",
  specialAttack: "fireball"
});