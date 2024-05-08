<template>
  <div>
    <h2>Contact Form</h2>
    <form @submit.prevent="sendEmail">
      <div v-for="field in fields" :key="field.name">
        <label :for="field.name">{{ field.label }}</label>
        <input v-bind="field.props" v-model="formData[field.name]" v-on="field.listeners" />
      </div>
      <button type="submit">Send Epost</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useToast } from "vue-toastification";
import type { Ref, PropType } from 'vue';

interface Field {
  name: string;
  label: string;
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
        field.listeners = field.listeners || {};
      });
    }, { immediate: true });

    const toast = useToast();

    const sendEmail = async () => {
      try {
        const emailResponse = await (window as any).Email.send({
          SecureToken: "43790b23-27f6-4cde-abd5-4cdf2b2c75e7",
          To: "Anders-wroldsen@live.com",
          From: formData.value.email,
          Subject: "Fra avonova assist.",
          Body: `Navn: ${formData.value.name}<br>Epost: ${formData.value.email}<br>Tlf nr: ${formData.value.phone}<br>Melding: ${formData.value.message}`,
        });
        const confirmationEmailResponse = await (window as any).Email.send({
          SecureToken: "43790b23-27f6-4cde-abd5-4cdf2b2c75e7",
          To: formData.value.email,
          From: "Anders-wroldsen@live.com",
          Subject: "Vi har motatt din bestilling!",
          Body: `Hei ${formData.value.name},<br><br>Takk for din bestilling.<br> Den vil bli behandlet av en av våre kundeveiledere så fort som mulig.<br><br>Med vennelig hilsen,<br>avonova`,
        });

        if (emailResponse === "OK" && confirmationEmailResponse === "OK") {
          toast.success(`Takk for bestillingen ${formData.value.name}! En bekreftelse er sendt til epost ${formData.value.email}`);
          formData.value.name = "";
          formData.value.email = "";
          formData.value.phone = "";
          formData.value.message = "";
        } else {
          throw new Error("Failed to send email" + emailResponse);
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
