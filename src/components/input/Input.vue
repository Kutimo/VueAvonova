<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    descriptiveText: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
})
</script>

<template>
  <div class="input">
    <label for="{{name}}">
      {{ label }}
      <p>{{ descriptiveText }}</p>
      <input id="{{name}}" type="{{text }}" />
    </label>
  </div>
</template>

<style scoped>
.input {
  display: flex;
  gap: 10px;
}
input {
  width: 260px;
  height: 40px;
  padding: 8px 10px;
  border: 1px solid var(--gray600);
  border-radius: 6px;
}

input:hover,
input:active {
  border: 2px solid;
  border-color: var(--green1100);
}
</style>
