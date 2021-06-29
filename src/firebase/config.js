import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    "apiKey": "AIzaSyAVaIniwrj5BzS5neyx0vGYqjkkfbs1yxo",
    "authDomain": "crm-app-105d2.firebaseapp.com",
    "projectId": "crm-app-105d2",
    "storageBucket": "crm-app-105d2.appspot.com",
    "messagingSenderId": "752343876923",
    "appId": "1:752343876923:web:2623a9ff2be1cb8bdee31e",
    "measurementId": "G-451PY78WMR"
 };

 if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
 }

 export { firebase };