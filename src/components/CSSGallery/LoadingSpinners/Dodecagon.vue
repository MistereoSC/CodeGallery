<template>
  <div class="dodecagon-spinner">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
$size: 4rem;
$color: white;
$animation-duration: 2s;

.dodecagon-spinner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: absolute;
    width: $size;
    height: $size;
    border: 1px solid $color;

    &:nth-child(1) {
      animation-delay: $animation-duration * 0.1;
    }
    &:nth-child(2) {
      animation-delay: $animation-duration * 0.2;
    }
    animation: rotate $animation-duration infinite ease-in-out;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  90% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
</style>

<script setup></script>
