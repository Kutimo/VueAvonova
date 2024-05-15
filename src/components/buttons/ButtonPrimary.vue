<script lang="ts">
export default {
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
};
</script>

<template>
  <a
    tabindex="0"
    class="w-fit cursor-pointer select-none rounded-28 bg-green-1200 px-28 py-10 font-body text-base font-medium leading-5 text-green-300 outline-none ring-black ring-offset-2 transition-all duration-500 hover:bg-green-600 hover:text-black focus-visible:ring-2 active:bg-green-400"
  >
    <span v-if="icon" class="icon" v-html="icon"></span>
    {{ buttonText }}
  </a>
</template>
