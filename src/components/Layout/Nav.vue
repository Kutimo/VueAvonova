<script lang="ts">
export default {
  name: 'Nav'
}
</script>

<template>
  <nav>
    <a href="https://digital.avonova.com/services">
      <img src="@/assets/logo.svg" alt="Avonova logo" height="21" width="143" />
    </a>
    <ul>
      <li>
        <a href="https://digital.avonova.com/index">Digital HR og HMS</a>
      </li>
      <li>
        <a href="https://www.avonova.no/kurs">Kurs</a>
        <img src="../icons/IconArrow.svg" alt="Kurs icon" height="10" width="15" />
      </li>
      <li>
        <a href="https://www.avonova.no/ansattegoder/helseforsikring">Helseforsikring</a>
        <img src="../icons/IconArrow.svg" alt="Helseforsikring icon" height="10" width="15" />
      </li>
    </ul>
    <div>
      <button>
        <img src="../icons/IconUser.svg" alt="Brukermeny" height="40" width="40" />
      </button>
      <button>
        <img src="../icons/IconQuestion.svg" alt="hjelpemeny" height="40" width="40" />
      </button>
    </div>
  </nav>
</template>

<style scoped></style>
