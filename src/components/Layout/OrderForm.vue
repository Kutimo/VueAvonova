<template>
  <div class="p-4">
    <h2 class="mb-4 text-xl font-bold">Bestill bedriftshelse-tjenester</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <TextInput label="Bedriftsnavn" v-model="companyName" />
      </div>
      <div class="mb-4">
        <TextInput label="Kontaktperson" v-model="contactPerson" />
      </div>
      <div class="mb-4">
        <EmailInput label="E-postadresse" v-model="email" />
      </div>
      <div class="mb-4">
        <TextInput label="Telefonnummer" v-model="phoneNumber" />
      </div>
      <div class="mb-4">
        <TextareaField label="Adresse" v-model="address" />
      </div>
      <div class="mb-4">
        <TextEncoderStreamInput label="Antall ansatte" v-model="employeeCount" type="number" />
      </div>
      <div class="mb-4">
        <Datepicker label="Ønsket tidspunkt for tjenesteleveranse" v-model="deliveryDate" />
      </div>
      <div class="mb-4">
        <TextareaField label="Spesielle behov eller forespørsler" v-model="specialRequests" />
      </div>
      <div class="mb-4">
        <TextInput label="Budsjett" v-model="budget" />
      </div>
      <div class="mb-4">
        <TextInput label="Betalingsinformasjon" v-model="paymentInfo" />
      </div>
      <div class="mb-4">
        <CheckboxField label="Jeg har lest og godtar vilkårene" v-model="termsAccepted" />
      </div>
      <button type="submit" class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        Send bestilling
      </button>
    </form>
  </div>
</template>

<script>
import TextInput from './components/input/TextInput.vue'
import TextareaField from './components/TextareaField.vue'
import EmailInput from './components//Input/EmailInput.vue'
import Datepicker from './components//Layout/Datepicker.vue'
import CheckboxField from './components/CheckboxField.vue'

export default {
  components: {
    TextInput,
    TextareaField,
    EmailInput,
    Datepicker,
    CheckboxField,
  },
  data() {
    return {
      companyName: '',
      contactPerson: '',
      email: '',
      phoneNumber: '',
      address: '',
      employeeCount: '',
      deliveryDate: '',
      specialRequests: '',
      budget: '',
      paymentInfo: '',
      termsAccepted: false,
    }
  },
  methods: {
    submitForm() {
      // Implementer logikk for å sende skjemadata til serv eren
    },
  },
}
</script>
