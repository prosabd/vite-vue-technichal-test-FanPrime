<script setup>
import ListVue from "../components/List.vue"
import { ref } from 'vue'
import { useLocal } from '../composables/useLocal'
import { useSwal } from '../composables/useSwal'

let todos = useLocal('todo') ?? []
let inputAdd = ref('')

</script>

<template>
    <div>
        <h1> FanPrime Todo App | filtered elements </h1>
        <div class="card">
            <ListVue filtered=true elements=todos />
        </div>
    </div>
</template>

<style scoped>
</style>