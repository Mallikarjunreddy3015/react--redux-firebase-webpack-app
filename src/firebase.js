import firebase from "firebase/compat/app" ;
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
// import {getAuth} from "firebase/auth";

// const Auth = getAuth();

//import{getStorage, uploadBytes} from "firebase/storage"


// const storage = getStorage();

const firebaseConfig = {
  apiKey: "AIzaSyDc_ueuXVMaHaIydOQu-YyW_QyS022tgcE",
  authDomain: "plug-intern-96ac6.firebaseapp.com",
  projectId: "plug-intern-96ac6",
  storageBucket: "plug-intern-96ac6.appspot.com",
  messagingSenderId: "848502104214",
  appId: "1:848502104214:web:6311bcdb7aa0ddb5cc22b7"
};


  const firebaseDB = firebase.initializeApp(firebaseConfig);
  const db = firebaseDB.database().ref();
  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export  { auth, googleAuthProvider, db };
  
  // export async function upload(file,currentUser,setLoading){
  //   const fileRef = ref(storage,currentUser.uid+'.png');
  //   setLoading(true);

  //   const snapshot= await uploadBytes(fileRef,file);
  //   setLoading(false);

  //   alert("File Uploaded")
   
  // }