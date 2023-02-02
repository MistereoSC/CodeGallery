<template>
  <div class="main-container">
    <div class="navbar">
      <Navbar></Navbar>
    </div>
    <div class="background">
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
        class="blob"
        width="400"
        height="550"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(210, 240)">
          <path
            id="blob1"
            d="M103.6 -201.3C118.2 -171 103 -110.8 102.5 -72.3C102.1 -33.8 116.6 -16.9 130.5 8.1C144.5 33 158 66 149.9 89.8C141.8 113.6 112.2 128.3 83.6 148.3C55 168.3 27.5 193.6 -3.7 200.1C-35 206.6 -70 194.2 -92.2 170.6C-114.5 146.9 -123.9 112 -145.4 81.6C-166.9 51.3 -200.5 25.7 -202.6 -1.2C-204.8 -28.2 -175.6 -56.3 -159.1 -95.3C-142.6 -134.3 -138.8 -184.1 -114.4 -208.6C-90 -233.2 -45 -232.6 -0.3 -232.2C44.5 -231.7 89 -231.5 103.6 -201.3"
          ></path>
        </g>
        <g transform="translate(210, 210)">
          <path
            id="blob2"
            d="M94.9 -157.8C133.4 -142.1 182.3 -137.8 185.1 -113.4C187.9 -89 144.6 -44.5 131 -7.8C117.4 28.8 133.6 57.7 132 84.1C130.4 110.5 110.9 134.5 86 165.1C61 195.7 30.5 232.8 -4.9 241.3C-40.3 249.9 -80.7 229.7 -109.4 201.3C-138.1 172.9 -155.2 136.2 -155.4 101.3C-155.6 66.3 -138.8 33.2 -148.9 -5.8C-159 -44.8 -196 -89.7 -192 -118C-188 -146.2 -143 -158 -104.2 -173.6C-65.3 -189.2 -32.7 -208.6 -2.3 -204.7C28.2 -200.8 56.3 -173.6 94.9 -157.8"
          ></path>
        </g>
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
      <svg
        class="blob-2"
        viewBox="0 0 900 900"
        width="900"
        height="900"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(465 378)">
          <path
            d="M132.3 -133.5C181.8 -116 239.6 -84.2 239.2 -47.9C238.9 -11.5 180.3 29.4 152.7 98.4C125.1 167.5 128.4 264.6 76 341C23.7 417.4 -84.4 473 -142.7 433.7C-201 394.4 -209.6 260.2 -210.2 166.3C-210.8 72.5 -203.4 19 -223.4 -69.2C-243.4 -157.4 -290.7 -280.1 -258.1 -300.6C-225.4 -321 -112.7 -239 -35.7 -196.5C41.4 -153.9 82.7 -150.9 132.3 -133.5"
          ></path>
        </g>
      </svg>
    </div>
    <div class="container-content">
      <div class="sub-container">
        <AboutMe></AboutMe>
      </div>
      <a href="#scroll" class="cta-arrow material-icons">expand_more</a>
      <div class="sub-container" id="scroll">
        <Skills></Skills>
        <GitCard></GitCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_glass.scss';

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200vh;
  width: 100vw;
}
.navbar {
  position: absolute;
}
.background {
  position: fixed;
  background: $glass-background;
  width: 100vw;
  height: 100vh;

  svg,
  div {
    position: absolute;
    filter: drop-shadow(4px 4px 4px black);
  }
  .blob {
    left: 60%;
    top: 22vh;
    scale: 1.6;
    fill: url(#grad-blue-blue);
    #blob2 {
      fill: transparent;
    }
  }
  .blob-2 {
    left: -300px;
    top: 35vh;
    scale: 1;
    fill: url(#grad-blue-blue);
  }
  .triangle {
    position: absolute;
    left: 24vw;
    top: 4vh;
    scale: 4;
    stroke-width: 16;
    stroke-linejoin: round;
    stroke-linecap: round;

    fill: url(#grad-red-orange);
    stroke: url(#grad-red-orange);

    transform: rotate(12deg);
  }
  .square {
    width: 14rem;
    height: 14rem;
    background: $glass-gradient-1;
    border-radius: 3rem;
    left: 28%;
    top: 60vh;
    transform: rotate(-12deg);

    animation: hover 12s ease-in-out infinite;
  }
  .circle {
    width: 20rem;
    height: 20rem;
    background: $glass-gradient-3;
    border-radius: 50%;
    right: -6rem;
    top: 80vh;
  }
}

.container-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  .sub-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10rem;
    flex-wrap: wrap;
  }
  .cta-arrow {
    cursor: pointer;
    transform: translateY(-10vh);
    font-size: 4rem;
    border-radius: 50%;
  }
}

@keyframes hover {
  0% {
    transform: translate(0, 0) rotate(-12deg);
  }
  50% {
    transform: translate(0.2rem, 1rem) rotate(-11deg);
  }
  100% {
    transform: translate(0, 0) rotate(-12deg);
  }
}
.defs {
  width: 0px;
  height: 0px;
}
</style>

<script setup>
import {onMounted} from 'vue'
import Navbar from '@/components/LandingPage/Glassmorphism/Nav.vue'
import AboutMe from '@/components/LandingPage/Glassmorphism/AboutMe.vue'
import Skills from '@/components/LandingPage/Glassmorphism/Skills.vue'
import GitCard from '@/components/LandingPage/Glassmorphism/Git.vue'

onMounted(() => {
  const morph = KUTE.fromTo(
    '#blob1',
    {path: '#blob1'},
    {path: '#blob2'},
    {repeat: 999, duration: 8000, yoyo: true}
  )
  morph.start()
})
</script>
