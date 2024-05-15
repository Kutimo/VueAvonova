<script lang="ts">
import { onMounted, ref } from 'vue'
import ProductCard from '@/components/cards/ProductCard.vue'
import EmailForm from '@/components/Layout/Forms/DynamicEmailForm.vue'
import ProductsTable from '@/components/Layout/Table/ProductsTable.vue'
import DynamicModal from '@/components/Layout/Modal/DynamicModal.vue'
import ButtonPrimaryVue from '@/components/buttons/ButtonPrimary.vue'
import { supabase } from '@/lib/supabaseClient'

interface Service {
  service_id: number
  name: string
  description: string
  category: string
  included: boolean
}

export default {
  components: {
    DynamicModal,
    ProductCard,
    ProductsTable,
    EmailForm,
    ButtonPrimaryVue,
  },

  setup() {
    const showModal = ref(false)
    function handleEmailSent() {
      showModal.value = false
    }
    const services = ref<Array<Service>>([])
    const includedServices = ref<Array<Service>>([])
    const excludedServices = ref<Array<Service>>([])
    async function fetchData() {
      try {
        const { data, error } = await supabase.from('services').select('*')
        if (error) {
          console.error('Error fetching services:', error.message)
          return
        }
        if (data) {
          services.value = data // Update services with the fetched data
          sortServices()
        }
      } catch (error: any) {
        console.error('Error fetching services:', error.message)
      }
    }

    function sortServices() {
      includedServices.value = services.value.filter((service) => service.included)
      excludedServices.value = services.value.filter((service) => !service.included)
    }

    const productHeaders = [
      { key: 'name', label: 'Produkt' },
      { key: 'description', label: 'Beskrivelse' },
    ]

    const formFields = ref([
      {
        name: 'name',
        label: 'Navn:',
        props: { type: 'text', id: 'name', required: true },
      },
      {
        name: 'email',
        label: 'Epost:',
        props: { type: 'email', id: 'email', required: true },
      },
      {
        name: 'message',
        label: 'Melding:',
        component: 'textarea',
        props: { id: 'message', required: true },
      },
      {
        name: 'preferred_contact',
        label: 'Foretrukket kontaktmetode:',
        component: 'select',
        props: { options: ['Epost', 'Telefon', 'På døra'] },
      },
      {
        name: 'newsletter',
        label: 'Meld deg på nyhetsbrev:',
        component: 'checkbox',
      },
      {
        name: 'ansatte',
        label: 'Anstatte:',
        component: 'MultiCheckbox',
        props: { options: [1, 2, 3] },
      },
      { name: 'date', label: 'Velg dato:', component: 'datepicker', props: {} },
    ])

    onMounted(() => {
      fetchData()
    })

    const onReadMore = () => {
      console.log('Read more action')
    }

    const onBookAppointment = () => {
      showModal.value = true
    }

    return {
      productHeaders,
      showModal,
      formFields,
      handleEmailSent,
      includedServices,
      excludedServices,
      onReadMore,
      onBookAppointment,
    }
  },
}
</script>

<template>
  <main class="m-10 h-screen">
    <div class="mx-auto px-4 py-10 mt-40 mb-20">
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-4">Våre Tjenester</h1>
        <p class="text-center text-lg">Oppdag vårt utvalg av tjenester som kan hjelpe deg med å nå dine mål. Bla gjennom
          våre tjenester nedenfor og finn den perfekte løsningen for dine behov.</p>
      </div>
    </div>
    <!-- Modal -->
    <div class=" max-h-screen max-w-screen flex justify-center">
      <DynamicModal :showModal="showModal" @update:showModal="(value) => (showModal = value)">
        <EmailForm :fields="formFields" :closeModal="() => (showModal = false)" @email-sent="handleEmailSent" />
      </DynamicModal>
    </div>
    <!-- Product Cards -->
    <div class="flex justify-center">
      <div class="flex flex-wrap justify-center items-center -m-10 mb-28">
        <div v-for="service in includedServices" :key="service.service_id" class="m-4">
          <ProductCard :cardIcon="`../../public/productCardIcons/${service.category}.svg`" :cardHeader="service.name"
            :cardContent="service.description" @read-more="onReadMore" @book-appointment="onBookAppointment" />
        </div>
      </div>
    </div>
    <div class="mx-auto px-4 py-10">
      <div class="mb-8 text-center">
        <h1 class="text-4xl font-bold mb-4">Alle tjenester</h1>
        <p class="text-lg">Her er alle våre tjenester, søk i tjenestene og bestill ønsket tjeneste</p>
      </div>
    </div>
    <ProductsTable :headers="productHeaders" :data="excludedServices" />
  </main>
</template>

