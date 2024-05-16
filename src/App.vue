<script lang="ts">
import PageNavigation from '@/components/Layout/PageNavigation.vue'
import { store, userNameStore } from '@/lib/store'
import { supabase } from './lib/supabaseClient'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    PageNavigation,
  },
  setup() {
    const isLoggedIn = ref(false)

    // we initially verify if a user is logged in with Supabase
    // we then set up a listener to update the store when the user changes either by logging in or out
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == 'SIGNED_OUT') {
        store.state.user = 'null'
        userNameStore.state.user.user_metadata.firstName = 'null'
      } else {
        if (session !== null) {
          store.state.user = supabase.auth.getUser()
          store.state.user = session.user
          userNameStore.state.user.user_metadata.firstName =
            session.user.user_metadata.firstName
          isLoggedIn.value = true
          // console.log(store.state.user)
        }
      }
    })

    return {
      store,
      isLoggedIn,
    }
  },
}
</script>

<template>
  <PageNavigation v-if="isLoggedIn" />
  <router-view></router-view>
</template>
