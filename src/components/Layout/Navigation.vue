<script lang="ts">
export default {
  name: "Navigation",
};
</script>

<template>
  <nav class="flex w-full items-center justify-between px-18 py-16">
    <div class="flex items-center">
      <button
        class="rounded-full laptop:hidden z-20 mr-40 flex h-32 w-[57px] items-center justify-center bg-green-600 px-[22px] active:bg-green-1200"
      >
        <img
          src="../../assets/icons/IconOpenMenu.svg"
          alt="Meny"
          height="18"
          width="13"
          class="h-full w-full"
        />
      </button>
      <a
        class="mr-64 flex items-center"
        href="https://digital.avonova.com/services"
      >
        <img
          src="../../assets/logo.svg"
          alt="Avonova logo"
          height="21"
          width="143"
        />
      </a>
      <ul class="laptop:flex hidden gap-32">
        <li class="list flex items-center">
          <a
            class="text-xl font-normal text-green-1100 hover:underline"
            href="https://digital.avonova.com/index"
            >Digital HR og HMS</a
          >
        </li>
        <li class="list flex items-center">
          <a
            class="text-xl font-normal text-green-1100 hover:underline"
            href="https://www.avonova.no/kurs"
            >Kurs</a
          >
          <img
            src="../../assets/icons/IconArrow.svg"
            alt="Kurs icon"
            height="10"
            width="15"
          />
        </li>
        <li class="list flex items-center">
          <a
            class="text-xl font-normal text-green-1100 hover:underline"
            href="https://www.avonova.no/ansattegoder/helseforsikring"
            >Helseforsikring</a
          >
          <img
            src="../../assets/icons/IconArrow.svg"
            alt="Helseforsikring icon"
            height="10"
            width="15"
          />
        </li>
      </ul>
    </div>
    <div class="laptop:flex hidden gap-10">
      <button
        class="bg-gray-200 hover:bg-gray-300 rounded-full flex h-40 w-40 items-center justify-center border-2 border-green-1100 ring-offset-2 hover:cursor-pointer focus:ring-2 focus:ring-green-1100"
      >
        <img
          src="../../assets/icons/IconUser.svg"
          alt="Brukermeny"
          height="18"
          width="20"
        />
      </button>
      <button
        class="bg-gray-200 hover:bg-gray-300 rounded-full flex h-40 w-40 items-center justify-center border-2 border-green-1100 ring-offset-2 focus-within:ring-2 hover:cursor-pointer focus:ring-green-1100"
      >
        <img
          src="../../assets/icons/IconQuestion.svg"
          alt="hjelpemeny"
          height="40"
          width="40"
        />
      </button>
    </div>
  </nav>
</template>

<style scoped>
@media only screen and (max-width: 960px) {
  .nav-link {
    display: none;
  }
  .buttons-right {
    display: none;
  }
  .nav-menu {
    display: block;
  }
}
</style>
