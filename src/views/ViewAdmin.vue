<script lang="ts">
import { supabase } from "@/lib/supabaseClient";

type User = {
  id: string;
  email: string;
  user_metadata: {
    // Define the properties of user_metadata here
    // For example:
    name: string;
    age: number;
  };
};

export default {
  name: "ViewAdmin",
  components: {},

  setup() {
    const sendMetaData = async (): Promise<void> => {
      const {
        data: { user },
      } = (await supabase.auth.getUser()) as { data: { user: User | null } };
      if (user) {
        let metadata = user.user_metadata;
        // Use metadata here
      } else {
        // TODO: Add toast
      }
    };
    return {
      sendMetaData,
    };
  },
};
</script>

<template>
  <main></main>
</template>
