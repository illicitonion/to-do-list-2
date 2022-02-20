/* eslint-disable */
import React, { useState } from "react";
import "../App.css";

const Todo = ({ eachTodo, handleDoneTodo, handleEdit, setEditAvailable }) => {
  const [inputValue, setInputValue] = useState(eachTodo.text);

  const handleEditFormText = (event) => {
    setInputValue(event.target.value);
  };

  const submitNewTodo = (event) => {
    event.text = inputValue;
    setEditAvailable(false);
    event.edit = false;
  };

  const editForm = (
    <div>
      <input
        value={inputValue}
        onChange={(event) => handleEditFormText(event)}
      />
      <button onClick={(event) => submitNewTodo(eachTodo)}>submit</button>
    </div>
  );

  let showEditButton;
  if (eachTodo.checked === false || eachTodo.checked === null) {
    showEditButton = (
      <button
        onClick={(event) => handleEdit(eachTodo)}
        className="todo-button-style"
      >
        Edit
      </button>
    );
  }

  let showDoneButton;
  if (eachTodo.checked === false || eachTodo.checked === null) {
    showDoneButton = (
      <button
        onClick={(event) => handleDoneTodo(eachTodo)}
        className="todo-button-style"
      >
        completed
      </button>
    );
  } else {
    showDoneButton = (
      <button
        onClick={(event) => handleDoneTodo(eachTodo)}
        className="todo-button-style"
      >
        not completed
      </button>
    );
  }

  let todoBox;
  if (eachTodo.edit == false) {
    todoBox = (
      <div className="eachTodo text-center">
        <label className={eachTodo.classCross}>{eachTodo.text}</label>
        <div className="buttons-container">
          {showDoneButton}
          {showEditButton}
        </div>
      </div>
    );
  } else {
    todoBox = (
      <div className="eachTodo text-center">
        {eachTodo.edit == true && editForm}
      </div>
    );
  }

  return <>{todoBox}</>;
};

export default Todo;
