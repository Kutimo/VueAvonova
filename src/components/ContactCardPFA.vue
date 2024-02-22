<template>
  <div class="ContactCardPFA">
    <div class="ImgPFA">
      <img
        src="/Users/rubengrytten/Documents/Skole/VueAvonova/src/assets/PFA Dummy Profile Picture/DummyProfilePicturePFA.png"
        alt="DummyPFA"
      />
    </div>
    <div class="ContactAndCallBtnContainer">
      <div class="ContactInfoContainer">
        <h4>{{ contact.name }}</h4>
        <p>Email: {{ contact.email }}</p>
        <p>Phone: {{ contact.phone }}</p>
      </div>
      <div class="CallBtn"><ButtonPrimary :button-text="'Ring Meg'" /></div>
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
.ContactCardPFA {
  display: flex;
  justify-content: center;
  padding: 20px;
}

img {
  width: 175px;
  height: 200px;
}

.ContactCardPFA h4 {
  margin-top: 30px;
  margin-bottom: 10px;
}

h4,
p {
  padding-left: 30px;
}

/* Responsivitet */
@media screen and (max-width: 768px) {
  .ContactCardPFA {
    flex-direction: column;
    align-items: center;
  }

  .ContactCardPFA h4 {
    margin-top: 0%;
  }
}
.ContactAndCallBtnContainer {
  display: flex;
  flex-direction: column;
}

.CallBtn {
  margin-top: 30px;
  text-align: center;
}
</style>
