<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import ButtonSecondary from '../buttons/ButtonSecondary.vue'

const props = defineProps({
  cardIcon: String,
  cardHeader: String,
  cardContent: String,
})

const emit = defineEmits(['book-appointment'])

const onBookAppointment = () => {
  emit('book-appointment', props.cardHeader)
}
</script>

<template>
  <div
    class="m-10 h-[150px] laptop:w-[500px] w-[400px] p-12 flex justify-center bg-white p- overflow-hidden rounded-10 shadow-md transform transition-transform duration-300 hover:scale-105"
  >
    <div class="flex flex-col justify-between w-full">
      <div class="flex flex-row justify-between px-8 py-4">
        <div>
          <h4 v-if="cardHeader" class="text-xl text-left">{{ cardHeader }}</h4>
          <p class="text-sm" v-html="cardContent"></p>
        </div>
        <div class="flex items-center justify-center ml-auto">
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
      <div class="flex justify-start w-full gap-10 p-10">
        <ButtonSecondary buttonText="Bestill" @click="onBookAppointment" />
      </div>
    </div>
  </div>
</template>
