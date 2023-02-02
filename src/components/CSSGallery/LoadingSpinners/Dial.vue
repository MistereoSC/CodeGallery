<template>
  <div class="dial-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
$color: #fff;
$animation-duration: 1s;
$size: 4rem;
.dial-spinner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    border-top: calc($size/4.5) solid $color;
    width: calc($size/12);
    height: $size;

    opacity: 1;
    position: absolute;

    animation: pulse $animation-duration linear infinite;
  }

  @for $idx from 1 through 11 {
    div:nth-child(#{$idx}) {
      transform: rotate($idx * 30deg);
      animation-delay: calc($animation-duration * 0.1 * $idx);
    }
  }
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
