<template>
    <div v-if="showModal">
        <div class="flex justify-center">
            <slot></slot>
        </div>
    </div>
</template>
  
<script lang="ts">
export default {
    name: 'Modal',
    props: {
        showModal: Boolean
    },
    emits: ['update:showModal'],
    setup(props, { emit }) {
        function closeModal() {
            emit('update:showModal', false);
        }

        return { closeModal };
    }
};
</script>
  