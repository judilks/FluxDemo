import {ReduceStore} from 'flux/utils'
import dispatcher from '../dispatcher/dispatcher'
import TodoList from '../components/list/TodoList';

class TodoStore extends ReduceStore {

    constructor(dispatcher){
        super(dispatcher)
        this.state = {
            todos:[
                {
                    name:'task1'
                },
                {
                    name:'task2'
                }
            ]
        }       
    }

    getInitialState() {
        return this.state
    }
    
    reduce(state, action) {
        switch (action.type) {
            case 'CREATE_TODO':{
                return this.create(action.todo)
            }

            case 'DELETE_TODO':{
                return this.delete(action.todo)
            }    
            default:{
                return state;
            }
            
        }
    }



    create = (todo) => {
        return this.state.todos.push(todo)
    }

    delete = (currentTodo) => {
        const val = this.state.todos.findIndex((todo) => {
        return todo.name === currentTodo.name
     })
        return this.state.todos.splice(val, 1)
    }
}

export default new TodoStore(dispatcher);
