<script setup lang="ts">
import PageNavigation from "@/components/Layout/PageNavigation.vue";
import PageFooter from "./components/Layout/PageFooter.vue";
</script>

<template>
  <PageNavigation />
  <router-view></router-view>
  <PageFooter />
</template>
