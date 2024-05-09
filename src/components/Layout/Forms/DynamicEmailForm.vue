<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">

    <div class="relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg p-80">
      <h2 class="text-2xl font-bold mb-6">Contact Form</h2>
      <form @submit.prevent="sendEmail" class="space-y-4">
        <div v-for="field in fields" :key="field.name" class="flex flex-col">
          <label :for="field.name" class="font-body text-lg font-normal mb-2">
            {{ field.label }}
          </label>
          <input v-if="!field.component" v-bind="field.props" v-model="formData[field.name]"
            class="active:border-green-1100 h-[50px] w-full rounded-lg border border-gray-300 px-4 text-base hover:border-2 hover:border-green-1100 focus-visible:border-2 focus-visible:outline-none active:border-2" />
          <select v-else-if="field.component === 'select'" v-model="formData[field.name]"
            class="h-[50px] w-full rounded-lg border border-gray-300 text-base">
            <option v-for="option in (field.props?.options || [])" :value="option">{{ option }}</option>
          </select>
          <input v-else-if="field.component === 'checkbox'" type="checkbox" v-model="formData[field.name]"
            class="h-5 w-5" />
          <input v-else v-bind="field.props" v-model="formData[field.name]"
            class="active:border-green-1100 h-[50px] w-full rounded-lg border border-gray-300 px-4 text-base hover:border-2 hover:border-green-1100 focus-visible:border-2 focus-visible:outline-none active:border-2" />
        </div>
        <div class="flex justify-end gap-4">
          <ButtonSecondary buttonText="Avbryt" /> <!-- Add @click handler to close modal -->
          <ButtonPrimary buttonText="Send Epost" @click="sendEmail" />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useToast } from "vue-toastification";
import type { Ref, PropType } from 'vue';
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue';
import ButtonSecondary from '@/components/buttons/ButtonSecondary.vue';

const emailSecureKey: string = import.meta.env.VITE_EMAIL_SECURE_KEY || "";

interface Field {
  name: string;
  label: string;
  component?: string;
  props?: { [key: string]: any };
  listeners?: { [key: string]: Function };
}


interface FormData {
  [key: string]: string;
}

export default defineComponent({
  name: "EmailForm",
  components: {
    ButtonPrimary,
    ButtonSecondary,
  },
  props: {
    fields: {
      type: Array as PropType<Field[]>,
      required: true
    }
  },
  setup(props) {
    const formData: Ref<FormData> = ref({} as FormData);

    watch(() => props.fields, (newFields) => {
      console.log('Oppdaterer formData basert på fields:', newFields);
      newFields?.forEach(field => {
        formData.value[field.name] = formData.value[field.name] || "";
        /*         console.log(`Sett ${field.name} til ${formData.value[field.name]}`); */
        field.props = field.props || {};
        field.listeners = field.listeners || {};
      });
    }, { immediate: true });

    const toast = useToast();

    const sendEmail = async () => {
      try {
        let emailBody = '';
        for (const key in formData.value) {
          emailBody += `${key}: ${formData.value[key]}<br>`;
        }
        /* Endre TO og From??*/
        const emailResponse = await (window as any).Email.send({
          SecureToken: emailSecureKey,
          To: "Anders-wroldsen@live.com",
          From: formData.value.email || "your-default-email@example.com",
          Subject: "Fra avonova assist.",
          Body: emailBody,
        });

        const confirmationEmailResponse = await (window as any).Email.send({
          SecureToken: emailSecureKey,
          To: formData.value.email,
          From: "Anders-wroldsen@live.com",
          Subject: "Vi har motatt din bestilling!",
          Body: `Hei ${formData.value.name || ''},<br><br>Takk for din bestilling.<br> Den vil bli behandlet av en av våre kundeveiledere så fort som mulig.<br><br>Med vennelig hilsen,<br>avonova`,
        });

        if (emailResponse === "OK" && confirmationEmailResponse === "OK") {
          toast.success(`Takk for bestillingen ${formData.value.name}! En bekreftelse er sendt til epost ${formData.value.email}`);
          // Nullstill alle felt i formData
          for (const key in formData.value) {
            formData.value[key] = "";
          }
        } else {
          throw new Error("Failed to send emails");
        }
      } catch (error) {
        console.error(error);
        toast.error("Noe gikk galt, prøv igjen senere.");
      }
    };

    return { formData, sendEmail };
  },
});
</script>
