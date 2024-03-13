<script lang="ts">
export default {
  name: "PasswordInput",
};
</script>

<template>
  <div class="mt-30 flex h-[50px] max-w-[360px] flex-col gap-30">
    <label for="password" class="font-body text-xl font-normal">
      Passord
    </label>
    <input
      class="active::border-green-1100 h-40 w-[260px] rounded-8 border-[1px] border-gray-600 px-10 py-8 text-base hover:border-2 hover:border-green-1100 focus-visible:border-2 focus-visible:outline-none active:border-2"
      id="password"
      type="password"
    />
  </div>
</template>
