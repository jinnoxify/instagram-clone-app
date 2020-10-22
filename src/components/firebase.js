import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBxWvUfD_9YCAqjf705NhGS_DKL-tzmEfE",
  authDomain: "instagram-clone-app-f9be5.firebaseapp.com",
  databaseURL: "https://instagram-clone-app-f9be5.firebaseio.com",
  projectId: "instagram-clone-app-f9be5",
  storageBucket: "instagram-clone-app-f9be5.appspot.com",
  messagingSenderId: "456351991307",
  appId: "1:456351991307:web:d2e4990d161c874e23690e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
