<script setup lang="ts">
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'
import ButtonSecondary from '@/components/buttons/ButtonSecondary.vue'

const onReadMore = () => {
  console.log('Book appointment action')
}

const onBookAppointment = () => {
  console.log('Back')
}
</script>

<template>
  <div class="flex h-[300px] w-[50ch] overflow-hidden rounded-10 px-20 shadow-md">
    <div class="flex items-center justify-center w-full">
      <div>
        <h4 class="flex justify-center">Korrekt informasjon?</h4>
        <p class="mt-20 text-base">
          Er du sikker på at informasjonen du har lagt til er korrekt? Ved og klikke
          "Fullfør bestilling", bekrefter du samtidig at samtlige opplysninger stemmer.
        </p>
        <div class="flex justify-center w-full mt-48 gap-30">
          <ButtonSecondary buttonText="Tilbake" @click="onBookAppointment" />
          <ButtonPrimary buttonText="Fullfør bestilling" @click="onReadMore" />
        </div>
      </div>
    </div>
  </div>
</template>
