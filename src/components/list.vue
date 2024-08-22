<template>
    <div>
        <ul>
            <li v-for="element in filteredElements" :key="element.id">
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
import { ref, watch, computed } from 'vue'
import elementVue from './Element.vue'
import removeButton from './buttons/removeButton.vue'
import editButton from './buttons/editButton.vue'

const props = defineProps({
    elements: {
        type: Array,
        required: true
    },
    filtered: {
        type: Boolean,
        default: false
    }
})

const filteredElements = computed(() => {
    if (Array.isArray(props.elements)) {
        return props.filtered ? props.elements.filter(element => element.checked) : props.elements
    }
})
</script>

<style scoped>

ul {
    list-style-type: none;
    padding: 0;
}

ul > li {
    justify-content: space-between;
    align-items: center;
    padding:  10px 0px 10px 0px;
    border-bottom: 1px solid #000000;
}

</style>