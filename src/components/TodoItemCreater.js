import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/recoil_state";

let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    let newDate = new Date();
    // let date = newDate.getTime();
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        createdAt: newDate.toLocaleTimeString(),
        isComplete: false
      }
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} className="form-control create-input" placeholder="Enter your task..."/>
      <button onClick={addItem} className="btn btn-dark create-btn">Add</button>
    </div>
  );
}

export default TodoItemCreator;
