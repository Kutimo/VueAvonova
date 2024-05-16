<script lang="ts">
export default {
  name: 'ButtonSecondary',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    to: {
      type: [String, Object],
      default: '',
    },
  },
}
</script>

<template>
  <a
    tabindex="0"
    class="active:bg-green-[#00382e] w-fit cursor-pointer select-none rounded-28 border-2 border-green-1200 bg-green-200 px-18 py-8 font-body text-base font-medium leading-5 text-black outline-none ring-black ring-offset-2 transition-all duration-500 hover:bg-green-1200 hover:text-white focus-visible:ring-2"
  >
    <span v-if="icon" class="icon" v-html="icon"></span>
    {{ buttonText }}
  </a>
</template>
