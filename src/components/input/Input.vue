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
    placeholder: {
      type: String,
      default: ''
    },
    descriptiveText: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: true
    },
    errorText: {
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
      <input id="{{name}}" type="text" :placeholder="placeholder" />
    </label>
    <div v-if="error" class="input__error">
      <img class="input__error-img" src="../icons/IconError.svg" alt="error icon" />
      <p class="input__error-text">{{ errorText }}</p>
    </div>
  </div>
</template>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
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

.input__error {
  display: flex;
  align-items: center;
  gap: 8px;
}

.input__error-text {
  color: var(--red);
  font-size: 14px;
  height: 18px;
}
</style>
