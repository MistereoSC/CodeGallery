<template>
  <div class="button-container">
    <div class="stack">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
    <div class="button-social-minimal">
      <i class="material-icons i">mail</i>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$size: 5rem;
$hover-amount: 2rem;
$border-size: 3px;
$color: white;
$animation-duration: 0.5s;
$background: rgb(226, 39, 39);

.button-container {
  cursor: pointer;
  transform: rotate(-45deg);
  margin-top: 2rem;
  &:hover > .button-social-minimal {
    transform: rotate3d(1, 1, 0, -45deg)
      translate($hover-amount, -$hover-amount);
  }

  &:hover > .stack {
    :nth-child(2) {
      transform: rotate3d(1, 1, 0, -45deg)
        translate($hover-amount * 0.25, -$hover-amount * 0.25);
    }
    :nth-child(3) {
      transform: rotate3d(1, 1, 0, -45deg)
        translate($hover-amount * 0.5, -$hover-amount * 0.5);
    }
    :nth-child(4) {
      transform: rotate3d(1, 1, 0, -45deg)
        translate($hover-amount * 0.75, -$hover-amount * 0.75);
    }
  }

  .stack {
    position: absolute;
    width: $size;
    height: $size;

    .card {
      position: absolute;
      background: $background;
      width: $size;
      height: $size;
      perspective: 800px;
      transform: rotate3d(1, 1, 0, -45deg);
      transition: transform 0.3s;
    }
    :nth-child(1) {
      background: rgba($background, 0.3);
    }
    :nth-child(2) {
      background: rgba($background, 0.4);
    }
    :nth-child(3) {
      background: rgba($background, 0.5);
    }
    :nth-child(4) {
      background: rgba($background, 0.6);
    }
  }
}
.button-social-minimal {
  width: $size;
  height: $size;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $background;

  perspective: 800px;
  transform: rotate3d(1, 1, 0, -45deg);
  transition: transform 0.3s;

  i {
    font-size: $size * 0.65;
    color: $color;
    transition: color $animation-duration;
  }
}
</style>
