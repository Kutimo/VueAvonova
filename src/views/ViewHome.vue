<script lang="ts">
import { computed, onMounted, ref } from 'vue'
import ProductCard from '@/components/cards/ProductCard.vue'
import EmailForm from '@/components/Layout/Forms/DynamicEmailForm.vue'
import ProductsTable from '@/components/Layout/Table/ProductsTable.vue'
import DynamicModal from '@/components/Layout/Modal/DynamicModal.vue'
import { supabase } from '@/lib/supabaseClient'
import { userNameStore } from '@/lib/store'
import { useToast } from 'vue-toastification'
import type { Employee } from '@/types/employeeType'
import type { Service } from '@/types/servicesType'

export default {
  components: {
    DynamicModal,
    ProductCard,
    ProductsTable,
    EmailForm,
  },

  setup() {
    const toast = useToast()
    const showModal = ref(false)
    const selectedCard = ref<{
      cardIcon: string
      cardHeader: string
      cardContent: string
    } | null>(null) // Legg til type
    const isEmailFormVisible = ref(false)
    const selectedCardHeader = ref('')

    function handleEmailSent() {
      showModal.value = false
    }

    const services = ref<Array<Service>>([])
    const includedServices = ref<Array<Service>>([])
    const excludedServices = ref<Array<Service>>([])
    const employees = ref<Array<Employee>>([])

    async function fetchServices() {
      try {
        const { data, error } = await supabase.from('services').select('*')
        if (error) {
          toast.error(`Feil ved henting av tjenester: ${error.message}`)
          return
        }
        if (data) {
          services.value = data
          sortServices()
        }
      } catch (error: any) {
        console.error(`feil:, ${error.message}`)
      }
    }

    async function fetchEmployees() {
      try {
        const { data, error } = await supabase
          .from('employee')
          .select('*')
          .filter(
            'company_name',
            'ilike',
            `%${userNameStore.state.user.user_metadata.firstName}%`,
          )
        if (error) {
          toast.error(`Feil ved henting av brukere: ${error.message}`)
          return
        }
        if (data) {
          employees.value = data
        }
      } catch (error: any) {
        toast.error(`feil:, ${error.message}`)
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

    const options = computed(() => employees.value)

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
        props: { options: ['Epost', 'Telefon'] },
      },
      {
        name: 'ansatte',
        label: 'Anstatte:',
        component: 'MultiCheckbox',
        props: { options },
      },
      { name: 'date', label: 'Velg dato:', component: 'datepicker', props: {} },
    ])

    onMounted(() => {
      fetchServices(), fetchEmployees()
    })
    const closeModal = () => {
      showModal.value = false
    }

    // Function to handle "Book Appointment" click
    const onBookAppointment = (cardHeader: string) => {
      selectedCardHeader.value = cardHeader
      isEmailFormVisible.value = true
      showModal.value = true
    }

    return {
      showModal,
      selectedCard,
      isEmailFormVisible,
      selectedCardHeader,
      closeModal,
      onBookAppointment,
      formFields,
      includedServices,
      excludedServices,
      handleEmailSent,
      productHeaders,
    }
  },
}
</script>

<template>
  <main class="m-10 h-fit bg-neutral-100">
    <div class="px-4 py-10 flex bg-white h-[200px] mt-40">
      <div class="md:w-[60ch] w-[45ch] ml-[80px]">
        <h4 class="">Våre tjenester</h4>
        <p class="text-lg">
          Oppdag vårt utvalg av tjenester som kan hjelpe deg med å nå dine mål. Bla
          gjennom våre tjenester nedenfor og finn den perfekte løsningen for dine behov.
        </p>
      </div>
    </div>
    <!-- Modal -->
    <div class="flex justify-center max-h-screen max-w-screen">
      <DynamicModal
        :showModal="showModal"
        @update:showModal="(value) => (showModal = value)"
      >
        <EmailForm
          v-if="isEmailFormVisible"
          :fields="formFields"
          :cardHeader="selectedCardHeader"
          :closeModal="() => (showModal = false)"
          @email-sent="handleEmailSent"
        />
        <!-- Info card -->
      </DynamicModal>
    </div>
    <!-- Product Cards -->
    <div class="flex justify-center mt-40">
      <div
        class="flex flex-wrap items-center justify-center laptop:gap-52 gap-20 -m-10 mb-28"
      >
        <div v-for="service in includedServices" :key="service.service_id" class="m-4">
          <ProductCard
            :cardIcon="`../../productCardIcons/${service.category}.svg`"
            :cardHeader="service.name"
            :cardContent="service.description"
            @book-appointment="onBookAppointment"
          />
        </div>
      </div>
    </div>
    <div class="px-4 py-10 mt-40 flex bg-white">
      <div class="mb-8 md:w-[60ch] ml-[80px] w-[45ch] h-[125px] mt-20">
        <h1 class="mb-4 text-4xl font-bold">Alle tjenester</h1>
        <p class="text-lg">
          Under kan du søke i katalogen over alle våre tjenester, samt bestille ønsket
          tjeneste
        </p>
      </div>
    </div>
    <ProductsTable :headers="productHeaders" :data="excludedServices" />
  </main>
</template>
