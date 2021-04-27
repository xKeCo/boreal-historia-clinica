import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCmwXdtrwgsr84FWjhV32CENoUI1g_C7EQ",
  authDomain: "boreal-historia.firebaseapp.com",
  databaseURL: "https://boreal-historia-default-rtdb.firebaseio.com",
  projectId: "boreal-historia",
  storageBucket: "boreal-historia.appspot.com",
  messagingSenderId: "790336067042",
  appId: "1:790336067042:web:8004fb4e94e8c6214bd5bb",
});

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const database = firebaseConfig.firestore();

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export default firebaseConfig;
