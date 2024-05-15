<!-- v-model="value" -->
<template>
  <textarea
    :placeholder="placeholder"
    :class="`active::border-green-1100 h-[170px] w-[359px] rounded-6 border-[1px] border-gray-600 px-10 py-8 hover:border-2 hover:border-green-1100 focus-visible:border-2 focus-visible:outline-none active:border-2 ${extraClasses}`"
  ></textarea>
</template>

<script lang="ts">
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    extraClasses: {
      type: String,
      default: '',
    },
  },
}
</script>
