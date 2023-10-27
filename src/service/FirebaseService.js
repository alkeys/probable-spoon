import firebase from 'firebase/app';
import 'firebase/storage';




const firebaseConfig = {
  apiKey: "AIzaSyDicSqsLQlMFB-NJ-c-YVXkYD2Ac43sVaY",
  authDomain: "fpi-pro.firebaseapp.com",
  projectId: "fpi-pro",
  storageBucket: "fpi-pro.appspot.com",
  messagingSenderId: "452150236159",
  appId: "1:452150236159:web:cf38de0dcb2e641b2fcdca",
  measurementId: "G-5F7LZ2WTXE"

};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const FirebaseService = {
  // Método para subir un archivo a Firebase Storage
  async uploadFile(file, storagePath) {
    try {
      const ref = storage.ref(storagePath);
      await ref.put(file);
      console.log('Archivo subido correctamente');
    } catch (error) {
      console.error('Error al subir archivo:', error);
    }
  },

  // Método para descargar un archivo de Firebase Storage
  async downloadFile(storagePath) {
    try {
      const ref = storage.ref(storagePath);
      const url = await ref.getDownloadURL();
      console.log('URL de descarga:', url);
      // Puedes utilizar esta URL para mostrar o descargar el archivo en tu aplicación
      return url;
    } catch (error) {
      console.error('Error al descargar archivo:', error);
      return null;
    }
  },
};

export default FirebaseService;
