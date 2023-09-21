import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// create sort function
const sortTodo = (a, b) => {
    if (a.id > b.id) {
        return -1
    }
    if (a.id < b.id) {
        return 1
    }
    return 0
}

export default new Vuex.Store({
    state: {
        navigation_drawer: false,
        apiRoot: 'http://localhost:8000',
        todos: [
            {
                id: 1,
                title: 'Todo 1',
                description: 'Description 1',
                completed: false,
            },
            {
                id: 2,
                title: 'Todo 2',
                description: 'Description 2',
                completed: true,
            }
        ],
    },
    getters: {
        navigation_drawer: state => state.navigation_drawer,
        apiRoot: state => state.apiRoot,
        todos: state => state.todos.sort(sortTodo),
    },
    mutations: {
        toggleNavigationDrawer(state) {
            state.navigation_drawer = !state.navigation_drawer
        },
        setTodos(state, payload) {
            state.todos = payload.todos()
        },
        deleteTodoFromList(state, payload) {
            const index = state.todos.findIndex(todo => todo.id === payload.todo.id)
            state.todos.splice(index, 1)
        },
        addTodoToList(state, payload) {
            state.todos.push(payload.todo)
        },
    },
    actions: {},
    modules: {}
})
