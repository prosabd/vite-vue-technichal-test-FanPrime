<script setup>
import ListVue from "../components/List.vue"
import { ref } from 'vue'
import { useLocal } from '../composables/useLocal'
import { useSwal } from '../composables/useSwal'

let todos = useLocal('todo') ?? []
let inputAdd = ref('')

const addItemInTodo = () => {
    if (inputAdd.value !== '' && inputAdd.value !== null) {
        useLocal('todo', inputAdd.value)
        inputAdd.value = ''
    } else {
        useSwal('warning', 'Please enter a todo')
    }
}

</script>

<template>
    <div>
        <h1> FanPrime Todo App </h1>
        <div class="card">
            <input type="text" placeholder="Add a new todo" v-model="inputAdd"/>
            <ListVue filtered=false elements=todos />
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