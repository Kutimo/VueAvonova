<script lang="ts">
export default {
  name: 'EmailInput',
  data() {
    return {
      email: '',
      emailError: '',
    }
  },
  methods: {
    sanitizeEmail() {
      // Regex to match a basic email format
      const regex =
        /^[-!#-'*+/-9=?^-~]+(?:\.[-!#-'*+/-9=?^-~]+)*@[-!#-'*+/-9=?^-~]+(?:\.[-!#-'*+/-9=?^-~]+)+$/i
      if (!regex.test(this.email)) {
        this.emailError = 'Skriv inn en gyldig epost adresse'
      } else {
        this.emailError = ''
        // Emit an event to send the email to the parent component
        this.$emit('emailSubmitted', this.email)
      }
    },
  },
}
</script>

<template>
  <div class="flex w-full flex-col gap-30">
    <label for="email" class="font-body text-xl font-normal text-green-1200">
      Epost
    </label>
    <input
      class="active::border-green-1100 h-[50px] w-[380px] rounded-8 border-[1px] border-gray-600 px-10 py-8 text-base hover:border-2 hover:border-green-1100 focus-visible:border-2 focus-visible:outline-none active:border-2"
      id="email"
      type="email"
      autocomplete="username"
      v-model.trim="email"
      @blur="sanitizeEmail"
    />
    <p v-if="emailError" class="text-red">{{ emailError }}</p>
  </div>
</template>
