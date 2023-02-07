<template>
  <div class="body-material"></div>
</template>

<style lang="scss" scoped>
.body-material {
  min-height: 100vh;
  margin-top: 15vh;
  background: black;
  color: black;
  &::before {
    content: '';
    background: black;
    width: 100vw;
    height: 20vh;
    position: absolute;
    left: 0;
    top: -16vh;
  }
}
</style>
