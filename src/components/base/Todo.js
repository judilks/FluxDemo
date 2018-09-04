import React from 'react'
import '../../static/base/todo.css'


const Todo = ({todo, deleteTodo}) => {
    return(
        <div>
            <li className='todo list-group-item'>
                {todo.name}
            </li>
            <button className = 'btn-danger btn-secondary todo' onClick={() => {deleteTodo(todo)}}>
                Delete
            </button>
        </div>
    )
}

export default Todo