import { FETCH_TODOS, NEW_TODO, START_FETCHING } from '../action/constants'

const initialState = {
    todoList: [],
    newTodoTitle: '',
    loading: false,
    loaded: false,
}

export function todoReducer(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case START_FETCHING: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_TODOS: {
            return {
                ...state,
                todoList: payload,
                loading: false,
                loaded: true
            }
        }
        case NEW_TODO: {
            return {
                ...state,
                newTodoTitle: payload
            }
        }
    }
    return state
}
