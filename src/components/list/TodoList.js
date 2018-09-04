import React, { Component } from "react";
import Todo from "../base/Todo"
import CreateTodo from "../base/CreateTodo";
import TodoStore from "../../store/TodoStore";
import TodoActions from "../../actions/TodoActions"

class TodoList extends Component{

    constructor(props){
        super(props)
        this.state = {
            todos: TodoStore.getTodos()
        }
    }

    componentDidMount(){
        TodoStore.on("CHANGED_TODOS",() => {
            this.setState({todos: TodoStore.getTodos()})
        })
    }

    deleteTodo = (todo) => {
        TodoActions.deleteTodo(todo)
    } 

    createTodo = (todo) => {
        TodoActions.createTodo(todo)
    } 

    render(){
        const {todos} = this.state
        return(
            <div>
                <ol className='list-group'>
                {todos.map((todo, i) => {
                    return(
                        <Todo todo={todo} deleteTodo={this.deleteTodo} key={i}/>
                    )
                })}
                </ol>
                <CreateTodo createTodo={this.createTodo}/>
            </div>
        )
    }
}

export default TodoList
