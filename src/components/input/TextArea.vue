<template>
  <textarea
    v-model="value"
    :placeholder="placeholder"
    :class="`rounded-md p-2 w-full resize-none border ${extraClasses}`"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    extraClasses: {
      type: String,
      default: "",
    },
  },
});
</script>
