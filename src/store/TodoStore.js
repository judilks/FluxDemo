import {ReduceStore} from 'flux/utils'
import {EventEmitter} from 'events'
import dispatcher from '../dispatcher/dispatcher'

class TodoStore extends EventEmitter {

    constructor(){
        super()
        this.todos = [
            {
                name:'task1'
            },
            {
                name:'task2'
            }
        ]
    }

    getTodos = () => {
        return this.todos;
    }

    create = (todo) => {
        this.todos.push(todo)
        this.emit("CHANGED_TODOS")
    }

    delete = (currentTodo) => {
        const val = this.todos.findIndex((todo) => {
        return todo.name === currentTodo.name
     })
        this.todos.splice(val, 1)
        this.emit("CHANGED_TODOS")
    }

    handleActions = (action) =>{
        switch(action.type){
            case "CREATE_TODO":{
                this.create(action.todo)
                break
            }
            case "DELETE_TODO":{
                this.delete(action.todo)
            }
        }
    }
}

const todoStore = new TodoStore();
dispatcher.register((action)=>todoStore.handleActions(action))

export default todoStore