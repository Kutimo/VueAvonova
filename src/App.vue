<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProductCard from '@/components/ProductCard.vue';

const hospitalIcon = ref('');

onMounted(async () => {
  const iconModule = await import('@/assets/productCardIcons/Icons/hospital.png');
  hospitalIcon.value = iconModule.default;
});
</script>

<template>

  <main>
    <ProductCard 
      :cardIcon="hospitalIcon"
      cardHeader="Helsetilbud"
      cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed convallis porttitor pellentesque. Donec consectetur felis at mattis luctus."
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
