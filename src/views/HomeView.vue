<template>
  <div class="home-spacer">
    <div class="home-container">
      <AwesomeResources></AwesomeResources>
      <GitTracker></GitTracker>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/sass/_colors.scss';
.home-spacer {
  display: grid;
  grid-template-columns: 1fr 82vw 1fr;
  justify-items: center;
}
.home-container {
  grid-column-start: 2;
  grid-column-end: 3;
  padding: 2rem 0;
}
</style>

<script setup>
import AwesomeResources from '@/components/AwesomeResources.vue'
import GitTracker from '@/components/GitTracker.vue'
</script>
