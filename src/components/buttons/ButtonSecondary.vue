<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonSecondary',
  props: {
    buttonText: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    to: {
      type: [String, Object],
      default: ''
    }
  }
  // methods: {
  // handleClick() {
  //   if (this.to) {
  //     // Navigate to the specified route
  //     console.log('Navigating to:', this.to)
  //   }
  // }
})
</script>

<template>
  <a to="handleClick" tabindex="0">
    <span v-if="icon" class="icon" v-html="icon"></span>
    {{ buttonText }}
  </a>
</template>

<style scoped>
a {
  background-color: var(--green200);
  color: var(--black);
}
a:hover {
  background-color: var(--green1200);
  color: var(--white);
}
a:active {
  background-color: var(--green400);
}
a:focus {
  outline: 2px solid #272727;
  outline-offset: 2px;
}
</style>
