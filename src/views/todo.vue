<script setup>
import ListVue from "../components/List.vue"
import { ref, computed } from 'vue'
import { getLocal, addToLocal } from '../composables/useLocal'
import { useSwal } from '../composables/useSwal'

const todos = getLocal('todo') ?? {}
const inputAdd = ref('')

const swal = useSwal()

// const todosArray = computed(() => {
//     return Object.entries(todos.value).map(([id, title]) => ({ id, title, checked }));
// })

// Ajoute les éléments dans le local storage sinon affiche un message d'erreur
const addItemInTodo = () => {
    if (inputAdd.value.trim() !== '') {
        todos.value = addToLocal('todo', inputAdd.value)
        inputAdd.value = ''
    } else {
        swal.fire({
            title: 'Warning',
            text: 'Please enter a todo',
            icon: 'warning'
        })
    }
}
</script>

<template>
    <div>
        <h1> FanPrime Todo App </h1>
        <div class="card">
            <input type="text" placeholder="Add a new todo" v-model="inputAdd"/>
            <ListVue filtered=false :elements=todos />
            <button @click="addItemInTodo"> Add todo </button>
        </div>
    </div>
</template>

<style lang="sass" scoped>
@import '../style.scss'
button
    margin-top: 2em
    background: linear-gradient(90deg, rgba($fan-color, 0.6), rgba($fan-color, 0.4))
    border: none
    padding: 0.5em 1em
    color: #fff
    &:hover
        background: linear-gradient(90deg, rgba($fan-color, 0.4), rgba($fan-color, 0.3))

</style>