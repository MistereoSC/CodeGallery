<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <header>
    <div class="navbar" v-if="['contact', 'wip'].indexOf($route.name) <= -1">
      <Navbar> </Navbar>
    </div>
  </header>
  <div class="view">
    <RouterView />
  </div>
  <footer v-if="['contact', 'wip'].indexOf($route.name) <= -1">
    <Footer></Footer>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_colors.scss';
$nav-height: 3.5rem;
.navbar {
  height: $nav-height;
}
.view {
  min-height: 100vh;
}

@media (max-width: 720px) {
  footer {
    display: none;
  }
}
</style>
