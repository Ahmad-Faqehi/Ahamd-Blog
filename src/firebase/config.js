import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDswEJo7F0SWlxfudXcqKF6MxNttv3eFJI",
    authDomain: "ahmad-vue.firebaseapp.com",
    projectId: "ahmad-vue",
    storageBucket: "ahmad-vue.appspot.com",
    messagingSenderId: "1084769088685",
    appId: "1:1084769088685:web:1cd96803dfad941d214224"
  };

 firebase.initializeApp(firebaseConfig) 

 const projectFirestore = firebase.firestore()
 const projectAuth = firebase.auth()
 export { projectFirestore, projectAuth }