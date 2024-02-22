<script setup lang="ts">
import Nav from '@/components/Layout/Nav.vue'
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'
import ButtonSecondary from './buttons/ButtonSecondary.vue'
import Input from './input/Input.vue'
import ContactCardPFA from './ContactCardPFA.vue'
</script>

<template>
  <Nav />
  <div class="greetings">
    <h1>h1 Lorem ipsum dolor sit amet.</h1>
    <h2>h2 Lorem ipsum dolor sit amet.</h2>
    <h3>h3 Lorem ipsum dolor sit amet.</h3>
    <h4>h4 Lorem ipsum dolor sit.</h4>
    <p class="title-2xl">title 2xl</p>
    <p class="title-xl">title xl</p>
    <p class="title-lg">title lg</p>
    <p class="title-md">title md</p>
    <p class="body-xl">body xl Lorem ipsum dolor sit amet.</p>
    <p class="body-lg">body lg Lorem ipsum dolor sit amet.</p>
    <p class="body-md">body md Lorem ipsum dolor sit amet.</p>
  </div>
  <div class="buttons">
    <ButtonPrimary button-text="Buy now" />
    <ButtonSecondary button-text="secondary" />
  </div>
  <div>
    <p>inputs:</p>
    <Input label="Text" name="lastName" descriptive-text="hello" error error-text="test" />
    <Input label="with error" name="lastName" descriptive-text="hello" error error-text="test" />
    <Input label="with question icon" name="lastName" descriptive-text="hello" icon />
  </div>
  <div class="PFA">
    <ContactCardPFA />
  </div>
</template>

<style scoped>
.greetings {
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 15px;
}

.buttons {
  display: flex;
  margin: 10px;
  gap: 15px;
}

.PFA {
  display: flex;
  margin: 10px;
  gap: 15px;
}
</style>
