<script lang="ts">
import { defineComponent, ref } from "vue";

interface EmailFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default defineComponent({
  name: "EmailForm",
  data(): EmailFormData {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      (window as any).Email.send({
        SecureToken: "43790b23-27f6-4cde-abd5-4cdf2b2c75e7",
        To: "anders-wroldsen@live.com",
        From: this.email,
        Subject: "Epost fra Avonova assist bedrifthelsetjenester",
        Body: `Name: ${this.name}<br>Email: ${this.email}<br>Phone: ${this.phone}<br>Message: ${this.message}`,
      }).then((message: string) => alert(message));

      // Reset the form fields after sending the email
      this.name = "";
      this.email = "";
      this.phone = "";
      this.message = "";
    },
  },
});
</script>

<template>
  <div>
    <h2>Contact Form</h2>
    <form @submit.prevent="sendEmail">
      <div>
        <label for="name">Navn:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="email">Epost:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="phone">Tlf Nummer:</label>
        <input type="tel" id="phone" v-model="phone" required />
      </div>
      <div>
        <label for="message">Din melding:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Send Epost</button>
    </form>
  </div>
</template>
