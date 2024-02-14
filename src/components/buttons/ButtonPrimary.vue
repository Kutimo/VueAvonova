<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonPrimary',
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
  <a to="handleClick">
    <span v-if="icon" class="icon" v-html="icon"></span>
    {{ buttonText }}
  </a>
</template>

<style scoped>
a {
  background-color: var(--green1200);
  color: var(--green300);
}
a:hover {
  background-color: var(--green600);
  color: var(--black);
}
a:active {
  background-color: var(--green400);
}
a:focus::before {
  content: ' ';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 2px solid #272727;
  opacity: 1;
  background-color: transparent;
}
</style>
