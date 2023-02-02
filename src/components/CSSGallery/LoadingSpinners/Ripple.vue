<template>
  <div class="ripple-spinner">
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
$color: #fff;
$animation-duration: 1.5s;
$size: 5rem;
.ripple-spinner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: $size;
    width: $size;
    border-radius: 50%;
    border: 5px solid $color;
    opacity: 1;
    position: absolute;

    animation: ripple $animation-duration cubic-bezier(0, 0.25, 0.75, 1)
      infinite;
    &:nth-child(1) {
      animation-delay: calc($animation-duration/5);
    }
  }
}

@keyframes ripple {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  5% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
}
</style>
