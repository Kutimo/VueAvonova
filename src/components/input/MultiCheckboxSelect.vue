<script lang="ts">
import { ref, watch } from 'vue'
import type { Employee } from '@/types/employeeType'
export default {
  name: 'DropdownWithCheckboxes',
  props: {
    options: {
      type: Array as () => Array<{ value: Employee }>, // Define the type of options as an array of objects
      required: true,
    },
    selectedValues: Array as () => Array<any>,
  },
  setup(props, { emit }) {
    console.log(props.options)
    const showDropdown = ref(false)
    const internalSelectedValues = ref([...(props.selectedValues || [])])
    console.log(props.options)
    const updateValue = () => {
      emit('update:selectedValues', internalSelectedValues.value)
      console.log(internalSelectedValues.value)
    }

    watch(
      () => props.selectedValues,
      (newVal) => {
        internalSelectedValues.value = [...(newVal ?? [])]
      },
      { deep: true },
    )

    return { showDropdown, internalSelectedValues, updateValue }
  },
}
</script>

<template>
  <div class="p-4 m-4">
    <button
      @click="showDropdown = !showDropdown"
      class="bg-blue-500 text-white p-2 rounded"
    >
      Åpne
    </button>
    <div v-if="showDropdown" class="absolute bg-white border rounded mt-1">
      <div v-for="option in options" :key="option.value.employee_id" class="p-2">
        <label class="flex items-center space-x-3">
          <input
            type="checkbox"
            :value="option.value"
            :checked="internalSelectedValues.includes(option.value)"
            @change="updateValue"
          />
          {{ option }}
        </label>
      </div>
    </div>
  </div>
</template>
