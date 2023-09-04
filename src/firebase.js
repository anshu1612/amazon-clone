import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOio9RT60l7hTXsv3I-zUQrv1qmtoZdxE",
    authDomain: "clone-9c93e.firebaseapp.com",
    projectId: "clone-9c93e",
    storageBucket: "clone-9c93e.appspot.com",
    messagingSenderId: "390307057050",
    appId: "1:390307057050:web:2fa5a6c4bc4f2bafeb3e23",
    measurementId: "G-DHQWEB0FXS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };