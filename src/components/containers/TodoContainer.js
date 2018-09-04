import React from 'react';
import TodoList from '../list/TodoList'

let TodoContainer = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <TodoList className="p-2 bd-highlight"/>
    </div>
  )
}


export default TodoContainer;