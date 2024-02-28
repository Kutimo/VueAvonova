<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TextInput",
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
  <div class="flex flex-col gap-10">
    <div class="flex gap-8">
      <label for="{{name}}" class="text-base font-medium">
        {{ label }}
      </label>
      <img
        v-if="icon"
        src="@/assets/icons/IconQuestionBlue.svg"
        alt="Question icon"
        width="24"
        height="24"
        class="cursor-pointer"
      />
    </div>
    <p class="font-medium">{{ descriptiveText }}</p>
    <input
      class="active::border-green-1100 h-40 w-[260px] rounded-8 border-[1px] border-gray-600 px-10 py-8 hover:border-2 hover:border-green-1100 focus-visible:border-2 focus-visible:outline-none active:border-2"
      id="{{name}}"
      type="text"
      :placeholder="placeholder"
    />
    <div v-if="error" class="flex items-center gap-8">
      <img
        class="input__error-img"
        src="@/assets/icons/IconError.svg"
        alt="error icon"
        height="12"
        width="12"
      />
      <p class="h-18 text-sm text-red">{{ errorText }}</p>
    </div>
  </div>
</template>
