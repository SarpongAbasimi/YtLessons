import React from 'react';
import  { Input } from './components/Input';
import { ToDoList } from './components/TodoList';
import { useState } from 'react';



function App() {
  const [todos, setTodos] = useState(''),
        [listOfToDos, setListOfToDos] = useState([]);

  const handleSubmitToDo = (userToDo) => {
    setListOfToDos(listOfToDos.concat(userToDo))
  };

  return (
    <div className="App">
      <Input initailToDo={todos} onSubmitToDo={handleSubmitToDo} setTodo={setTodos}/>
      <ToDoList toDoList={listOfToDos}/>
    </div>
  );
}

export default App;
