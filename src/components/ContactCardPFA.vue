<template>
  <div class="flex justify-center p-5">
    <div class="ImgPFA">
      <img
        src="/Users/rubengrytten/Documents/Skole/VueAvonova/src/assets/PFA Dummy Profile Picture/DummyProfilePicturePFA.png"
        alt="DummyPFA"
        class="h-auto w-44"
      />
    </div>
    <div class="flex flex-col ml-8">
      <div class="ContactInfoContainer">
        <h4>{{ contact.name }}</h4>
        <p>Email: {{ contact.email }}</p>
        <p>Phone: {{ contact.phone }}</p>
      </div>
      <div class="mt-8 CallBtn"><ButtonPrimary :button-text="'Ring Meg'" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonPrimary from './buttons/ButtonPrimary.vue'

export default defineComponent({
  name: 'ContactCardPFA',
  data() {
    return {
      contact: {
        name: 'Navn Navnesen',
        email: 'navnnavnesen@example.com',
        phone: '123-456-7890'
      }
    }
  },
  components: { ButtonPrimary }
})
</script>

<style scoped>
/* Responsivitet */
@media screen and (max-width: 768px) {
  .flex.flex-col.items-center > * {
    margin-top: 0 !important;
    text-align: center;
  }
}
</style>
