<template>
  <div class="spinner-container">
    <p>{{ title }}</p>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_colors.scss';
.spinner-container {
  width: 10rem;
  height: 10rem;
  background-color: $c-background-3;
  border-radius: 1rem;
  margin: 1rem;
  filter: $e-drop-shadow;

  p {
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
    padding-top: 0.25rem;
    position: absolute;
    width: 100%;
  }
}
</style>

<script setup>
const props = defineProps({
  title: String,
})
</script>
