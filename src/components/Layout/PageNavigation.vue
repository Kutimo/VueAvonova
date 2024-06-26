<script setup lang="ts">
import { ref } from 'vue'
import QuestionMenu from './navMenu/QuestionMenu.vue'
import UserMenu from './navMenu/UserMenu.vue'
import { onClickOutside } from '@vueuse/core'
import { signOut } from '@/lib/signOut'
import { userNameStore } from '@/lib/store'

const isMobileMenuOpen = ref(false)
const isUserMenuOpen = ref(false)
const isHelpMenuOpen = ref(false)
const targetUserMenu = ref(null)
const targetHelpMenu = ref(null)
onClickOutside(targetUserMenu, () => (isUserMenuOpen.value = false))
onClickOutside(targetHelpMenu, () => (isHelpMenuOpen.value = false))

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

let firstName = ref({})
firstName.value = userNameStore.state.user.user_metadata.firstName

const handleSignOut = () => {
  signOut()
}
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
        <img src="../../assets/logo.svg" alt="Avonova logo" height="21" width="143" />
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
      <div class="relative" ref="targetUserMenu">
        <button
          @click="isUserMenuOpen = !isUserMenuOpen"
          class="flex h-40 w-40 items-center justify-center rounded-full border-2 border-green-1100 bg-gray-200 ring-offset-2 hover:cursor-pointer hover:bg-gray-300 focus:ring-2 focus:ring-green-1100"
        >
          <img
            src="../../assets/icons/IconUser.svg"
            alt="Brukermeny"
            height="18"
            width="20"
          />
        </button>
        <UserMenu v-if="isUserMenuOpen" />
      </div>
      <div class="relative" ref="targetHelpMenu">
        <button
          @click="isHelpMenuOpen = !isHelpMenuOpen"
          class="flex h-40 w-40 items-center justify-center rounded-full border-2 border-green-1100 bg-gray-200 ring-offset-2 focus-within:ring-2 hover:cursor-pointer hover:bg-gray-300 focus:ring-green-1100"
        >
          <img
            src="../../assets/icons/IconQuestion.svg"
            alt="hjelpemeny"
            height="40"
            width="40"
          />
        </button>
        <QuestionMenu v-if="isHelpMenuOpen" />
      </div>
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
          <img src="../../assets/logo-white.svg" alt="logo" height="21" width="143" />
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
        <li
          class="px-12 py-6 ring-black hover:bg-green-300 active:rounded-6 active:ring-2"
        >
          <router-link class="flex gap-20" to="/profile" @click="toggleMobileMenu">
            <img
              src="../../assets/icons/IconUser.svg"
              alt="Brukermeny"
              height="18"
              width="20"
            />
            {{ firstName }}
          </router-link>
        </li>
        <li
          class="px-12 py-6 ring-black hover:bg-green-300 active:rounded-6 active:ring-2"
        >
          <a href="#" class="flex gap-20" @click="handleSignOut">
            <img
              src="../../assets//icons/IconLogOut.svg"
              alt="Logg ut"
              draggable="false"
            />
            Logg ut
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
