import firebase from 'firebase';



const firebaseConfig = {

  apiKey: "AIzaSyAL_Z-w0VDu9cyE_76OdmBK_K3uk09R3O0",

  authDomain: "crud-c54cf.firebaseapp.com",

  projectId: "crud-c54cf",

  storageBucket: "crud-c54cf.appspot.com",

  messagingSenderId: "407045437296",

  appId: "1:407045437296:web:d8c0629684b529b6de01b5"

};


// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

export default app;