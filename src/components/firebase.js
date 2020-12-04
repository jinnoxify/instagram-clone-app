import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAuubgVUJxHLiwyjSaPTt_ixxFWES_06pc",
  authDomain: "ig-clone-ac9af.firebaseapp.com",
  projectId: "ig-clone-ac9af",
  storageBucket: "ig-clone-ac9af.appspot.com",
  messagingSenderId: "741386816268",
  appId: "1:741386816268:web:b5a2556112920af7cc5729",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
