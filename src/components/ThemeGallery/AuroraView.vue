<template>
  <div class="body-aurora">
    <div class="background-decoration">
      <div class="circle"></div>
    </div>
    <div class="content-container">
      <div class="splinters">
        <span class="glass splinter-1"></span>
        <span class="glass splinter-2"></span>
        <span class="glass splinter-3"></span>
      </div>
      <div class="content glass">
        <h1>AURORA</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          harum sed placeat mollitia dolore, distinctio ducimus facere. Sit,
          accusamus dolore.
        </p>
      </div>
    </div>
    <img
      class="bottom-decoration"
      src="@/assets/images/backgrounds/decorations/wave-1.svg"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_glass.scss';

.body-aurora {
  min-height: 100vh;
  width: 100vw;
  background-image: url('@/assets/images/backgrounds/background-aurora.png');
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom-decoration {
  width: 100vw;
  position: absolute;
  bottom: 0;
  filter: drop-shadow(0 -0 8px black);
}

.content {
  min-width: 45vw;
  min-height: 50vh;
  padding: 1.5rem;
  z-index: 2;

  h1 {
    font-size: 4rem;
    line-height: 0.9;
  }
  p {
    font-size: 1.5rem;
    max-width: 30ch;
    color: black;
  }
}
.content-container {
  z-index: 2;
  margin-top: -5vh;
}
.splinters {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .splinter-1 {
    position: absolute;
    top: -3.5rem;
    left: 3rem;
    width: 6rem;
    height: 6rem;
    z-index: 3;
  }
  .splinter-2 {
    position: absolute;
    bottom: 3.5rem;
    right: -4rem;
    width: 8rem;
    height: 8rem;
    z-index: 3;
  }
  .splinter-3 {
    position: absolute;
    bottom: -2.5rem;
    left: -3rem;
    width: 7rem;
    height: 7rem;
    z-index: 1;
  }
}

.bottom-decoration {
  width: 100vw;
  position: absolute;
  bottom: 0;
  filter: drop-shadow(0 -0 8px black);
}
.background-decoration {
  position: absolute;
  width: 100vw;
  height: 100vh;

  div {
    position: absolute;
    filter: drop-shadow(4px 4px 4px black);
  }
  .circle {
    width: 20rem;
    height: 20rem;
    background: $glass-gradient-4;
    border-radius: 50%;
    right: -6rem;
    top: 70vh;
  }
}
</style>
