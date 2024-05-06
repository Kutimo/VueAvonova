<script setup lang="ts">
import ButtonPrimary from "@/components/buttons/ButtonPrimary.vue";

const { cardIcon, cardHeader, cardContent } = defineProps({
  cardIcon: String,
  cardHeader: String,
  cardContent: String,
});

const onReadMore = () => {
  console.log("Read more action");
};

const onBookAppointment = () => {
  console.log("Book appointment action");
};
</script>

<template>
  <div
    class="m-10 flex h-[397px] w-[250px] flex-col overflow-hidden rounded-4 bg-green-200 p-4 shadow-md"
  >
    <div class="flex items-center justify-center">
      <img
        v-if="cardIcon"
        :src="cardIcon"
        class="p-4"
        alt="Card Icon"
        height="119"
        width="138"
      />
    </div>
    <h4 v-if="cardHeader" class="p-4 text-left text-xl">{{ cardHeader }}</h4>
    <p class="p-4 text-sm" v-html="cardContent"></p>
    <div class="flex w-full justify-around p-4">
      <ButtonPrimary buttonText="Les mer" @click="onReadMore" />
      <ButtonPrimary buttonText="Bestill" @click="onBookAppointment" />
    </div>
  </div>
</template>
