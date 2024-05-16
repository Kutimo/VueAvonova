<script lang="ts">
import { ref } from 'vue'
import { userNameStore } from '@/lib/store'
import { signOut } from '@/lib/signOut'
export default {
  name: 'UserMenu',
  setup() {
    let firstName = ref({})
    firstName.value = userNameStore.state.user.user_metadata.firstName
    const handleSignOut = () => {
      signOut()
    }
    return { firstName, handleSignOut }
  },
}
</script>

<template>
  <div class="absolute right-10 top-30 w-[200px] rounded-6 shadow-xl">
    <ul class="flex select-none flex-col gap-12 p-16">
      <li
        class="z-50 px-12 py-6 ring-black hover:bg-green-300 active:rounded-6 active:ring-2"
      >
        <router-link to="/profile" class="flex gap-20">
          <img
            src="../../../assets/icons/IconUsername.svg"
            alt="user icon"
            draggable="false"
          />
          {{ firstName }}
        </router-link>
      </li>
      <li class="px-12 py-6 ring-black hover:bg-green-300 active:rounded-6 active:ring-2">
        <a href="#" class="flex gap-20" @click="handleSignOut">
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
