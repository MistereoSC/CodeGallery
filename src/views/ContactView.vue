<template>
  <div class="contact-spacer">
    <div class="contact-main">
      <h3>Hello, I'm</h3>
      <h1>Sebastian Lehmann</h1>
      <p>Software Engineering Student in Ulm, Germany</p>
      <p class="flex-h">
        Contact me at
        <a href="mailto:sol.mistereo@gmail.com">
          <span class="material-icons" target="_blank">mail</span>
          sol.mistereo@gmail.com
        </a>
      </p>
      <br />
      <p>
        I may not have a PhD in Humor, but I do
        <span class="i">almost</span> have a degree in Software Engineering and
        a knack for making people around me laugh. I am a problem solver at
        heart, and I approach complex challenges with a dash of wit and a smile.
        So if you're looking for a computer scientist who will not only get the
        job done, but also keep the office morale high, look no further.
      </p>
      <br />
      <h2>I do know a bit of . . .</h2>
      <ul>
        <li><img src="@/assets/icons/vue.png" />Vue.js</li>
        <li><img src="@/assets/icons/js.png" />JavaScript</li>
        <li><img src="@/assets/icons/ts.png" />TypeScript</li>
        <li><img src="@/assets/icons/html.png" />HTML</li>
        <li><img src="@/assets/icons/css.png" />CSS</li>
        <li><img src="@/assets/icons/sass.png" />Sass</li>
        <li><img src="@/assets/icons/java.png" />Java</li>
        <li><img src="@/assets/icons/csharp.png" />C# & WPF</li>
        <li><img src="@/assets/icons/firebase.png" />Firebase</li>
        <li><img src="@/assets/icons/git.png" />Git</li>
        <p>And a tiny bit about other languages</p>
      </ul>
      <br />
      <h2>My projects so far . . .</h2>
      <p class="inline-link">
        All of my projects are available at my
        <a class="lnk" href="https://github.com/MistereoSC" target="_blank">
          GitHub
        </a>
        but here are some of my favorite so far!
      </p>
      <div class="flex-v">
        <ProjectCard
          title="MHGUTree"
          url="https://github.com/MistereoSC/MHGUTree"
          src="https://i.imgur.com/wzRPAnc.png"
        >
          Web Project to visualize all 10.000+ Weapons available in MHGU, and
          how to craft them, as a tree structure
        </ProjectCard>
        <ProjectCard
          title="GW2Stats"
          url="https://github.com/MistereoSC/GW2Stats"
          src="https://i.imgur.com/aAlYNsP.png"
        >
          Web Project that lets you view the inventories of all your characters
          without having to log in.<br />
          I created it as an exercise in working with APIs.
        </ProjectCard>
        <ProjectCard
          title="D2RRuneCalc"
          url="https://github.com/MistereoSC/D2RRuneCalc"
          src="https://i.imgur.com/gP9UL2b.png"
        >
          Web Project for Diablo 2 to list all existing Runecrafts, and show
          which Items are craftable with the runes currently owned
        </ProjectCard>
        <ProjectCard
          title="conclurer/midnightboard"
          url="https://github.com/conclurer/midnightboard"
        >
          University Project for the development of a digital notice board,
          using Vue.js as the frontend and Sails.js as the backend. I worked
          mostly on the backend, but also helped out with the frontend in the
          end.
        </ProjectCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_colors.scss';

.contact-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: min(70ch, 90%);
  margin-top: 1rem;

  * {
    font-weight: 400;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 300;
    color: $c-text-mute;
    margin-bottom: -0.25em;
    margin-left: 0.5em;
  }
  h2 {
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: 700;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-left: -0.1rem;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  p {
    .i {
      font-style: italic;
      color: $c-text-mute;
      margin-right: 0.3rem;
    }
  }
  .material-icons {
    margin-right: 0.1em;
  }
}

ul {
  margin-left: 2rem;
  line-height: 1.6;
  li {
    font-size: 1.5rem;
    list-style: none;
    img {
      width: 1em;
      height: 1em;
      margin: 0 0.2em -0.15em 0.25em;
    }
  }
  p {
    color: $c-text-mute;
  }
}
.contact-spacer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}
.lnk {
  padding: 0;
}
</style>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
</script>
