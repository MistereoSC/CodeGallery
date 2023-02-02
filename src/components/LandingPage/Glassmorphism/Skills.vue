<template>
  <div class="skills-card">
    <div class="splinters">
      <span class="glass splinter-1"></span>
      <span class="glass splinter-2"></span>
      <span class="glass splinter-3"></span>

      <div class="icon-splinters">
        <span class="glass splinter-icon">
          <img src="@/assets/icons/vue.png" />
        </span>
        <span class="glass splinter-icon">
          <img src="@/assets/icons/js.png" />
        </span>
        <span class="glass splinter-icon">
          <img src="@/assets/icons/ts.png" />
        </span>
        <span class="glass splinter-icon">
          <img src="@/assets/icons/html.png" />
        </span>
        <span class="glass splinter-icon">
          <img src="@/assets/icons/css.png" />
        </span>
        <span class="glass splinter-icon">
          <img src="@/assets/icons/sass.png" />
        </span>
        <span class="glass splinter-icon">
          <img src="@/assets/icons/java.png" />
        </span>
        <span class="glass splinter-icon">
          <img src="@/assets/icons/csharp.png" />
        </span>
        <span class="glass splinter-icon">
          <img src="@/assets/icons/firebase.png" />
        </span>
        <span class="glass splinter-icon">
          <img src="@/assets/icons/git.png" />
        </span>
      </div>
    </div>
    <div class="skills-card-content glass">
      <h1>MY PROJECTS</h1>
      <div>
        <h2>AROUND THE WEB</h2>
        <p>
          My experience so far consists of my
          <a href="https://github.com/conclurer/midnightboard" target="_blank"
            >University Project</a
          >
          and my Personal Projects on my
          <a href="https://github.com/MistereoSC" target="_blank">GitHub</a>.
          <br /><br />
          So far I have worked with C#/WPF and Java (and Git of course) , but
          most of my projects so far have been Web based. I have experience in
          Vue, Sass and some with Firebase.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_glass.scss';
.skills-card {
  .skills-card-content {
    font-family: 'News Cycle', sans-serif;
    padding: 2.5rem 2rem;
    z-index: 3;
  }

  h1 {
    font-weight: 700;
    font-size: 4rem;
    line-height: 0.9;
    background: $glass-gradient-ex;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 400;

    opacity: 0.3;
  }
  p {
    font-family: 'Jura', sans-serif;
    font-size: 1.5rem;

    max-width: 26ch;
    margin-top: 2rem;
    margin-bottom: 8rem;

    a {
      display: inline;
    }
  }

  .splinters {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .splinter-1 {
      position: absolute;
      top: -2.5rem;
      right: -2rem;
      width: 7rem;
      height: 7rem;
      z-index: 4;
    }
    .splinter-2 {
      position: absolute;
      bottom: -3.5rem;
      right: 24%;
      width: 8rem;
      height: 8rem;
      z-index: 2;
    }
    .splinter-3 {
      position: absolute;
      top: 20%;
      left: -4rem;
      width: 8rem;
      height: 8rem;
      z-index: 2;
    }
  }

  .icon-splinters {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem;

    position: absolute;
    bottom: 0;
    z-index: 4;

    span:nth-child(2) {
      transform: rotate(-5deg);
    }
    .splinter-icon {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 4rem;
      height: 4rem;
      img {
        width: 60%;
      }
    }
  }
}
</style>
