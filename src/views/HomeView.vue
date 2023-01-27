<template>
  <div class="home-spacer">
    <div class="home-container">
      <AwesomeResources></AwesomeResources>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/sass/_colors.scss';
.home-spacer {
  display: grid;
  grid-template-columns: 1fr 90vw 1fr;
  justify-items: center;
}
.home-container {
  grid-column-start: 2;
  grid-column-end: 3;
  padding: 2rem 0;
}
</style>

<script lang="ts" setup>
import AwesomeResources from '@/components/AwesomeResources.vue'
</script>
