<template>
  <h2>Buttons</h2>
  <div class="container"></div>
  <container title="Minimal Social">
    <ButtonSocialMinimal></ButtonSocialMinimal>
  </container>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_colors.scss';
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>

<script setup>
import Container from './ButtonContainer.vue'
import ButtonSocialMinimal from './SocialMinimal.vue'
</script>
