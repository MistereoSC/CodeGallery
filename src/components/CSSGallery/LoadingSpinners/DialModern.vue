<template>
  <div class="spinner-dial-modern">
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
@use 'sass:math';
$radius: 5rem;
$color: #fff;
$animation-duration: 2s;

.spinner-dial-modern {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg);

  div {
    width: $radius;
    height: $radius;
    position: absolute;

    &:after {
      $size: calc($radius/10);
      content: ' ';
      top: calc(0% - $size/2);
      left: calc(50% - $size/2);
      position: absolute;
      width: $size;
      height: $size;
      border-radius: 50%;
      background: $color;
    }
    animation: rotate $animation-duration ease-in-out infinite;
  }

  @for $idx from 1 through 7 {
    :nth-child(#{$idx}) {
      animation-delay: calc($animation-duration/28 * $idx);
    }
  }

  :nth-child(1):after {
    transform: translate(-0.256 * $radius * 0.5, 0.034 * $radius * 0.5);
  }
  :nth-child(2):after {
    transform: translate(-0.5 * $radius * 0.5, 0.134 * $radius * 0.5);
  }
  :nth-child(3):after {
    transform: translate(-0.707 * $radius * 0.5, 0.293 * $radius * 0.5);
  }
  :nth-child(4):after {
    transform: translate(-0.866 * $radius * 0.5, 0.5 * $radius * 0.5);
  }
  :nth-child(5):after {
    transform: translate(-0.966 * $radius * 0.5, 0.741 * $radius * 0.5);
  }
  :nth-child(6):after {
    transform: translate(-1 * $radius * 0.5, 1 * $radius * 0.5);
  }
  :nth-child(7):after {
    transform: translate(-0.966 * $radius * 0.5, 1.26 * $radius * 0.5);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
