// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDl0x2boqfH-L0TtCQOHcXqkrgzpbPEZfE",
  authDomain: "awesomeproject-95404.firebaseapp.com",
  databaseURL: "https://awesomeproject-95404.firebaseio.com",
  projectId: "awesomeproject-95404",
  storageBucket: "awesomeproject-95404.appspot.com",
  messagingSenderId: "sender-id",
  appId: "1:665617758284:android:c2a3ba8dea0b98daff1ce9",
  measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
