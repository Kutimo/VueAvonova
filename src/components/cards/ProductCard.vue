<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'
import ButtonSecondary from '../buttons/ButtonSecondary.vue'

const props = defineProps({
  cardIcon: String,
  cardHeader: String,
  cardContent: String,
})

const emit = defineEmits(['read-more', 'book-appointment'])

const onReadMore = () => {
  emit('read-more')
}

const onBookAppointment = () => {
  emit('book-appointment', props.cardHeader)
  console.log(props.cardHeader)
}
</script>

<template>
  <div
    class="m-10 h-[150px] w-[500px] p-12 flex justify-center bg-white p- overflow-hidden rounded-10 shadow-md transform transition-transform duration-300 hover:scale-105">
    <div class="flex flex-col justify-between w-full">
      <div class="flex flex-row justify-between px-8 py-4">
        <div>
          <h4 v-if="cardHeader" class="text-xl text-left">{{ cardHeader }}</h4>
          <p class="text-sm" v-html="cardContent"></p>
        </div>
        <div class="flex items-center justify-center ml-auto">
          <img v-if="cardIcon" :src="cardIcon" class="p-4" alt="Card Icon" height="64" width="64" />
        </div>
      </div>
      <div class="flex justify-start w-full gap-10 p-10">
        <ButtonPrimary buttonText="Les mer" @click="onReadMore" />
        <ButtonSecondary buttonText="Bestill" @click="onBookAppointment" />
      </div>
    </div>
  </div>
</template>
