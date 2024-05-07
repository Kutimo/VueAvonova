<template>
  <select
    v-model="selectedValue"
    :class="`active::border-green-1100 h-40 w-[260px] rounded-8 border-[1px] border-gray-600 px-10 py-8 hover:border-2 hover:border-green-1100 focus-visible:border-2 focus-visible:outline-none active:border-2 ${extraClasses}`"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Option {
  label: string;
  value: string | number;
}

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
    selectedValue: {
      type: [String, Number],
      default: "",
    },
    extraClasses: {
      type: String,
      default: "",
    },
  },
});
</script>
