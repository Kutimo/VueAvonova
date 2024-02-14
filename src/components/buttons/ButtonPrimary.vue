<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonPrimary',
  props: {
    buttonText: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      default: 'var(--green300)'
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
  <a :style="{ color: textColor }" to="handleClick">
    <span v-if="icon" class="icon" v-html="icon"></span>
    {{ buttonText }}
  </a>
</template>

<style scoped>
a {
  background-color: var(--green1200);
  border: 2px solid var(--green1200);
}
</style>
