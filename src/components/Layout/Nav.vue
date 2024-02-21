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
    <div class="buttons">
      <button>
        <img src="../icons/IconUser.svg" alt="Brukermeny" height="18" width="20" />
      </button>
      <button>
        <img src="../icons/IconQuestion.svg" alt="hjelpemeny" height="40" width="40" />
      </button>
    </div>
  </nav>
</template>

<style scoped>
li {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0px;
}

a {
  text-decoration: none;
  color: var(--green1100);
  font-weight: 400;
  font-size: 20px;
}

a:hover {
  text-decoration: underline;
}

.buttons {
  display: flex;
  gap: 10px;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray200);
  border: 2px solid var(--green1100);
  border-radius: 100px;
  height: 40px;
  width: 40px;
}
</style>
