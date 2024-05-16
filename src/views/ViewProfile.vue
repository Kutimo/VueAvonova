<script lang="ts">
import { supabase } from '@/lib/supabaseClient'
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'
import ButtonSecondary from '@/components/buttons/ButtonSecondary.vue'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

type User = {
  id: string
  email: string
  user_metadata: {
    name: string
  }
}

export default {
  name: 'ViewProfile',
  components: { ButtonPrimary, ButtonSecondary },

  setup() {
    const firstName = ref<string>('')
    const lastName = ref<string>('')
    const age = ref<number>(0)
    const password = ref<string>('')
    const Toast = useToast()

    const getUserData = async (): Promise<void> => {
      const {
        data: { user },
      } = (await supabase.auth.getUser()) as { data: { user: User | null } }
      console.log(user)
    }
    const updatePassword = async (): Promise<void> => {
      try {
        const { error } = await supabase.auth.updateUser({
          password: password.value,
        })

        if (error) {
          Toast.error(`Feil ved endring av passord : ${error.message}`)
        }

        Toast.success('passord er endret')
      } catch (error) {
        Toast.error(`En uventet feil oppstod : ${error}`)
      }
    }

    const sendMetaData = async (): Promise<void> => {
      try {
        const { error } = await supabase.auth.updateUser({
          data: {
            firstName: firstName.value,
            lastName: lastName.value,
            age: age.value,
          },
        })

        if (error) {
          Toast.error(`Feil ved oppdatering av bruker:", ${error.message}`)
        } else {
          Toast.success(
            `Brukernavnet er endret: ${firstName.value + ' ' + lastName.value}`,
          )
        }
      } catch (error) {
        Toast.error(`En ukjent feil oppstod:, ${error}`)
      }
    }

    return {
      firstName,
      lastName,
      password,
      sendMetaData,
      Toast,
      getUserData,
      updatePassword,
    }
  },
}
</script>

<template>
  <main class="flex h-screen items-center justify-center">
    <div class="flex flex-col items-center p-10">
      <h1>Min side:</h1>
      <form class="flex flex-col gap-10 p-10">
        <input
          type="text"
          v-model="firstName"
          placeholder="Fornavn"
          class="border border-gray-300 p-8"
        />
        <input
          type="text"
          v-model="lastName"
          placeholder="Etternavn"
          class="border border-gray-300 p-8"
        />
        <ButtonPrimary buttonText="Endre bruker" @click="sendMetaData" />
      </form>
      <form class="flex flex-col gap-10">
        <input
          type="text"
          v-model="password"
          placeholder="Passord"
          class="border border-gray-300 p-8"
        />
        <ButtonPrimary buttonText="Endre bruker" @click="updatePassword" />
      </form>
    </div>
  </main>
</template>
