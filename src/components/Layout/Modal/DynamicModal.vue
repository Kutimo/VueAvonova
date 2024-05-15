<template>
  <div v-if="showModal" class="h absolute left-2/4">
    <div class="flex justify-center">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DynamicModal',
  props: {
    showModal: Boolean,
  },
  emits: ['update:showModal'],
  setup(props, { emit }) {
    function closeModal() {
      emit('update:showModal', false)
    }

    return { closeModal }
  },
}
</script>
