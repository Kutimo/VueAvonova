<template>
  <div class="flex justify-center p-5">
    <div class="ImgPFA">
      <img
        src="/Users/rubengrytten/Documents/Skole/VueAvonova/src/assets/PFA Dummy Profile Picture/DummyProfilePicturePFA.png"
        alt="DummyPFA"
        class="w-32 h-32"
      />
    </div>
    <div class="flex flex-col ml-8">
      <div class="ContactInfoContainer">
        <h4>{{ contact.name }}</h4>
        <p>Email: {{ contact.email }}</p>
        <p>Phone: {{ contact.phone }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
  }
})
</script>
