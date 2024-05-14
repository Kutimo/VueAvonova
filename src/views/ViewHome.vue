<script lang="ts">
import { ref } from "vue";
import ProductCard from "@/components/cards/ProductCard.vue";
import EmailForm from "@/components/Layout/Forms/DynamicEmailForm.vue";
import ProductsTable from "@/components/Layout/Table/ProductsTable.vue";
import Modal from "@/components/Layout/Modal/DynamicModal.vue";
import ButtonPrimaryVue from "@/components/buttons/ButtonPrimary.vue";

export default {
  components: {
    Modal,
    ProductCard,
    ProductsTable,
    EmailForm,
    ButtonPrimaryVue,
  },
  setup() {
    const showModal = ref(false);
    function handleEmailSent() {
      showModal.value = false;
    }

    const products = ref([
      {
        id: 1,
        name: "Helsekontroll",
        description:
          "Regelmessig medisinsk sjekk for å overvåke ansattes helse.",
      },
      {
        id: 2,
        name: "Kiropraktor",
        description:
          "Spesialisert rygg- og nakkebehandling for å forebygge muskel- og skjelettplager.",
      },
      {
        id: 3,
        name: "Ergonomisk rådgivning",
        description:
          "Ekspertvurdering og justering av arbeidsplasser for optimal ergonomi.",
      },
      {
        id: 4,
        name: "Psykologtjenester",
        description:
          "Tilgjengelig psykologhjelp for å støtte mental helse på arbeidsplassen.",
      },
      {
        id: 5,
        name: "Vaksinasjoner",
        description:
          "Forebyggende vaksiner for å beskytte ansatte mot sesongbetingede sykdommer.",
      },
      {
        id: 6,
        name: "Fysioterapi",
        description:
          "Behandlinger og programmer for å gjenopprette og vedlikeholde fysisk funksjon.",
      },
      {
        id: 7,
        name: "Ernæringsrådgivning",
        description:
          "Profesjonell veiledning for å fremme sunne kostholdsvaner.",
      },
      {
        id: 8,
        name: "Helsefremmende workshops",
        description: "Workshops for å øke bevissthet og kunnskap om helse.",
      },
      {
        id: 9,
        name: "Stressmestringskurs",
        description:
          "Kurs for å lære teknikker for å håndtere og redusere stress.",
      },
      {
        id: 10,
        name: "Røykesluttkurs",
        description: "Hjelp og støtte for ansatte som ønsker å slutte å røyke.",
      },
      {
        id: 11,
        name: "Bedriftsmassasje",
        description:
          "Massasje på arbeidsplassen for å redusere stress og forebygge muskelplager.",
      },
      {
        id: 12,
        name: "Synstester",
        description:
          "Regelmessige synsundersøkelser for å sikre at ansattes syn ikke påvirker deres arbeid.",
      },
      {
        id: 13,
        name: "Hørselstester",
        description:
          "Tester for å oppdage og tilrettelegge for hørselsrelaterte utfordringer på arbeidsplassen.",
      },
      {
        id: 14,
        name: "Yogatimer",
        description:
          "Organiserte yogatimer for å fremme fysisk fleksibilitet og mental ro.",
      },
      {
        id: 15,
        name: "Mindfulness økter",
        description:
          "Veiledede økter for å fremme tilstedeværelse og mental klarhet.",
      },
      {
        id: 16,
        name: "Treningsabonnement",
        description: "Subsidierte eller gratis treningsabonnement for ansatte.",
      },
      {
        id: 17,
        name: "Sykkeltilskudd",
        description:
          "Tilskuddsordninger for ansatte som velger sykkel som transportmiddel til og fra arbeid.",
      },
      {
        id: 18,
        name: "Søvnhelseprogrammer",
        description: "Programmer designet for å forbedre kvaliteten på søvn.",
      },
      {
        id: 19,
        name: "Alkohol og rusforebyggende tiltak",
        description:
          "Forebyggende tiltak og ressurser for å håndtere alkohol- og rusmisbruk.",
      },
      {
        id: 20,
        name: "Digitale helseverktøy",
        description:
          "Teknologiske løsninger for å overvåke og fremme helse og velvære.",
      },
    ]);

    const productHeaders = [
      { key: "name", label: "Produkt" },
      { key: "description", label: "Beskrivelse" },
    ];

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
      {
        name: "name",
        label: "Navn:",
        props: { type: "text", id: "name", required: true },
      },
      {
        name: "email",
        label: "Epost:",
        props: { type: "email", id: "email", required: true },
      },
      {
        name: "message",
        label: "Melding:",
        component: "textarea",
        props: { id: "message", required: true },
      },
      {
        name: "preferred_contact",
        label: "Foretrukket kontaktmetode:",
        component: "select",
        props: { options: ["Epost", "Telefon", "På døra"] },
      },
      {
        name: "newsletter",
        label: "Meld deg på nyhetsbrev:",
        component: "checkbox",
      },
      { name: "date", label: "Velg dato:", component: "datepicker", props: {} },
    ]);
    return {
      cards,
      productHeaders,
      products,
      showModal,
      formFields,
      handleEmailSent,
    };
  },
};
</script>
<template>
  <main class="m-10 h-screen">
    <!-- Modal -->
    <ButtonPrimaryVue buttonText="Bestill nå!" @click="showModal = true" />
    <Modal
      :showModal="showModal"
      @update:showModal="(value) => (showModal = value)"
    >
      <EmailForm
        :fields="formFields"
        :closeModal="() => (showModal = false)"
        @email-sent="handleEmailSent"
      />
    </Modal>
    <ProductCard
      v-for="card in cards"
      :key="card.id"
      :cardIcon="card.cardIcon"
      :cardHeader="card.cardHeader"
      :cardContent="card.cardContent"
    />
  </main>
</template>
