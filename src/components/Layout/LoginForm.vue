<script lang="ts">
import { ref } from "vue";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";
import EmailInput from "../input/EmailInput.vue";
import PasswordInput from "../input/PasswordInput.vue";

export default {
  name: "LoginForm",
  components: {
    EmailInput,
    PasswordInput,
    ButtonPrimary,
  },
  data() {
    return {
      email: ref(""),
      password: ref(""),
    };
  },
  methods: {
    handleEmailUpdate(email: string) {
      console.log("Email received in parent component:", email);
    },
  },
};

let email = ref("");
let password = ref("");
</script>

<template>
  <!--TODO: Add logic for form submission -->
  <div
    class="flex h-fit w-[560px] flex-col rounded-10 bg-white px-30 py-[50px] drop-shadow-lg"
  >
    <form action="" class="flex w-fit flex-col gap-30">
      <h2 class="mb-10 mt-10 font-body text-[40px]">Logg inn</h2>
      <EmailInput @email-updated="handleEmailUpdate" />
      <PasswordInput />
      <!-- TODO: Add logic for forgot password -->
      <a
        href="#"
        @click="$emit('showForgotPassword')"
        class="font-body text-sm text-green-1000 underline hover:text-black hover:no-underline"
        >Glemt passord?</a
      >
      <ButtonPrimary button-text="Login" />
      <ul class="flex flex-col gap-10">
        <li><strong>Trenger du hjelp?</strong></li>
        <li class="flex items-center gap-10">
          <img
            src="@/assets/icons/IconEmail.svg"
            height="16"
            width="16"
            alt="Mail icon"
          />
          <a
            href="mailto:kundesenter@avonova.no"
            class="text-sm text-green-1000 underline hover:text-black hover:no-underline"
            >kundesenter@avonova.no</a
          >
        </li>
        <li class="flex items-center gap-10">
          <img
            src="@/assets/icons/IconPhone.svg"
            height="16"
            width="16"
            alt="phone icon"
          />
          <a
            href="tel:+4748080808"
            class="text-sm text-green-1000 underline hover:text-black hover:no-underline"
            >+47 48 08 08 08</a
          >
        </li>
      </ul>
    </form>
  </div>
</template>
