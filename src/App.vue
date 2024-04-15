<script lang="ts">
import PageNavigation from "@/components/Layout/PageNavigation.vue";
import PageFooter from "./components/Layout/PageFooter.vue";
import { store } from "@/lib/store";
import { supabase } from "./lib/supabaseClient";

export default {
  name: "App",
  components: {
    PageNavigation,
    PageFooter,
  },
  setup() {
    // we initially verify if a user is logged in with Supabase
    store.state.user = supabase.auth.getUser();
    // we then set up a listener to update the store when the user changes either by logging in or out
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_OUT") {
        store.state.user = null;
      } else {
        store.state.user = session.user;
        console.log(store.state.user);
      }
    });

    return {
      store,
    };
  },
};
</script>

<template>
  <PageNavigation />
  <router-view></router-view>
  <PageFooter />
</template>
