// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getFirestore} from '@firebase/firestore'
// import {getStorage} from '@firebase/storage'
// import { getAuth} from "firebase/auth";
// //import courseList from "../screens/courseList";
// const firebaseConfig = {
//   apiKey: "AIzaSyDdA1uEQfkMX-2a8BfRQuRREcUTbahcZqY",
//   authDomain: "learningscodenetwork.firebaseapp.com",
//   projectId: "learningscodenetwork",
//   storageBucket: "learningscodenetwork.appspot.com",
//   messagingSenderId: "636585881634",
//   appId: "1:636585881634:web:a2ea63e17f6a873c971a7b",
//   measurementId: "G-6TQL3SNV70"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);   
// const db = getFirestore(app);
// const storage = getStorage(app);
// const auth = getAuth(app);

// export {db,storage,auth}
  



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEgo_SVrCx4DhL7MS9foYZrf5ATqtuP0U",
  authDomain: "learningscodenetwork2.firebaseapp.com",
  projectId: "learningscodenetwork2",
  storageBucket: "learningscodenetwork2.appspot.com",
  messagingSenderId: "231480829709",
  appId: "1:231480829709:web:93d03e5c39f62dd0c3f244",
  measurementId: "G-RH1C2WSQ1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);