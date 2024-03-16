<script lang="ts">
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
};
</script>

<template>
  <!--TODO: Add logic for form submission -->
  <div
    class="flex h-[650px] w-[560px] flex-col rounded-10 bg-white drop-shadow-lg"
  >
    <form action="" class="flex w-fit flex-col gap-30">
      <h2 class="mb-10 mt-20 font-body text-[40px]">Logg inn</h2>
      <EmailInput />
      <PasswordInput />
      <!-- TODO: Add logic for forgot password -->
      <a
        href=""
        class="font-body text-sm text-green-1000 underline hover:text-black hover:no-underline"
        >Glemt passord?</a
      >
      <ButtonPrimary button-text="Login" />
      <ul>
        <li><strong>Trenger du hjelp?</strong></li>
        li
      </ul>
    </form>
  </div>
</template>

<style scoped></style>
