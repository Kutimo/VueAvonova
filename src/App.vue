<script setup lang="ts">
import { ref } from 'vue';
import ProductCard from '@/components/ProductCard.vue';


//Måtte legge productCardIcons i public mappen for at det skulle funke
//Se på måte for og importere ikonene fra assets mappen (@/assets/productCardIcons)
//Burde denne legges i en egen mappe, så man bygger kortet og eksporterer det til App.vue?
const cards = ref([
  {
    id: 1,
    cardIcon: ('./public/productCardIcons/hospital.svg'),
    cardHeader: 'Helsesjekk',
    cardContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    cardIcon: ('./public/productCardIcons/notepad.svg'),
    cardHeader: 'Helseattest',
    cardContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }
]);

</script>

<template>
  <main>
    <ProductCard 
      v-for="card in cards"
      :key="card.id"
      :cardIcon="card.cardIcon"
      :cardHeader="card.cardHeader"
      :cardContent="card.cardContent"
    />
  </main>
</template>



<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
