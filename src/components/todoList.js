import React from 'react';

export const ToDoList = ({ toDoList }) => {
  return(
    <div>
    {/* Note that it is not advisable to use index as the key */}
    {/* It is being used here because this is a very simple example. */}
      {toDoList.map((todos, index) => {
        return(
          <li key={index}>{todos}</li>
        );
      })}
    </div>
  );
};
