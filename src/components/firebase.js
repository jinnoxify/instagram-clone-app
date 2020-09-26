import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAMWPgxDSYMUbi5ontpY3Wrr97Y_WE0-cc",
  authDomain: "instagram-clone-project-765fc.firebaseapp.com",
  databaseURL: "https://instagram-clone-project-765fc.firebaseio.com",
  projectId: "instagram-clone-project-765fc",
  storageBucket: "instagram-clone-project-765fc.appspot.com",
  messagingSenderId: "303612171239",
  appId: "1:303612171239:web:e55dfe20b9257b8eeb2342",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
