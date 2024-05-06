<script>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import EmailInput from "@/components/input/EmailInput.vue";

export default {
  name: "EmailForm",
  components: {
    EmailInput,
  },
  setup() {
    const formData = ref({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    const toast = useToast();

    const sendEmail = async () => {
      if (!formData.value.email) {
        toast.error("Vennligst fyll ut epostfeltet");
        return;
      }
      try {
        await window.Email.send({
          SecureToken: "43790b23-27f6-4cde-abd5-4cdf2b2c75e7",
          To: "anders-wroldsen@live.com",
          From: formData.value.email,
          Subject: "Epost fra Avonova assist bedrifthelsetjenester",
          Body: `Name: ${formData.value.name}<br>Email: ${formData.value.email}<br>Phone: ${formData.value.phone}<br>Message: ${formData.value.message}`,
        });
        toast.success("Eposten ble sendt");
      } catch (error) {
        toast.error("Eposten ble ikke sendt, kontakt administrator");
      }
      formData.value.name = "";
      formData.value.email = "";
      formData.value.phone = "";
      formData.value.message = "";
    };

    const handleEmailSubmission = (email) => {
      formData.value.email = email;
    };

    return { formData, sendEmail, handleEmailSubmission };
  },
};
</script>

<template>
  <div>
    <h2>Contact Form</h2>
    <form @submit.prevent="sendEmail">
      <div>
        <label for="name">Navn:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div>
        <label for="email">Epost:</label>
        <EmailInput @emailSubmitted="handleEmailSubmission" />
      </div>
      <div>
        <label for="phone">Tlf Nummer:</label>
        <input type="tel" id="phone" v-model="formData.phone" required />
      </div>
      <div>
        <label for="message">Din melding:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit">Send Epost</button>
    </form>
  </div>
</template>
