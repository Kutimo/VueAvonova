<script lang="ts">
import { ref } from 'vue'
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

    const updateValue = (
      employeeId: number,
      checked: boolean,
      firstName: string,
      lastName: string,
    ) => {
      const employeeIndex = internalSelectedValues.value.findIndex(
        (employee) => employee.id === employeeId,
      )
      if (checked && employeeIndex === -1) {
        internalSelectedValues.value.push({ employeeId: employeeId, firstName, lastName })
        console.log(internalSelectedValues.value)
      } else if (!checked && employeeIndex !== -1) {
        internalSelectedValues.value.splice(employeeIndex, 1)
      }
      emit('update:selectedValues', internalSelectedValues.value)
    }

    return { showDropdown, internalSelectedValues, updateValue }
  },
}
</script>

<template>
  <div class="p-4 w-full">
    <button
      @click="showDropdown = !showDropdown"
      class="p-8 justify-between rounded flex items-center gap-4 border border-gray-300 w-full h-[50px]"
    >
      Velg ansatte
      <img
        src="../../assets/icons/IconDropdown.svg"
        alt="dropdown icon"
        height="15"
        width="15"
      />
    </button>
    <div
      v-if="showDropdown"
      class="absolute bg-neutral-100 border z-20 w-[250px] p-8 rounded mt-1"
    >
      <div v-for="option in options" :key="option.employee_id" class="p-2">
        <label class="flex items-center space-x-3">
          <input
            type="checkbox"
            :value="option.employee_id"
            :checked="
              internalSelectedValues.some(
                (employee) => employee.id === option.employee_id,
              )
            "
            @change="
              updateValue(
                option.employee_id,
                ($event.target as HTMLInputElement)?.checked,
                option.first_name,
                option.last_name,
              )
            "
          />
          {{ option.first_name + ' ' + option.last_name }}
        </label>
      </div>
    </div>
  </div>
</template>
