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
      <div class="project-cards">
        <ProjectCard
          v-for="item in GitSettings.featuredRaw"
          :title="item.title"
          :url="item.url"
          :src="item.previewUrl"
        >
          {{ item.description }}
        </ProjectCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_colors.scss';

.project-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
  gap: 2rem;
  width: 70ch;
}
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
    font-size: 1rem;
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

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import GitSettings from '@/assets/json/git-projects.json'
</script>
