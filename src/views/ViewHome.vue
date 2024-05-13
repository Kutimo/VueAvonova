<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import ProductCard from "@/components/cards/ProductCard.vue";
import { supabase } from "@/lib/supabaseClient";

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

    const employees = ref();

    const fetchEmployees = async () => {
      try {
        let { data: Employee, error } = await supabase
          .from("Employee")
          .select("*");
        console.log(Employee);
        if (error) {
          console.error(error.message);
          return [];
        }

        return Employee;
      } catch (error: any) {
        console.error("Error fetching users:", error.message);
        return [];
      }
    };

    onMounted(fetchEmployees);

    return { cards, employees };
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
