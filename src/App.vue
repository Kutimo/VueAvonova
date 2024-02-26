<script setup lang="ts">
import { ref } from "vue";
import Navigation from "@/components/Layout/Navigation.vue";
import ProductCard from "@/components/ProductCard.vue";
import HelloWorld from "./components/HelloWorld.vue";

//Måtte legge productCardIcons i public mappen for at det skulle funke
//Se på måte for og importere ikonene fra assets mappen (@/assets/productCardIcons)
//Burde denne legges i en egen mappe, så man bygger kortet og eksporterer det til App.vue?
const cards = ref([
  {
    id: 1,
    cardIcon: "/public/productCardIcons/hospital.svg",
    cardHeader: "Helsesjekk",
    cardContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    cardIcon: "/public/productCardIcons/notepad.svg",
    cardHeader: "Helseattest",
    cardContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]);
</script>

<template>
  <Navigation />
  <main>
    <ProductCard
      v-for="card in cards"
      :key="card.id"
      :cardIcon="card.cardIcon"
      :cardHeader="card.cardHeader"
      :cardContent="card.cardContent"
    />
  </main>
  <section>
    <HelloWorld />
  </section>
</template>

<style scoped></style>
