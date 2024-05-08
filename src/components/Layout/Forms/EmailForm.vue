<template>
  <div>
    <h2>Contact Form</h2>
    <form @submit.prevent="sendEmail">
      <div v-for="field in fields" :key="field.name">
        <label :for="field.name">{{ field.label }}</label>
        <input v-if="!field.component" v-bind="field.props" v-model="formData[field.name]" />
        <select v-else-if="field.component === 'select'" v-model="formData[field.name]">
          <option v-for="option in (field.props?.options || [])" :value="option">{{ option }}</option>
        </select>
        <input v-else-if="field.component === 'checkbox'" type="checkbox" v-model="formData[field.name]" />
      </div>
      <button type="submit">Send Epost</button>
    </form>
  </div>
</template>

<!-- Sjekke hvorfor ikke tekst inputen kommer med nå? -->

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useToast } from "vue-toastification";
import type { Ref, PropType } from 'vue';

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
  props: {
    fields: {
      type: Array as PropType<Field[]>,
      required: true
    }
  },
  setup(props) {
    const formData: Ref<FormData> = ref({} as FormData);

    watch(() => props.fields, (newFields) => {
      newFields?.forEach(field => {
        formData.value[field.name] = formData.value[field.name] || "";
        field.props = field.props || {};  // Sørge for at props alltid er et objekt
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
          SecureToken: "43790b23-27f6-4cde-abd5-4cdf2b2c75e7",
          To: "Anders-wroldsen@live.com",
          From: formData.value.email || "your-default-email@example.com",
          Subject: "Fra avonova assist.",
          Body: emailBody,
        });

        const confirmationEmailResponse = await (window as any).Email.send({
          SecureToken: "43790b23-27f6-4cde-abd5-4cdf2b2c75e7",
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
