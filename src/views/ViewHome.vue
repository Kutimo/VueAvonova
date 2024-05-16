<script lang="ts">
import { onMounted, ref } from 'vue'
import ProductCard from '@/components/cards/ProductCard.vue'
import EmailForm from '@/components/Layout/Forms/DynamicEmailForm.vue'
import ProductsTable from '@/components/Layout/Table/ProductsTable.vue'
import DynamicModal from '@/components/Layout/Modal/DynamicModal.vue'
import { supabase } from '@/lib/supabaseClient'
import { userNameStore } from '@/lib/store'
import { useToast } from 'vue-toastification'

interface Service {
  service_id: number
  name: string
  description: string
  category: string
  included: boolean
}

interface Employee {
  employee_id: number
  birthdate: string
  company_name: string
  email: string
  first_name: string
  gender: string
  last_name: string
}

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
          console.log(data)
          employees.value = data
          console.log(employees.value)
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
      fetchServices(), fetchEmployees()
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
      toast,
      onReadMore,
      onBookAppointment,
    }
  },
}
</script>

<template>
  <main class="m-10 h-fit bg-neutral-100">
    <div class="px-4 py-10 mx-auto mb-20">
      <div class="mb-8">
        <h1 class="mb-4 text-4xl font-bold">Våre Tjenester</h1>
        <p class="text-lg text-center">
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
          :fields="formFields"
          :closeModal="() => (showModal = false)"
          @email-sent="handleEmailSent"
        />
      </DynamicModal>
    </div>
    <!-- Product Cards -->
    <div class="flex justify-center">
      <div class="flex flex-wrap items-center justify-center -m-10 mb-28">
        <div v-for="service in includedServices" :key="service.service_id" class="m-4">
          <ProductCard
            :cardIcon="`../../public/productCardIcons/${service.category}.svg`"
            :cardHeader="service.name"
            :cardContent="service.description"
            @read-more="onReadMore"
            @book-appointment="onBookAppointment"
          />
        </div>
      </div>
    </div>
    <div class="px-4 py-10 mx-auto">
      <div class="mb-8 text-center">
        <h1 class="mb-4 text-4xl font-bold">Alle tjenester</h1>
        <p class="text-lg">
          Her er alle våre tjenester, søk i tjenestene og bestill ønsket tjeneste
        </p>
      </div>
    </div>
    <ProductsTable :headers="productHeaders" :data="excludedServices" />
  </main>
</template>
