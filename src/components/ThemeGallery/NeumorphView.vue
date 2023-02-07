<template>
  <div class="body-neumorph"></div>
  <img
    class="bottom-decoration"
    src="@/assets/images/backgrounds/decorations/steps-1.svg"
  />
</template>

<style lang="scss" scoped>
.body-neumorph {
  min-height: 100vh + 10vh;
  margin-top: 15vh;
  background: white;
  color: black;
  &::before {
    content: '';
    background: white;
    width: 100vw;
    height: 20vh;
    position: absolute;
    left: 0;
    top: -16vh;
  }
}
.bottom-decoration {
  width: 100vw;
  position: absolute;
  bottom: 0;
  filter: drop-shadow(0 -0 8px black);
}
</style>
