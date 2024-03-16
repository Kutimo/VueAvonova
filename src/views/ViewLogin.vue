<script lang="ts">
import { defineComponent, ref } from "vue";

import ForgotPasswordForm from "@/components/Layout/ForgotPasswordForm.vue";
import LoginForm from "@/components/Layout/LoginForm.vue";
export default defineComponent({
  name: "ViewLogin",
  components: {
    LoginForm,
    ForgotPasswordForm,
  },
  setup() {
    const showForgotPasswordForm = ref(false);

    const toggleForgotPasswordForm = () => {
      showForgotPasswordForm.value = !showForgotPasswordForm.value;
    };

    return {
      showForgotPasswordForm,
      toggleForgotPasswordForm,
    };
  },
});
</script>

<template>
  <header class="ml-52 flex w-full">
    <img src="@/assets/logo.svg" alt="avonova logo" height="21" width="150" />
  </header>
  <main class="flex h-screen items-center justify-evenly gap-10 bg-neutral-100">
    <LoginForm
      v-if="!showForgotPasswordForm"
      @showForgotPassword="toggleForgotPasswordForm"
    />
    <ForgotPasswordForm
      v-if="showForgotPasswordForm"
      @showForgotPassword="toggleForgotPasswordForm"
    />
    <div class="relative hidden desktop:block">
      <img
        src="@/assets/img/ImageLogin.jpg"
        alt=""
        class="rounded-full"
        width="400"
        height="425"
      />
      <div
        class="absolute left-36 top-52 h-36 w-36 rounded-full bg-[#FFBAAE]"
      ></div>
      <div
        class="absolute left-[210px] top-[381px] h-64 w-64 rounded-full bg-[#FF6C62]"
      ></div>
    </div>
  </main>
</template>
