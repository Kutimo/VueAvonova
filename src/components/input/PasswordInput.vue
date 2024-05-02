<script lang="ts">
export default {
  name: "PasswordInput",
  data() {
    return {
      password: "",
    };
  },
  methods: {
    handlePasswordSubmission() {
      // Emit an event to send the password to the parent component
      if (this.password) {
        this.$emit("passwordSubmitted", this.password);
      }
    },
    emitSignInEvent() {
      this.$emit("signIn");
    },
  },
};
</script>

<template>
  <div class="flex flex-col gap-30">
    <label for="password" class="font-body text-xl font-normal text-green-1200">
      Passord
    </label>
    <input
      class="active::border-green-1100 h-[50px] w-[380px] rounded-8 border-[1px] border-gray-600 px-20 py-6 text-base hover:border-2 hover:border-green-1100 focus-visible:border-2 focus-visible:outline-none active:border-2"
      autocomplete="current-password"
      id="password"
      type="password"
      v-model="password"
      @blur="handlePasswordSubmission"
      @keyup.enter="emitSignInEvent"
    />
  </div>
</template>
