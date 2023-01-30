<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <header>
    <div class="navbar">
      <Navbar> </Navbar>
    </div>
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
$nav-height: 3.5rem;
.navbar {
  height: $nav-height;
}
.view {
  min-height: calc(100vh - $nav-height);
}

@media (max-width: 720px) {
  footer {
    display: none;
  }
  .view {
    margin-top: -$nav-height;
    margin-bottom: $nav-height;
    padding-top: 2rem;
  }
}
</style>
