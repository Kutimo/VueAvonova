<template>
  <div class="flex items-center justify-center">
    <div class="rounded-lg relative w-full max-w-lg overflow-hidden bg-white p-80 shadow-lg">
      <h2 class="mb-6 text-2xl font-bold">Legg inn din bestilling</h2>
      <p>Fyll ut feltene og klikk bestill</p>
      <form @submit.prevent="sendEmail" class="space-y-4">
        <div v-for="field in fields" :key="field.name" class="flex flex-col">
          <label :for="field.name" class="mb-2 font-body text-lg font-normal">
            {{ field.label }}
          </label>
          <input v-if="!field.component" v-bind="field.props" v-model="formData[field.name]"
            class="rounded-lg h-[50px] w-full border border-gray-300 px-4 text-base hover:border-2 hover:border-green-1100 focus-visible:border-2 focus-visible:outline-none active:border-2 active:border-green-1100" />
          <select v-else-if="field.component === 'select'" v-model="formData[field.name]"
            class="rounded-lg h-[50px] w-full border border-gray-300 text-base">
            <option v-for="option in field.props?.options || []" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
          <textarea v-else-if="field.component === 'textarea'" v-model="formData[field.name]"
            class="rounded-lg h-[100px] w-full border border-gray-300 px-4 text-base">
          </textarea>
          <input v-else-if="field.component === 'checkbox'" type="checkbox" v-model="formData[field.name]"
            class="h-5 w-5" />
          <VueDatePicker v-else-if="field.component === 'datepicker'" v-model="formData[field.name]" class="w-full" />

          <DropdownWithCheckboxes v-else-if="field.component === 'multicheckbox'" :options="field.props?.options"
            v-model="formData[field.name]" />
        </div>
        <div class="flex justify-end gap-10 pt-10">
          <ButtonSecondary buttonText="Avbryt" @click="closeModal" />
          <ButtonPrimary buttonText="Bestill nå!" @click="sendEmail" />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import { useToast } from 'vue-toastification'
import type { Ref, PropType } from 'vue'

import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'
import ButtonSecondary from '@/components/buttons/ButtonSecondary.vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import DropdownWithCheckboxes from '@/components/input/MultiCheckboxSelect.vue'
import '@vuepic/vue-datepicker/dist/main.css'

const emailSecureKey: string = import.meta.env.VITE_EMAIL_SECURE_KEY || ''

interface Field {
  name: string
  label: string
  component?: string
  props?: { [key: string]: any }
  listeners?: { [key: string]: Function }
}
interface FormData {
  [key: string]: string
}
export default {
  name: 'EmailForm',
  components: {
    ButtonPrimary,
    ButtonSecondary,
    VueDatePicker,
  },
  props: {
    fields: {
      type: Array as PropType<Field[]>,
      required: true,
    },
    closeModal: Function as PropType<() => void>,
  },
  emits: ['email-sent'],
  setup(props, { emit }) {
    function closeForm() { }
    const formData: Ref<FormData> = ref({} as FormData)
    const date = ref(null)

    watch(
      () => props.fields,
      (newFields) => {
        newFields?.forEach((field) => {
          formData.value[field.name] = formData.value[field.name] || ''
          field.props = field.props || {}
          field.listeners = field.listeners || {}
        })
      },
      { immediate: true },
    )

    const toast = useToast()
    const prepareEmail = (to: string, subject: string, body: string) => ({
      SecureToken: emailSecureKey,
      To: to,
      From: 'Anders-wroldsen@live.com',
      Subject: subject,
      Body: body,
    })
    const sendEmail = async () => {
      try {
        let emailBody = ''
        for (const key in formData.value) {
          emailBody += `${key}: ${formData.value[key]}<br>`
        }

        const mainEmail = prepareEmail(
          'Anders-wroldsen@live.com',
          'Fra avonova assist.',
          emailBody,
        )

        const confirmationEmail = prepareEmail(
          formData.value.email,
          'Vi har motatt din bestilling!',
          `Hei ${formData.value.name || 'Kjære kunde'},<br><br>Takk for din bestilling.<br> Den vil bli behandlet av en av våre kundeveiledere så fort som mulig.<br><br>Med vennlig hilsen,<br>avonova`,
        )

        const mainEmailResponse = await (window as any).Email.send(mainEmail)
        if (mainEmailResponse !== 'OK') throw new Error('Failed to send order email')

        const confirmationEmailResponse = await (window as any).Email.send(
          confirmationEmail,
        )
        if (confirmationEmailResponse !== 'OK')
          throw new Error('Failed to send confirmation email')

        toast.success(
          `Takk for bestillingen ${formData.value.name}! En bekreftelse er sendt til epost ${formData.value.email}`,
        )
        emit('email-sent')
        for (const key in formData.value) {
          formData.value[key] = ''
        }
      } catch (error) {
        console.error(error)
        toast.error('Noe gikk galt, prøv igjen senere eller kontakt administrator.')
      }
    }
    return { formData, date, sendEmail, closeForm }
  },
}
</script>
