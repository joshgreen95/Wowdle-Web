import React, { useState} from 'react';
import Todolist from './components/Todolist.js';

//Firebase
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFM7cP6a4nDcjrvkQrflwR79EJK9K7nLE",
  authDomain: "wowdle.firebaseapp.com",
  projectId: "wowdle",
  storageBucket: "wowdle.appspot.com",
  messagingSenderId: "870075596086",
  appId: "1:870075596086:web:e922398cd06776217d4797",
  measurementId: "G-V4P9LCM8TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2']);
  return ( 
    <>
      <Todolist todos={todos} meme="meme"/>
      <input type="text"/>
      <button>Add Todo</button>
      <button>Clear completed Todos</button>    
      <div>0 left to do</div>
    </>
    );
}

export default App;
