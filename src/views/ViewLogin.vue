<script lang="ts">
import EmailInput from "@/components/input/EmailInput.vue";
import PasswordInput from "@/components/input/PasswordInput.vue";
export default {
  name: "ViewLogin",
  components: {
    EmailInput,
    PasswordInput,
  },
};
</script>

<template>
  <main class="flex h-screen gap-10">
    <EmailInput />
    <PasswordInput />
  </main>
</template>
