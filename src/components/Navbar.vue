<template>
  <div class="nav-main">
    <nav>
      <RouterLink v-for="itm in navItems" :to="itm.to">
        <i class="material-icons">{{ itm.icon }}</i>
        <p>{{ itm.name }}</p>
      </RouterLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_colors.scss';
.nav-burger {
  display: none;
}
.nav-main {
  z-index: 1;
}
nav {
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-size: 1.5rem;

  a {
    padding: 0 1rem;
    border-left: 1px solid $c-accent-lime;
  }
}
@media (max-width: 720px) {
  .nav-main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    background: $c-background;
    filter: drop-shadow(0 -5px 3px black);
    height: 100%;
    max-height: 3rem;
    overflow-y: hidden;

    transition: max-height 0.5s ease-in-out;
  }

  nav {
    align-self: flex-end;
    padding: 0.25rem 3rem;
    justify-content: space-evenly;
    gap: 0;
    width: 100%;

    a {
      flex-direction: column-reverse;
      border: none;
      height: rem;
      width: 2rem;
      border-radius: 1rem;
      span {
        font-size: 2rem;
      }
      p {
        font-size: 1.5rem;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
      }
      .material-icons {
        margin: 0;
        padding: 0.5rem;
      }
    }
  }

  .expanded {
    max-height: 14rem;
  }
}

nav {
  a.router-link-exact-active {
    color: var(--color-text);
    cursor: default;
  }
  a.router-link-exact-active:hover {
    background-color: transparent;
  }
  a:first-of-type {
    border-left: 0;
  }
}
</style>

<script setup>
import navItems from '@/assets/json/nav-links.json'
</script>
