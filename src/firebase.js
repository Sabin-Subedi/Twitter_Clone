import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDc1fNNRMVvdPBMW7-FBsj6gOhQY1FpJ-k",
  authDomain: "twiiter-clone-d98f6.firebaseapp.com",
  databaseURL: "https://twiiter-clone-d98f6.firebaseio.com",
  projectId: "twiiter-clone-d98f6",
  storageBucket: "twiiter-clone-d98f6.appspot.com",
  messagingSenderId: "329061424559",
  appId: "1:329061424559:web:7cf93222fff074ce8de35a",
  measurementId: "G-XQSBTE1TW1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
