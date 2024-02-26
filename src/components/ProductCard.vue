<script setup lang="ts">
import ButtonPrimary from "@/components/buttons/ButtonPrimary.vue";

const cardProps = defineProps({
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
    class="rounded-4 m-10 flex w-[250px] flex-col items-center overflow-hidden bg-green-600 p-4 shadow-md"
  >
    <img
      v-if="cardIcon"
      :src="cardIcon"
      class="p-4"
      alt="Card Icon"
      height="75"
      width="75"
    />
    <h4 v-if="cardHeader" class="p-4 text-center">{{ cardHeader }}</h4>
    <p class="body-md px-20 text-center" v-html="cardContent"></p>
    <div class="flex w-full justify-around p-4">
      <ButtonPrimary buttonText="Les mer" @click="onReadMore" />
      <ButtonPrimary buttonText="Bestill" @click="onBookAppointment" />
    </div>
  </div>
</template>

<style scoped></style>
