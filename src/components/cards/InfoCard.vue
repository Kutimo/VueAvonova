<script lang="ts">
import { defineComponent } from 'vue'
import ButtonSecondary from '../buttons/ButtonSecondary.vue'

export default defineComponent({
  name: 'InfoCard',
  components: {
    ButtonSecondary,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped></style>

<template>
  <div class="overflow-hidden p-20 rounded-10 shadow-md w-[700px]">
    <h4 class="flex justify-center">Kartlegging og risikovurdering</h4>

    <div class="flex px-6 py-4 mt-20">
      <p class="text-base text-gray-700 w-[700px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cupiditate
        veniam, enim nostrum ut illo maiores id aperiam assumenda molestiae excepturi
        deleniti hic, accusantium quae? Quis minima sapiente, voluptas ea beatae amet,
        aliquid ofte, ut nobis est fuga natus. Autem numquam totam aliquam optio ab ad
        quis ea odit voluptate.
      </p>
      <img class="w-full" :src="image" alt="Image" />
    </div>
    <div class="flex justify-center mt-20">
      <ButtonSecondary button-text="Tilbake" />
    </div>
  </div>
</template>
