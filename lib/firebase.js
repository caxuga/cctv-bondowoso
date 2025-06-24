import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDcYwLcHbjtlGBcRjKEbyEMwpDU0ybaGnA",
  authDomain: "cctv-bondowoso-chat.firebaseapp.com",
  databaseURL: "https://cctv-bondowoso-chat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cctv-bondowoso-chat",
  storageBucket: "cctv-bondowoso-chat.appspot.com",
  messagingSenderId: "189241389567",
  appId: "1:189241389567:web:47e3725b45aacca91eb7ca",
  measurementId: "G-1WN5C2825J"
};

// Hindari duplikat init
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getDatabase(app);

export { db };
