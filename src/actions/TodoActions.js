import dispatcher from "../dispatcher/dispatcher"

class TodoActions {
    createTodo = (name) => {
        return dispatcher.dispatch({
            type:"CREATE_TODO",
            todo: {
                name:name
            }
        })
    }

    deleteTodo = (todo) => {
        return dispatcher.dispatch({
            type:"DELETE_TODO",
            todo: todo
        })
    }
}

export default new TodoActions

        