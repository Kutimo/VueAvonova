<script setup lang="ts">
import Navigation from "@/components/Layout/Navigation.vue";
import PageFooter from "./components/Layout/PageFooter.vue";
</script>

<template>
  <Navigation />
  <router-view></router-view>
  <PageFooter />
</template>
