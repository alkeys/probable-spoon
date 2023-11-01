import {initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore/lite";
import {getStorage} from "firebase/storage";

/**
 * Firebase Config provee acceso a diferentes servicios
 * @returns {{app: FirebaseApp, storage: FirebaseStorage, db: Firestore}}
 * @constructor
 */
export const FirebaseConfig = () => {

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDicSqsLQlMFB-NJ-c-YVXkYD2Ac43sVaY",
    authDomain: "fpi-pro.firebaseapp.com",
    projectId: "fpi-pro",
    storageBucket: "fpi-pro.appspot.com",
    messagingSenderId: "452150236159",
    appId: "1:452150236159:web:cf38de0dcb2e641b2fcdca",
    measurementId: "G-5F7LZ2WTXE"
  };
  //Inicializador de los servicios
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  return {
    app,
    db,
    storage
  }

}
