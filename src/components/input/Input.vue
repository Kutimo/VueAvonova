<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Input",
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    descriptiveText: {
      type: String,
      default: "",
    },
    icon: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
      default: "",
    },
  },
});
</script>

<template>
  <div class="input">
    <div class="input__label">
      <label for="{{name}}">
        {{ label }}
      </label>
      <img
        v-if="icon"
        src="../icons/IconQuestion.svg"
        alt="Question icon"
        width="24"
        height="24"
        class="input__label-icon"
      />
    </div>
    <p>{{ descriptiveText }}</p>
    <input id="{{name}}" type="text" :placeholder="placeholder" />
    <div v-if="error" class="input__error">
      <img
        class="input__error-img"
        src="../icons/IconError.svg"
        alt="error icon"
        height="12"
        width="12"
      />
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

.input__label {
  display: flex;
  gap: 8px;
}
label {
  font-size: 16px;
  font-weight: 500;
}
p {
  font-size: 16px;
}
.input__label-icon {
  cursor: pointer;
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
