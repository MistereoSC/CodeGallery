<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
        <span class="material-icons">home</span>Home
      </RouterLink>
      <RouterLink to="/about">
        <span class="material-icons">info</span>About
      </RouterLink>
      <RouterLink to="/contact"
        ><span class="material-icons">mail</span> Contact</RouterLink
      >
    </nav>
  </header>
  <div class="view">
    <RouterView />
  </div>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_colors.scss';
$nav-height: 5rem;
.view {
  min-height: calc(100vh - $nav-height);
}

nav {
  display: flex;
  padding: 1rem;

  font-size: 1.5rem;

  height: $nav-height;
  justify-content: center;
  align-items: flex-start;

  a {
    padding: 0 1rem;
    border-left: 1px solid $c-accent-lime;
  }
}

nav {
  a.router-link-exact-active {
    color: var(--color-text);
  }
  a.router-link-exact-active:hover {
    background-color: transparent;
  }
  a:first-of-type {
    border: 0;
  }
}
</style>
