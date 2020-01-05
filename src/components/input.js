import React from 'react';

export const Input = ({ initailToDo, onSubmitToDo,  setTodo }) => {
  let userToDoValue = React.createRef()

  const submitTodo = (event) => {
    event.preventDefault();
    onSubmitToDo(userToDoValue.current.value);
    setTodo('');
  };

  const handleInputChange = () => {
    const currentVlaue = userToDoValue.current.value;
    setTodo(currentVlaue);
  };

  return(
    <div>
      <form onSubmit={submitTodo}>
        <input required type='text' name='searchField' value={initailToDo} ref={userToDoValue} onChange={handleInputChange}></input>
        <button type='submit'>
          submit todo
        </button>
      </form>
    </div>
  );
};