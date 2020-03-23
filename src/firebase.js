import firebase from "firebase";

const config = {
  apiKey: "AIzaSyD7HJc1iZBqfYZLTiiaICDfHh1ZMyOoda8",
  authDomain: "fir-react-bb576.firebaseapp.com",
  databaseURL: "https://fir-react-bb576.firebaseio.com",
  projectId: "fir-react-bb576",
  storageBucket: "fir-react-bb576.appspot.com",
  messagingSenderId: "1014249945460",
  appId: "1:1014249945460:web:8163e1c1a2c3c485435421"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
