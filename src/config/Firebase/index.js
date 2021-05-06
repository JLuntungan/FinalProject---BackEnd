import firebase from "firebase"

const  firebaseConfig = {
    apiKey: "AIzaSyC9fA3ZJ06qhfDohUUjVuABlVUXs7rDs5w",
    authDomain: "final-project-f4908.firebaseapp.com",
    databaseURL: "https://final-project-f4908-default-rtdb.firebaseio.com",
    projectId: "final-project-f4908",
    storageBucket: "final-project-f4908.appspot.com",
    messagingSenderId: "1078760495907",
    appId: "1:1078760495907:web:ca3b40efcc4390ded84a96"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;