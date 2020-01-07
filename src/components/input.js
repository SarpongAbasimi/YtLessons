import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ initailToDo, onSubmitToDo,  setTodo }) => {
  let userToDoValue = React.createRef()

  const submitTodo = (event) => {
    event.preventDefault();
    onSubmitToDo(userToDoValue.current.value);
    setTodo('');
  };

  const handleInputChange = (e) => {
    // const currentVlaue = userToDoValue.current.value;
    const currentVlaue = e.target.value;
    setTodo(currentVlaue);
  };

  return(
    <div>
      <form className='form' onSubmit={submitTodo}>
        <input className='inputField' required type='text' name='searchField' value={initailToDo} ref={userToDoValue} onChange={handleInputChange}></input>
        <button className='button' type='submit'>
          submit todo
        </button>
      </form>
    </div>
  );
};

Input.protoTypes = {
  initailToDo: PropTypes.string,
  onSubmitToDo: PropTypes.func,
  setTodo: PropTypes.func
};