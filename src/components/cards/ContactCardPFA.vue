<script lang="ts">
export default {
  name: "ContactCardPFA",
  data() {
    return {
      contact: {
        name: "Navn Navnesen",
        email: "navnnavnesen@example.com",
        phone: "123-456-7890",
      },
    };
  },
};
</script>

<template>
  <div class="p-5 flex justify-center">
    <img src="@/assets/img/placeholderPFA.png" alt="PFA" class="h-200 w-175" />
    <div class="ml-8 flex flex-col justify-center p-4">
      <h4>{{ contact.name }}</h4>
      <p>Email: {{ contact.email }}</p>
      <p>Phone: {{ contact.phone }}</p>
    </div>
  </div>
</template>
