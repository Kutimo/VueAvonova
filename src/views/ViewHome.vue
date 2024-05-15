<script lang="ts">
import { onMounted, ref } from 'vue'
import ProductCard from '@/components/cards/ProductCard.vue'
import EmailForm from '@/components/Layout/Forms/DynamicEmailForm.vue'
import ProductsTable from '@/components/Layout/Table/ProductsTable.vue'
import DynamicModal from '@/components/Layout/Modal/DynamicModal.vue'
import ButtonPrimaryVue from '@/components/buttons/ButtonPrimary.vue'
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
    ButtonPrimaryVue,
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
        props: { options: [1, 2] },
      },
      { name: 'date', label: 'Velg dato:', component: 'datepicker', props: {} },
    ])

    onMounted(() => {
      fetchServices(), fetchEmployees()
    })

    return {
      productHeaders,
      showModal,
      formFields,
      handleEmailSent,
      includedServices,
      excludedServices,
      employees,
      toast,
    }
  },
}
</script>
<template>
  <main class="m-10 h-screen">
    <!-- Modal -->
    <ButtonPrimaryVue buttonText="Bestill nå!" @click="showModal = true" />
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
    <ProductCard
      v-for="service in includedServices"
      :key="service.service_id"
      :cardIcon="`../../productCardIcons/${service.category}.svg`"
      :cardHeader="service.name"
      :cardContent="service.description"
    />
    <ProductsTable :headers="productHeaders" :data="excludedServices" />
  </main>
</template>
