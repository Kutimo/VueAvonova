<script lang="ts">
export default {
  name: "UserMenu",
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
            src="@/assets/icons/IconUsername.svg"
            alt="user icon"
            draggable="false"
          />
          User name
        </a>
      </li>
      <li
        class="px-12 py-6 ring-black hover:bg-green-300 active:rounded-6 active:ring-2"
      >
        <a href="#" class="flex gap-20">
          <img
            src="@/assets/icons/IconLogout.svg"
            alt="Logg ut"
            draggable="false"
          />
          Logg ut
        </a>
      </li>
    </ul>
  </div>
</template>
