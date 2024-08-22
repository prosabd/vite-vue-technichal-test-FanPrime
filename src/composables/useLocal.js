import { ref, watch } from 'vue';

export function useLocal(key, initialValue = {}) {
    let val = ref(getLocal(key) || initialValue);

    watch(val, () => {
        localStorage.setItem(key, JSON.stringify(val.value));
    }, { deep: true });

    return val;
}

export function getLocal(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function addToLocal(key, newItem) {
    let data = getLocal(key) || {};
    let maxId = Math.max(0, ...Object.keys(data).map(Number));
    let newId = maxId + 1;
    if (typeof newItem !== 'object') {
        newItem = { value: newItem };
    }
    newItem.checked = false;
    data[newId] = newItem;
    localStorage.setItem(key, JSON.stringify(data));
    return data;
}