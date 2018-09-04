import React from 'react'
import '../../static/base/todo.css'


const CreateTodo = ({createTodo}) => {
    return(
        <div className='create-todo'>
            <input type='text' id='todo'/>
            <button className = 'btn-secondary' onClick={() => {createTodo(document.getElementById('todo').value)}}>
                Add
            </button>
        </div>
    )
}

export default CreateTodo