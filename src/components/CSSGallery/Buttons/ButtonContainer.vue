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
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    padding-top: 0.25rem;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>

<script setup>
const props = defineProps({
  title: String,
})
</script>
