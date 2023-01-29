import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState } from '../atoms/recoil_state';
import TodoItemCreator from './TodoItemCreater';
import TodoItem from './TodoItem';

const TodoListMain = () => {
    const todoList = useRecoilValue(todoListState);
  return (
    <div>
        <TodoItemCreator/>
        {
            todoList.map((val) => (
                <TodoItem item={val} key={val.id}/>
            ))
        }

    </div>
  )
}

export default TodoListMain;