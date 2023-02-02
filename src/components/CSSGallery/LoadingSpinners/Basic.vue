<template>
  <div class="basic-spinner"><div></div></div>
</template>

<style lang="scss" scoped>
$color: #fff;
$animation-duration: 1s;
$size: 4rem;
.basic-spinner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: block;
    width: $size;
    height: $size;
    border-radius: 50%;
    border: $size * 0.15 solid $color;
    border-color: $color $color transparent $color;
    animation: rotate $animation-duration linear infinite;
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
