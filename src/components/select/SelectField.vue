<script lang="ts">
import { ref, watch } from "vue";

interface Option {
  label: string;
  value: string;
}

export default {
  props: {
    data: {
      type: Array as () => Option[],
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    selectedValue: {
      type: [String, Number],
      default: "",
    },
  },
  setup(props, { emit }) {
    const localSelectedValue = ref(props.selectedValue);

    const handleChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      if (target) {
        const value = target.value;
        localSelectedValue.value = value;
        emit("update:selectedValue", value);
      }
    };

    return {
      localSelectedValue,
      handleChange,
    };
  },
};
</script>

<template>
  <select
    @change="handleChange($event)"
    class="h-40 w-[260px] rounded-6 border-[1px] border-gray-600 px-10 py-8 hover:border-2 hover:border-green-1100 focus-visible:border-2 focus-visible:outline-none active:border-2 active:border-green-1100"
  >
    <option selected disabled hidden value="placeholder">
      {{ placeholder }}
    </option>
    <option v-for="option in data" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
