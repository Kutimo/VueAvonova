<script lang="ts">
import { ref, watch } from 'vue'
import type { Employee } from '@/types/employeeType'

export default {
  name: 'DropdownWithCheckboxes',
  props: {
    options: {
      type: Array as () => Array<Employee>,
      required: true,
    },
    selectedValues: Array as () => Array<any>,
  },
  setup(props, { emit }) {
    console.log(props.options)
    const showDropdown = ref(false)
    const internalSelectedValues = ref([...(props.selectedValues || [])])

    const updateValue = (employeeId: number, checked: boolean) => {
      if (checked) {
        internalSelectedValues.value.push(employeeId)
      } else {
        const index = internalSelectedValues.value.indexOf(employeeId)
        if (index !== -1) {
          internalSelectedValues.value.splice(index, 1)
        }
      }
      emit('update:selectedValues', internalSelectedValues.value)
      console.log(internalSelectedValues.value)
    }

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
    <div v-if="showDropdown" class="absolute bg-white border z-20 p-8 rounded mt-1">
      <div v-for="option in options" :key="option.employee_id" class="p-2">
        <label class="flex items-center space-x-3">
          <input
            type="checkbox"
            value="option.employee_id"
            :checked="internalSelectedValues.includes(option.employee_id)"
            @change="
              updateValue(
                option.employee_id,
                ($event.target as HTMLInputElement)?.checked,
              )
            "
          />
          {{ option.first_name + ' ' + option.last_name }}
        </label>
      </div>
    </div>
  </div>
</template>
