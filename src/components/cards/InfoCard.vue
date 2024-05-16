<script lang="ts">
import ButtonSecondary from '../buttons/ButtonSecondary.vue'

export default {
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
}
</script>

<template>
  <div class="overflow-hidden p-20 rounded-10 shadow-md w-[700px]">
    <h4 class="flex justify-center">Kartlegging og risikovurdering</h4>

    <div class="flex px-6 py-4 mt-20">
      <p class="text-base text-gray-700 w-[500px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur commodi at
        minima similique dolorem fugit mollitia? Reprehenderit laborum omnis error
        expedita ullam minus doloremque harum molestias quas sequi quasi cupiditate
        deserunt, iusto eaque nisi eos nulla <br />
        <br />
        voluptatibus accusamus, at culpa maiores, dolorum ea incidunt impedit? Dicta
        necessitatibus quod inventore laborum laboriosam vitae id sapiente tenetur
        excepturi eligendi, autem minus doloremque libero accusantium? Ab, vero voluptas
        necessitatibus deserunt vitae ducimus.
      </p>
      <div>
        <img class="w-full" src="../../assets/img/ImageLogin.jpg" alt="Image" />
      </div>
    </div>
    <div class="flex justify-center mt-20">
      <ButtonSecondary button-text="Tilbake" />
    </div>
  </div>
</template>
