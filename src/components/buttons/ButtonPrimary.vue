<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonPrimary",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },
    to: {
      type: [String, Object],
      default: "",
    },
  },
  // methods: {
  // handleClick() {
  //   if (this.to) {
  //     // Navigate to the specified route
  //     console.log('Navigating to:', this.to)
  //   }
  // }
});
</script>

<template>
  <a
    to="handleClick"
    tabindex="0"
    class="w-fit cursor-pointer select-none rounded-28 bg-green-1200 px-24 py-12 font-body text-base font-medium leading-5 text-green-300 outline-none ring-black ring-offset-2 transition-all duration-500 hover:bg-green-600 hover:text-black focus-visible:ring-2 active:bg-green-400"
  >
    <span v-if="icon" class="icon" v-html="icon"></span>
    {{ buttonText }}
  </a>
</template>
