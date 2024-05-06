<script setup lang="ts">
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'
import ButtonSecondary from '../buttons/ButtonSecondary.vue'

const { cardIcon, cardHeader, cardContent } = defineProps({
  cardIcon: String,
  cardHeader: String,
  cardContent: String,
})

const onReadMore = () => {
  console.log('Read more action')
}

const onBookAppointment = () => {
  console.log('Book appointment action')
}
</script>

<template>
  <div
    class="m-10 h-[225px] w-[643px] flex justify-center overflow-hidden rounded-10 bg-neutral-100 shadow-md"
  >
    <div class="flex justify-between px-48 py-[38px] w-full">
      <div class="flex-col">
        <h4 v-if="cardHeader" class="p-4 text-xl text-left">{{ cardHeader }}</h4>
        <p class="p-4 text-sm" v-html="cardContent"></p>
        <div class="flex justify-start w-full gap-10 p-4 mt-40">
          <ButtonPrimary buttonText="Les mer" @click="onReadMore" />
          <ButtonSecondary buttonText="Bestill" @click="onBookAppointment" />
        </div>
      </div>
      <div class="flex justify-center">
        <img
          v-if="cardIcon"
          :src="cardIcon"
          class="p-4"
          alt="Card Icon"
          height="64"
          width="64"
        />
      </div>
    </div>
  </div>
</template>
