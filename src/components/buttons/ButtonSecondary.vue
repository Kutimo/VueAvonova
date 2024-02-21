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
  font-size: 16px;
  line-height: 20.8px;
  border-radius: var(--radius-28);
  padding: var(--spacing-12) var(--spacing-24);
  outline: none;
}
a:hover {
  background-color: var(--green1200);
  color: var(--white);
}
a:active {
  background-color: #00382e;
}
a:focus-visible {
  outline: 2px solid #272727;
  outline-offset: 3px;
}
</style>
