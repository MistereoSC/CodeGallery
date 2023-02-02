<template>
  <div class="about-card">
    <span class="splinters">
      <span class="glass"></span>
      <span class="glass"></span>
      <span class="glass"></span>
    </span>
    <div class="about-card-content glass">
      <h1>SEBASTIAN LEHMANN</h1>
      <div class="sub-container">
        <div>
          <h2>SOFTWARE ENGINEERING STUDENT</h2>
          <h2>Ulm, Germany</h2>
          <p>
            I may not have a PhD in Humor, but I do almost have a degree in
            Software Engineering and a knack for making people around me laugh.
            I am a problem solver at heart, and I approach complex challenges
            with a dash of wit and a smile.
          </p>
        </div>
        <div class="img-container">
          <img src="@/assets/icons/Mistereo.png" />
        </div>
      </div>
      <div class="about-contact">
        <a href="http://github.com/MistereoSC" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          MistereoSC
        </a>
        <a href="mailto:sol.mistereo@gmail.com" target="_blank">
          <i class="material-icons">mail</i> sol.mistereo@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_glass.scss';
.about-card {
  .about-card-content {
    font-family: 'News Cycle', sans-serif;
    padding: 2.5rem 6rem 2.5rem 2.5rem;
    z-index: 3;
  }

  .sub-container {
    display: flex;
    justify-content: flex-start;
  }
  .about-contact {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 1.4rem;

    a {
      font-weight: 700;
      color: rgba(26, 153, 230, 1);
      padding: 4px 2rem;
    }
    svg {
      fill: rgba(26, 153, 230, 1);
    }
  }

  h1 {
    font-weight: 700;
    font-size: 5rem;
    line-height: 0.9;
    background: $glass-gradient-ex;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  h2 {
    font-size: 1.85rem;
    font-weight: 400;
    margin-top: 0.6rem;
    margin-bottom: -0.4rem;

    &:nth-of-type(2) {
      opacity: 0.3;
    }
  }
  p {
    font-family: 'Jura', sans-serif;
    font-size: 1.85rem;

    margin-top: 2rem;
    max-width: 24ch;
  }

  .img-container {
    margin-left: 3rem;
    display: flex;
    align-items: center;
    img {
      width: 15rem;
      height: 15rem;
      filter: drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.8));
      opacity: 0.9;
    }
  }

  .splinters {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    :nth-child(1) {
      position: absolute;
      top: -3.5rem;
      left: -2rem;
      width: 10rem;
      height: 10rem;
      z-index: 2;
    }
    :nth-child(2) {
      position: absolute;
      bottom: -3.5rem;
      left: 24%;
      width: 8rem;
      height: 8rem;
      z-index: 2;
    }
    :nth-child(3) {
      position: absolute;
      bottom: 20%;
      right: -4rem;
      width: 8rem;
      height: 8rem;
      z-index: 4;
    }
  }
}
</style>
