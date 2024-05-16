<script lang="ts">
export default {
  name: 'QuestionMenu',
}
</script>

<template>
  <div class="absolute right-10 top-30 w-[250px] rounded-6 shadow-xl">
    <ul class="flex select-none flex-col gap-12 p-16">
      <li class="px-12 py-6 ring-black hover:bg-green-300 active:rounded-6 active:ring-2">
        <a href="#" class="flex gap-20">
          <img
            src="@/assets/icons/IconAbout.svg"
            alt="Om Avonova assist icon"
            draggable="false"
          />
          About Avonova assist
        </a>
      </li>
      <li class="px-12 py-6 ring-black hover:bg-green-300 active:rounded-6 active:ring-2">
        <a href="#" class="flex gap-20">
          <img src="@/assets/icons/IconNews.svg" alt="Nyheter icon" draggable="false" />
          News
        </a>
      </li>
      <li class="px-12 py-6 ring-black hover:bg-green-300 active:rounded-6 active:ring-2">
        <a href="#" class="flex gap-20">
          <img
            src="@/assets/icons/IconHelp.svg"
            alt="hjelp og kontakt icon"
            draggable="false"
          />
          Help and contact
        </a>
      </li>
      <li class="px-12 py-6 ring-black hover:bg-green-300 active:rounded-6 active:ring-2">
        <a href="#" class="flex gap-20">
          <img
            src="@/assets/icons/IconTermsAndConditions.svg"
            alt="Terms and conditions icon"
            draggable="false"
          />
          Terms and Conditions
        </a>
      </li>
    </ul>
  </div>
</template>
