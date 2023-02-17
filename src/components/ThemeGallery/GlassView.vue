<template>
  <div class="body-glass">
    <div class="background-decoration">
      <svg class="defs">
        <defs>
          <linearGradient id="grad-red-orange" x1="1" x2="0" y1="0.5" y2="1">
            <stop
              offset="0%"
              style="stop-color: rgb(255, 7, 85); stop-opacity: 1"
            />
            <stop
              offset="100%"
              style="stop-color: rgb(255, 170, 9); stop-opacity: 1"
            />
          </linearGradient>

          <linearGradient id="grad-blue-blue" x1="0" x2="0.1" y1="0" y2="0.7">
            <stop offset="0%" style="stop-color: #5e0fff; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #1905d9; stop-opacity: 1" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        class="triangle"
        width="100"
        height="100"
      >
        <path d="M 50,20 90,90 10,90 z" />
      </svg>
      <div class="square"></div>
      <div class="circle"></div>
    </div>
    <div class="content-container">
      <div class="splinters">
        <span class="glass splinter-1"></span>
        <span class="glass splinter-2"></span>
        <span class="glass splinter-3"></span>
      </div>
      <div class="content glass">
        <h1>GLASS<br />MORP<br />HISM</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          harum sed placeat mollitia dolore, distinctio ducimus facere. Sit,
          accusamus dolore.
        </p>
      </div>
    </div>
    <img
      class="bottom-decoration"
      src="@/assets/images/backgrounds/decorations/wave-2.svg"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_glass.scss';
@import url('https://fonts.googleapis.com/css2?family=Bungee+Hairline&family=Dosis:wght@600&display=swap');

.content {
  min-width: 45vw;
  min-height: 50vh;
  padding: 1.5rem;
  z-index: 2;

  h1 {
    font-family: 'Dosis', sans-serif;
    font-size: 4.5rem;
    line-height: 0.9;

    background: $glass-gradient-ex;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  p {
    font-family: 'Bungee Hairline', sans-serif;
    font-size: 2rem;
    max-width: 30ch;
  }
}
.content-container {
  z-index: 2;
  margin-top: -20vh;
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

.body-glass {
  min-height: 100vh + 20vh;
  margin-top: 15vh;
  width: 100vw;
  background: $glass-background;
  &::before {
    content: '';
    background: $glass-background;
    width: 100vw;
    height: 20vh;
    position: absolute;
    left: 0;
    top: -15vh;
  }

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
.background-decoration {
  position: absolute;
  background: $glass-background;
  width: 100vw;
  height: 100vh;

  svg,
  div {
    position: absolute;
    filter: drop-shadow(4px 4px 4px black);
  }
  .triangle {
    position: absolute;
    left: 26vw;
    top: 59vh;
    scale: 3.5;
    stroke-width: 16;
    stroke-linejoin: round;
    stroke-linecap: round;

    fill: url(#grad-red-orange);
    stroke: url(#grad-red-orange);

    transform: rotate(102deg);
  }
  .square {
    width: 12rem;
    height: 12rem;
    background: $glass-gradient-1;
    border-radius: 3rem;
    left: 57vw;
    top: 10vh;
    transform: rotate(18deg);
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
