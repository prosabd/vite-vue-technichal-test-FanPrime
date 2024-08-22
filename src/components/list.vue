<template>
    <div>
        <ul>
            <li v-for="element in elements" :key="element.id">
                <elementVue :title="element.title" :checked="element.checked" />
                <div>
                    <removeButton :elementId="element.id"/>
                    <editButton :elementId="element.id"/>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import elementVue from './element.vue'
import removeButton from './buttons/removeButton.vue'
import editButton from './buttons/editButton.vue'

</script>

<style scoped>

</style>