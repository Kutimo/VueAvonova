<script lang="ts">
export default {
  name: "PageNavigation",
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<template>
  <nav class="flex w-full items-center justify-between px-18 py-16">
    <div class="flex items-center">
      <button
        @click="toggleMobileMenu"
        class="z-20 mr-40 flex h-32 w-[57px] items-center justify-center rounded-full bg-green-600 px-[22px] active:bg-green-1200 laptop:hidden"
      >
        <img
          src="../../assets/icons/IconOpenMenu.svg"
          alt="Meny"
          height="18"
          width="13"
          class="h-full w-full"
        />
      </button>
      <router-link
        to="/"
        class="mr-64 flex items-center"
        href="https://digital.avonova.com/services"
      >
        <img
          src="../../assets/logo.svg"
          alt="Avonova logo"
          height="21"
          width="143"
        />
      </router-link>
      <ul class="hidden gap-32 laptop:flex">
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
    <div class="hidden gap-10 laptop:flex">
      <button
        class="flex h-40 w-40 items-center justify-center rounded-full border-2 border-green-1100 bg-gray-200 ring-offset-2 hover:cursor-pointer hover:bg-gray-300 focus:ring-2 focus:ring-green-1100"
      >
        <img
          src="../../assets/icons/IconUser.svg"
          alt="Brukermeny"
          height="18"
          width="20"
        />
      </button>
      <button
        class="flex h-40 w-40 items-center justify-center rounded-full border-2 border-green-1100 bg-gray-200 ring-offset-2 focus-within:ring-2 hover:cursor-pointer hover:bg-gray-300 focus:ring-green-1100"
      >
        <img
          src="../../assets/icons/IconQuestion.svg"
          alt="hjelpemeny"
          height="40"
          width="40"
        />
      </button>
    </div>
    <!-- mobile nav -->
    <div
      v-if="isMobileMenuOpen"
      class="absolute bottom-[0px] left-[0px] top-[0px] z-50 w-full bg-green-1200 text-white"
    >
      <div class="m-10 flex">
        <button
          @click="toggleMobileMenu"
          class="z-20 mr-40 flex h-32 w-[57px] items-center justify-center rounded-full bg-green-600 px-[22px] active:bg-green-1200 laptop:hidden"
        >
          <img
            src="../../assets/icons/IconCloseMenu.svg"
            alt="close menu"
            height="26"
            width="20"
          />
        </button>
        <router-link to="/" @click="toggleMobileMenu">
          <img
            src="../../assets/logo-white.svg"
            alt="logo"
            height="21"
            width="143"
          />
        </router-link>
      </div>
      <ul class="flex flex-col items-start gap-10 p-20">
        <li class="list flex items-center">
          <a
            class="text-xl font-normal hover:underline"
            href="https://digital.avonova.com/index"
            >Digital HR og HMS</a
          >
        </li>
        <li class="list flex items-center">
          <a
            class="text-xl font-normal hover:underline"
            href="https://www.avonova.no/kurs"
            >Kurs</a
          >
          <img
            src="../../assets/icons/IconArrow-White.svg"
            alt="Kurs icon"
            height="10"
            width="15"
          />
        </li>
        <li class="list flex items-center">
          <a
            class="text-xl font-normal hover:underline"
            href="https://www.avonova.no/ansattegoder/helseforsikring"
            >Helseforsikring</a
          >
          <img
            src="../../assets/icons/IconArrow-White.svg"
            alt="Helseforsikring icon"
            height="10"
            width="15"
          />
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
