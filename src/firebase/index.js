import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCLJsfpCzoG4Ur47ciLzJcTDDCxkGKB6J8",
    authDomain: "codex08012.firebaseapp.com",
    databaseURL: "https://codex08012.firebaseio.com",
    projectId: "codex08012",
    storageBucket: "codex08012.appspot.com",
    messagingSenderId: "1060348525486",
    appId: "1:1060348525486:web:0d6c719a3e458b202ce63f",
    measurementId: "G-T2ZQJ9DEBP"
  };
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export{storage, firebase as default};
  