import React, { Component } from "react";
import Todo from "../base/Todo"
import CreateTodo from "../base/CreateTodo";
import TodoStore from "../../store/TodoStore";
import TodoActions from "../../actions/TodoActions"

class TodoList extends Component{

    constructor(props){
        super(props)
        this.state = TodoStore.getInitialState();
    }

    componentDidMount(){
        TodoStore.addListener(this.getStateFromStore)
    }

    deleteTodo = (todo) => {
        TodoActions.deleteTodo(todo)
    } 

    createTodo = (todo) => {
        TodoActions.createTodo(todo)
    } 

    getStateFromStore = () =>{
        this.setState({state:TodoStore.getState()})
    }

    render(){
        const {todos} = this.state
        TodoStore.getState()
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
