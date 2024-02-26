<script lang="ts">
export default {
  name: "Navigation",
};
</script>

<template>
  <nav class="flex w-full items-center justify-between px-18 py-16">
    <div class="flex items-center">
      <button class="z-20 mr-40 hidden h-32 w-56">
        <img
          src="../../assets/icons/IconOpenMenu.svg"
          alt="Meny"
          height="16"
          width="12"
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
      <ul class="flex gap-32">
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
    <div class="flex gap-10">
      <button class="button-right">
        <img
          src="../../assets/icons/IconUser.svg"
          alt="Brukermeny"
          height="18"
          width="20"
        />
      </button>
      <button class="flex justify-center items-center bg-gray">
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
.button-right {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray200);
  border: 2px solid var(--green1100);
  border-radius: 100px;
  height: 40px;
  width: 40px;
}

.button-right:hover {
  background-color: var(--gray300);
  cursor: pointer;
}

.button-right:focus:before {
  content: " ";
  position: absolute;
  top: -6px;
  left: -6px;
  right: -6px;
  bottom: -6px;
  border: 1.5px solid #01332a;
  border-radius: 50%;
  opacity: 1;
  background-color: transparent;
}
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
