import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCzxD0oxxZwuSuT0Lo0bZunKMp9FTxKa4Q',
  authDomain: 'siswa-app-a2c2f.firebaseapp.com',
  projectId: 'siswa-app-a2c2f',
  storageBucket: 'siswa-app-a2c2f.appspot.com',
  messagingSenderId: '655607624715',
  appId: '1:655607624715:web:6d159b5486b11e3c4cc30e',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
