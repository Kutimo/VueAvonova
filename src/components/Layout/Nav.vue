<script lang="ts">
export default {
  name: "Nav",
};
</script>

<template>
  <nav>
    <div class="nav-links">
      <button class="nav-menu">
        <img
          src="../icons/IconOpenMenu.svg"
          alt="Meny"
          height="16"
          width="12"
        />
      </button>
      <a href="https://digital.avonova.com/services">
        <img
          src="@/assets/logo.svg"
          alt="Avonova logo"
          height="21"
          width="143"
        />
      </a>
      <ul>
        <li class="nav-link">
          <a href="https://digital.avonova.com/index">Digital HR og HMS</a>
        </li>
        <li class="nav-link">
          <a href="https://www.avonova.no/kurs">Kurs</a>
          <img
            src="../icons/IconArrow.svg"
            alt="Kurs icon"
            height="10"
            width="15"
          />
        </li>
        <li class="nav-link">
          <a href="https://www.avonova.no/ansattegoder/helseforsikring"
            >Helseforsikring</a
          >
          <img
            src="../icons/IconArrow.svg"
            alt="Helseforsikring icon"
            height="10"
            width="15"
          />
        </li>
      </ul>
    </div>
    <div class="buttons-right">
      <button class="button-right">
        <img
          src="../icons/IconUser.svg"
          alt="Brukermeny"
          height="18"
          width="20"
        />
      </button>
      <button class="button-right">
        <img
          src="../icons/IconQuestion.svg"
          alt="hjelpemeny"
          height="40"
          width="40"
        />
      </button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 18px;
}

.nav-menu {
  margin-right: 40px;
  display: none;
  width: 56px;
  height: 32px;
  z-index: 15;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-links > a {
  margin-right: 64px;
  display: flex;
  align-items: center;
}

ul {
  display: flex;
  gap: 32px;
}
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

.buttons-right {
  display: flex;
  gap: 10px;
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
</style>
