<script lang="ts">
import { supabase } from "@/lib/supabaseClient";
import ButtonPrimary from "@/components/buttons/ButtonPrimary.vue";
import ButtonSecondary from "@/components/buttons/ButtonSecondary.vue";
import { ref } from "vue";

type User = {
  id: string;
  email: string;
  user_metadata: {
    name: string;
    age: number;
  };
};

export default {
  name: "ViewAdmin",
  components: { ButtonPrimary, ButtonSecondary },

  setup() {
    const firstName = ref<string>("");
    const lastName = ref<string>("");
    const age = ref<number>(0);

    const getUserData = async (): Promise<void> => {
      const {
        data: { user },
      } = (await supabase.auth.getUser()) as { data: { user: User | null } };
      console.log(user);
    };

    const sendMetaData = async (): Promise<void> => {
      const { data, error } = await supabase.auth.updateUser({
        data: {
          firstName: firstName.value,
          lastName: lastName.value,
          age: age.value,
        },
      });
    };

    return {
      firstName,
      lastName,
      age,
      sendMetaData,
      getUserData,
    };
  },
};
</script>

<template>
  <main class="flex h-screen items-center justify-center">
    <div class="flex flex-col">
      <h1>Admin:</h1>
      <form class="flex flex-col gap-10">
        <input type="text" v-model="firstName" placeholder="First Name" />
        <input type="text" v-model="lastName" placeholder="Last Name" />
        <input type="number" v-model="age" placeholder="Age" />
      </form>
      <ButtonPrimary buttonText="Send user data" @click="sendMetaData" />
      <ButtonSecondary buttonText="Get user data" @click="getUserData" />
    </div>
  </main>
</template>
