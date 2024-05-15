<template>
    <div class="relative">
        <button @click="showDropdown = !showDropdown" class="bg-blue-500 text-white p-2 rounded">
            Velg alternativer
        </button>
        <div v-if="showDropdown" class="absolute bg-white border rounded mt-1">
            <div v-for="option in options" :key="option.value" class="p-2">
                <label class="flex items-center space-x-3">
                    <input type="checkbox" :value="option.value" v-model="internalSelectedValues" @change="updateValue">
                    {{ option.label }}
                </label>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { ref, watch } from 'vue';

export default {
    name: 'DropdownWithCheckboxes',
    props: {
        options: {
            type: Array as () => Array<{ label: string; value: any }>,
            required: true
        },
        selectedValues: Array as () => Array<any>
    },
    setup(props, { emit }) {
        const showDropdown = ref(false);
        const internalSelectedValues = ref([...props.selectedValues || []]);

        const updateValue = () => {
            emit('update:selectedValues', internalSelectedValues.value);
        };

        watch(() => props.selectedValues, (newVal) => {
            internalSelectedValues.value = [...(newVal ?? [])];
        }, { deep: true });

        return { showDropdown, internalSelectedValues, updateValue };
    }
};
</script>
  
  