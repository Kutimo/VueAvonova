<script lang="ts">
import { supabase } from "@/lib/supabaseClient";
// const { data: { user } } = await supabase.auth.getUser()
export default {
  name: "UserMenu",
  methods: {
    async signOut() {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) {
          alert(error.message);
        } else {
          window.location.reload();
        }
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<template>
  <div class="absolute right-10 top-30 w-[200px] rounded-6 shadow-xl">
    <ul class="flex select-none flex-col gap-12 p-16">
      <li
        class="px-12 py-6 ring-black hover:bg-green-300 active:rounded-6 active:ring-2"
      >
        <a href="#" class="flex gap-20">
          <img
            src="../../../assets/icons/IconUsername.svg"
            alt="user icon"
            draggable="false"
          />
          User name
        </a>
      </li>
      <li
        class="px-12 py-6 ring-black hover:bg-green-300 active:rounded-6 active:ring-2"
      >
        <a href="#" class="flex gap-20" @click.prevent="signOut">
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
