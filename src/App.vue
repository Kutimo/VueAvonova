<script setup lang="ts">
import Navigation from "@/components/Layout/Navigation.vue";
import Footer from "./components/Layout/Footer.vue";
</script>

<template>
  <Navigation />
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
