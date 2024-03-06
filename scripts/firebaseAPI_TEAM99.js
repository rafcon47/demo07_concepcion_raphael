//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyB4oXxNy5IRbfMtyL3Z6lvKlAdts2TyVDQ",
  authDomain: "firestore-c1f2c.firebaseapp.com",
  projectId: "firestore-c1f2c",
  storageBucket: "firestore-c1f2c.appspot.com",
  messagingSenderId: "895635767537",
  appId: "1:895635767537:web:429928031c1981a0026950"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
