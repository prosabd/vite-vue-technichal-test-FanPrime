<template>
    <div class="element">
        <input type="checkbox" :checked="checkItem">
        <label>{{ title }}</label>
    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  id: Number,
  title: String,
  checked: Boolean
})

const checkItem = computed (()=> {
    return props.checked
})


</script>

<style lang="sass" scoped>

</style>