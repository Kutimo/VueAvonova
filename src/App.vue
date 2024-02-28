<script setup lang="ts">
import Navigation from "@/components/Layout/Navigation.vue";
import Footer from "./components/Layout/Footer.vue";
import ProductCard from "@/components/ProductCard.vue";
import HelloWorld from "./components/HelloWorld.vue";

//Måtte legge productCardIcons i public mappen for at det skulle funke
//Se på måte for og importere ikonene fra assets mappen (@/assets/productCardIcons)
//Burde denne legges i en egen mappe, så man bygger kortet og eksporterer det til App.vue?
</script>

<template>
  <Navigation />
  <router-view></router-view>
  <section>
    <HelloWorld />
  </section>
  <Footer />
</template>

<style scoped></style>
