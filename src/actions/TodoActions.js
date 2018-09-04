import dispatcher from "../dispatcher/dispatcher"

class TodoActions {
    createTodo = (name) => {
        dispatcher.dispatch({
            type:"CREATE_TODO",
            todo: {
                name:name
            }
        })
    }

    deleteTodo = (todo) => {
        dispatcher.dispatch({
            type:"DELETE_TODO",
            todo: todo
        })
    }
}

export default new TodoActions

        