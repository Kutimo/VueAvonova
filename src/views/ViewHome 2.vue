<script lang="ts">
import { defineComponent, ref } from "vue";
import ProductCard from "@/components/cards/ProductCard.vue";

export default defineComponent({
  name: "ViewHome",
  components: {
    ProductCard,
  },

  setup() {
    const cards = ref([
      {
        id: 1,
        cardIcon: "productCardIcons/hospital.svg",
        cardHeader: "Helsesjekk",
        cardContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        cardIcon: "productCardIcons/notepad.svg",
        cardHeader: "Helseattest",
        cardContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ]);

    return { cards };
  },
});
</script>

<template>
  <main class="m-10 h-screen">
    <ProductCard
      v-for="card in cards"
      :key="card.id"
      :cardIcon="card.cardIcon"
      :cardHeader="card.cardHeader"
      :cardContent="card.cardContent"
    />
  </main>
</template>

<style scoped></style>
