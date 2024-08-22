<script setup>
import listVue from "../components/list.vue"

</script>

<template>
    <div>
        <h1> FanPrime Todo App </h1>
        <div class="card">
            <input type="text" placeholder="Add a new todo" v-model=""/>
            <listVue filtered=false />
            <button @click=""> Add todo </button>
        </div>
    </div>
</template>

<style lang="sass" scoped>

</style>