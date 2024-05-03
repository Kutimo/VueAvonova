<script lang="ts">
import EmailInput from "../input/EmailInput.vue";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";
import ButtonSecondary from "../buttons/ButtonSecondary.vue";
import { supabase } from "@/lib/supabaseClient";
import { ref } from "vue";

export default {
  name: "ForgotPasswordForm",

  const { sendPasswordRestEmail } = useAuthUser();

// keep up with email
const email = ref("");

// function to call on submit of the form
// triggers sending the reset email to the user
const handlePasswordReset = async () => {
  await sendPasswordRestEmail(email.value);
  alert(Password reset email sent to: ${email.value});
};

  components: {
    EmailInput,
    ButtonPrimary,
    ButtonSecondary,
  },
};
</script>

<template>
  <!--TODO: Add logic for form submission -->
  <div
    class="flex h-fit w-[560px] flex-col rounded-10 bg-white px-30 py-[50px] drop-shadow-lg"
  >
    <form
      action=""
      class="flex w-fit flex-col gap-30"
      @submit.prevent="handlePasswordReset()"
    >
      <p class="font-body text-[30px] text-green-1200">
        Vennligst oppgi følgende detaljer
      </p>
      <span class="font-body text-sm"
        >Skriv inn Eposten din for å få tilsendt en bekreftleseskode.</span
      >
      <!-- TODO: hoist the value of email input -->
      <EmailInput />
      <div class="mt-10 flex gap-10">
        <ButtonSecondary
          button-text="Avbryt"
          @click="$emit('showForgotPassword')"
        />
        <ButtonPrimary button-text="Login" />
      </div>
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
