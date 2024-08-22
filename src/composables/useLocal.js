import { ref, watch } from 'vue';

export function useLocal(key, val) {
    let localItem = readLocal();

    let localValue = ref(localItem ?? val);

    watch(localValue, addToLocal, { deep: true });

    function readLocal() {
        return JSON.parse(localStorage.getItem(key));
    }

    function addToLocal() {
        localStorage.setItem(key, JSON.stringify(localValue.value));
    }

    if (val == null || val == '') {
        return ref(localStorage.getItem(key));
    }

    return {
        localValue,
        readLocal,
    };
            
}