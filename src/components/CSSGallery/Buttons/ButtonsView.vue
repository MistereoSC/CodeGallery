<template>
  <h2>Buttons</h2>
  <div class="container">
    <container title="Minimal Social">
      <ButtonSocialMinimal></ButtonSocialMinimal>
    </container>
    <container title="Minimal Social">
      <ButtonSocialStacks></ButtonSocialStacks>
    </container>
  </div>
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
import ButtonSocialStacks from './SocialStacks.vue'
</script>
