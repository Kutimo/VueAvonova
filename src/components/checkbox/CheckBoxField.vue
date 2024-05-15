<script lang="ts">
import { ref, watch } from 'vue'

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const checked = ref(props.value)

    watch(checked, (newValue) => {
      emit('update:value', newValue)
    })

    return {
      checked,
    }
  },
}
</script>

<template>
  <label class="space-x-2 flex items-center">
    <input type="checkbox" v-model="checked" class="form-checkbox h-24 w-24 rounded-6" />
    <span>{{ label }}</span>
  </label>
</template>
