<script lang="ts">
import { defineComponent, ref } from "vue";
import ProductCard from "@/components/cards/ProductCard.vue";
import EmailForm from "@/components/Layout/Forms/DynamicEmailForm.vue";


export default defineComponent({
  name: "ViewHome",
  components: {
    ProductCard,
    EmailForm,
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
    const formFields = ref([
      { name: 'name', label: 'Navn:', props: { type: 'text', id: 'name', required: true } },
      { name: 'email', label: 'Epost:', props: { type: 'email', id: 'email', required: true } },
      { name: 'message', label: 'Melding:', component: 'textarea', props: { id: 'message', required: true } },
      { name: 'preferred_contact', label: 'Foretrukket kontaktmetode:', component: 'select', props: { options: ['Epost', 'Telefon', 'På døra'] } },
      { name: 'newsletter', label: 'Meld deg på nyhetsbrev:', component: 'checkbox' },
      { name: 'date', label: 'Velg dato:', component: 'datepicker', props: {} }
    ]);
    return { cards, formFields };
  },
});
</script>

<template>
  <main class="m-10 h-screen">
    <EmailForm :fields="formFields" />
    <ProductCard v-for="card in cards" :key="card.id" :cardIcon="card.cardIcon" :cardHeader="card.cardHeader"
      :cardContent="card.cardContent" />
  </main>
</template>

<style scoped></style>
