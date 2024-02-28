<script lang="ts">
import ButtonPrimary from "@/components/buttons/ButtonPrimary.vue";
import ButtonSecondary from "@/components/buttons/ButtonSecondary.vue";
import TextInput from "@/components/input/TextInput.vue";

export default {
  name: "ViewComponents",
  components: {
    TextInput,
    ButtonPrimary,
    ButtonSecondary,
  },
};
</script>

<template>
  <main id="Components" class="m-10 flex flex-col gap-10">
    <div class="buttons">
      <ButtonPrimary button-text="Buy now" />
      <ButtonSecondary button-text="secondary" />
    </div>
    <div class="m-10 flex flex-col gap-10">
      <p class="text-lg">inputs:</p>
      <TextInput
        label="Text"
        name="lastName"
        descriptive-text="hello"
        error
        error-text="test"
      />
      <TextInput
        label="with error"
        name="lastName"
        descriptive-text="hello"
        error
        error-text="test"
      />
      <TextInput
        label="with question icon"
        name="lastName"
        descriptive-text="hello"
        icon
      />
    </div>
  </main>
</template>

<style scoped></style>
