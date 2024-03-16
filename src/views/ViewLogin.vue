<script lang="ts">
import LoginForm from "@/components/Layout/LoginForm.vue";
export default {
  name: "ViewLogin",
  components: {
    LoginForm,
  },
};
</script>

<template>
  <main class="flex h-screen gap-10 bg-neutral-100">
    <LoginForm />
  </main>
</template>
