<template>
  <h2>Loading Spinners</h2>
  <div class="container">
    <SpinnerContainer title="Esoteric Spinner">
      <SpinnerHexagon></SpinnerHexagon>
    </SpinnerContainer>

    <SpinnerContainer title="Dot Dot Dot">
      <SpinnerDot></SpinnerDot>
    </SpinnerContainer>

    <SpinnerContainer title="Ripple">
      <SpinnerRipple></SpinnerRipple>
    </SpinnerContainer>

    <SpinnerContainer title="Dial Spinner">
      <SpinnerDial></SpinnerDial>
    </SpinnerContainer>

    <SpinnerContainer title="Modern Dial">
      <SpinnerDialModern></SpinnerDialModern>
    </SpinnerContainer>
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
import SpinnerContainer from './LoadingSpinnersContainer.vue'
import SpinnerHexagon from './Dodecagon.vue'
import SpinnerDot from './Dot.vue'
import SpinnerRipple from './Ripple.vue'
import SpinnerDial from './Dial.vue'
import SpinnerDialModern from './DialModern.vue'
</script>
