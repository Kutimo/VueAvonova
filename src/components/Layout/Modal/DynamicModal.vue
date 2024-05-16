<template>
  <div
    v-if="showModal"
    class="absolute flex items-center justify-center z-50 bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg shadow-lg p-4">
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
