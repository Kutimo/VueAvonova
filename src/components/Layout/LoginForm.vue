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
  <!-- Add logic for form submission -->
  <div class="flex h-[650px] w-[560px] flex-col">
    <form action="" class="flex w-fit flex-col gap-30">
      <EmailInput />
      <PasswordInput />
      <!-- Figure out margins -->
      <ButtonPrimary button-text="Login" />
    </form>
  </div>
</template>

<style scoped></style>
