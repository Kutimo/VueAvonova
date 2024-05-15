<script lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

export default {
  name: 'UserMenu',
  setup() {
    const toast = useToast()
    const firstName = ref('')
    const fetchDataFromLocalStorage = async () => {
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        toast.error(error)
      }
      firstName.value = data.session?.user.user_metadata.firstName
    }
    fetchDataFromLocalStorage()

    const signOut = async () => {
      try {
        const { error } = await supabase.auth.signOut()
        if (error) {
          alert(error.message)
        } else {
          window.location.reload()
        }
      } catch (error) {
        toast.error(error)
      }
    }
    return { signOut, fetchDataFromLocalStorage, firstName }
  },
}
</script>

<template>
  <div class="absolute right-10 top-30 w-[200px] rounded-6 shadow-xl">
    <ul class="flex select-none flex-col gap-12 p-16">
      <li
        class="z-50 px-12 py-6 ring-black hover:bg-green-300 active:rounded-6 active:ring-2"
      >
        <a href="#" class="flex gap-20">
          <img
            src="../../../assets/icons/IconUsername.svg"
            alt="user icon"
            draggable="false"
          />
          {{ firstName }}
        </a>
      </li>
      <li class="px-12 py-6 ring-black hover:bg-green-300 active:rounded-6 active:ring-2">
        <a href="#" class="flex gap-20" @click="signOut">
          <img
            src="../../../assets/icons/IconLogOut.svg"
            alt="Logg ut"
            draggable="false"
          />
          Logg ut
        </a>
      </li>
    </ul>
  </div>
</template>
