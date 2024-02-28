<script lang="ts">
import ButtonPrimary from "@/components/buttons/ButtonPrimary.vue";
import ButtonSecondary from "@/components/buttons/ButtonSecondary.vue";
import Input from "@/components/input/Input.vue";

export default {
  name: "Components",
  components: {
    Input,
    ButtonPrimary,
    ButtonSecondary,
  },
};
</script>

<template>
  <main id="Components">
    <div class="buttons">
      <ButtonPrimary button-text="Buy now" />
      <ButtonSecondary button-text="secondary" />
    </div>
    <div>
      <p>inputs:</p>
      <Input
        label="Text"
        name="lastName"
        descriptive-text="hello"
        error
        error-text="test"
      />
      <Input
        label="with error"
        name="lastName"
        descriptive-text="hello"
        error
        error-text="test"
      />
      <Input
        label="with question icon"
        name="lastName"
        descriptive-text="hello"
        icon
      />
    </div>
  </main>
</template>

<style scoped></style>
