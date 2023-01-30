<template>
  <div class="dot-spinner">
    <div>.</div>
    <div>.</div>
    <div>.</div>
  </div>
</template>

<style lang="scss" scoped>
$size: 4rem;
$jump-height: 1rem;
$color: white;
$animation-duration: 2s;

.dot-spinner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    font-size: $size;
    animation: jump $animation-duration infinite ease-in-out;
    &:nth-child(1) {
      animation-delay: 0;
    }
    &:nth-child(2) {
      animation-delay: $animation-duration * 0.035;
    }
    &:nth-child(3) {
      animation-delay: $animation-duration * 0.07;
    }
  }
}

@keyframes jump {
  70% {
    transform: translateY(0);
  }
  85% {
    transform: translateY(-$jump-height);
  }
  0% {
    transform: translateY(0);
  }
}
</style>

<script setup></script>
