import Todo from '../views/todo.vue'
import TodoChecked from '../views/todoChecked.vue'

const routes = [
    {
        path: '/',
        name: 'todo',
        component: Todo
    },
    {
        path: '/checked',
        name: 'checked',
        component: TodoChecked
    }
]

export default routes
