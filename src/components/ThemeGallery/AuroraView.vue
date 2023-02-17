<template>
  <div class="body-aurora">
    <div class="content-container">
      <div class="splinters">
        <span id="1"></span>
        <span id="2"></span>
        <span id="3"></span>
        <span id="4"></span>
      </div>
      <div class="content glass-light">
        <h1>AURORA</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          dolore similique totam nam distinctio labore vitae debitis aliquid,
          numquam eum omnis harum sint, nihil exercitationem voluptatum
          deleniti, enim quam vero?
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
    font-family: 'Jura', sans-serif;
    font-size: 6rem;
    font-weight: 700;

    background: $glass-gradient-ex-light;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    max-width: 36ch;
    color: black;
    opacity: 0.65;

    text-align: justify;
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

  span {
    background: $glass-gradient-5;
    border-radius: 50%;
    filter: drop-shadow(0 0 18px rgba(0, 0, 0, 0.7));
    box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.3) inset;

    &[id='1'] {
      position: absolute;
      top: -5rem;
      left: calc(40% - 3.75rem);
      width: 7.5rem;
      height: 7.5rem;
      z-index: 1;
    }
    &[id='2'] {
      position: absolute;
      top: calc(60% - 4.5rem);
      right: -6rem;
      width: 9rem;
      height: 9rem;
      z-index: 3;
    }
    &[id='3'] {
      position: absolute;
      top: -7rem;
      right: -5rem;
      width: 11rem;
      height: 11rem;
      z-index: 1;
    }
    &[id='4'] {
      position: absolute;
      top: calc(65% - 7rem);
      left: -8rem;
      width: 14rem;
      height: 14rem;
      z-index: 1;
    }
  }

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
    filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.1));
  }
  .circle {
    width: 10rem;
    height: 10rem;
    background: $glass-gradient-5;
    border-radius: 50%;
    left: 22vw;
    top: 22vh;
  }
}
</style>
