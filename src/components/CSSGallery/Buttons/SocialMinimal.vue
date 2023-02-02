<template>
  <div class="button-social-minimal">
    <i class="material-icons i">mail</i>
  </div>
</template>
<style lang="scss" scoped>
$size: 3rem;
$border-size: 3px;
$color: white;
$animation-duration: 0.5s;
$color-to: hsl(160deg, 100%, 37%);

.button-social-minimal {
  cursor: pointer;

  width: $size;
  height: $size;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: $size * 0.65;
    color: $color;
    transition: color $animation-duration;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: $border-size;
    height: 100%;
    border-top: $border-size solid $color;
    border-left: $border-size solid $color;
    transition: width $animation-duration, height $animation-duration,
      border-color $animation-duration;
  }
  &:after {
    content: '';
    position: absolute;
    width: $border-size;
    height: 100%;
    right: 0;
    bottom: 0;
    border-bottom: $border-size solid $color;
    border-right: $border-size solid $color;
    transition: width $animation-duration, height $animation-duration,
      border-color $animation-duration;
  }

  &:hover {
    &:after {
      width: 100%;
      height: $border-size;
      border-color: $color-to;
    }

    &:before {
      width: 100%;
      height: $border-size;
      border-color: $color-to;
    }
    i {
      color: $color-to;
    }
  }
}
</style>
