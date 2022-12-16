import React, { useState} from 'react';
import Todolist from './components/Todolist.js';

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
