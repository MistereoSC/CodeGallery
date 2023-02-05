<template>
  <div class="css-gallery-container">
    <h1>This is the css gallery (WIP)</h1>
    <LoadingSpinners></LoadingSpinners>
    <Buttons></Buttons>
  </div>
</template>

<style>
.css-gallery-container {
  margin-bottom: 5rem;
}
</style>

<script setup>
import LoadingSpinners from '@/components/CSSGallery/LoadingSpinners/LoadingSpinnersView.vue'
import Buttons from '@/components/CSSGallery/Buttons/ButtonsView.vue'
</script>
