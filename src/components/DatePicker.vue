<template>
  <div class="w-[160px]">
    <VueDatePicker v-model="date"></VueDatePicker>
  </div>
</template>

<script lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: { VueDatePicker },
  data() {
    return {
      date: null,
    };
  },
};
</script>
