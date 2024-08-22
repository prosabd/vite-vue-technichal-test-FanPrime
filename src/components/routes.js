import Todo from '../views/Todo.vue'
import TodoChecked from '../views/TodoChecked.vue'

// Routes definies afin de trier les taches complétés
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
