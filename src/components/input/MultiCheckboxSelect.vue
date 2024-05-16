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
    selectedValues: {
      type: Array as () => Array<any>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const showDropdown = ref(false)
    const internalSelectedValues = ref('')

    watch(
      () => props.selectedValues,
      (newVal) => {
        internalSelectedValues.value = newVal.map(
          (employee) => `Navn: ${employee.first_name} ${employee.last_name}, Nummer: ${employee.employee_id}`
        ).join(' , ')
      },
      { immediate: true, deep: true }
    )

    const updateValue = (
      employee_id: number,
      checked: boolean,
      first_name: string,
      last_name: string,
    ) => {
      const selectedArray = [...props.selectedValues]
      const employeeIndex = selectedArray.findIndex(
        (employee) => employee.employee_id === employee_id,
      )
      if (checked && employeeIndex === -1) {
        selectedArray.push({ employee_id, first_name, last_name })
      } else if (!checked && employeeIndex !== -1) {
        selectedArray.splice(employeeIndex, 1)
      }
      internalSelectedValues.value = selectedArray.map(
        (employee) => `Navn: ${employee.first_name} ${employee.last_name}, Nummer: ${employee.employee_id}`
      ).join(' , ')
      emit('update:selectedValues', selectedArray)
    }

    return { showDropdown, internalSelectedValues, updateValue }
  },
}
</script>

<template>
  <div class="p-4 w-full">
    <button @click.prevent="showDropdown = !showDropdown"
      class="p-8 justify-between rounded flex items-center gap-4 border border-gray-300 w-full h-[50px]">
      Velg ansatte
      <img src="../../assets/icons/IconDropdown.svg" alt="dropdown icon" height="15" width="15" />
    </button>
    <div v-if="showDropdown" class="absolute bg-neutral-100 border z-20 w-[250px] p-8 rounded mt-1">
      <div v-for="option in options" :key="option.employee_id" class="p-2">
        <label class="flex items-center space-x-3">
          <input type="checkbox" :value="option.employee_id" :checked="$props.selectedValues.some(
            (employee) => employee.employee_id === option.employee_id,
          )" @change="
  updateValue(
    option.employee_id,
    ($event.target as HTMLInputElement)?.checked,
    option.first_name,
    option.last_name,
  )
  " />
          {{ option.first_name + ' ' + option.last_name }}
        </label>
      </div>
    </div>
  </div>
</template>
