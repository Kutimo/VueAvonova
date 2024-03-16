<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonSecondary",
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
    class="active:bg-green-[#00382e] w-fit cursor-pointer select-none rounded-28 border-2 border-green-1200 bg-green-200 px-20 py-10 font-body text-base font-medium leading-5 text-black outline-none ring-black ring-offset-2 transition-all duration-500 hover:bg-green-1200 hover:text-white focus-visible:ring-2"
  >
    <span v-if="icon" class="icon" v-html="icon"></span>
    {{ buttonText }}
  </a>
</template>
