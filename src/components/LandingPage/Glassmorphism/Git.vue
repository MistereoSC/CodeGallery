<template>
  <div class="skills-card">
    <div class="splinters">
      <span class="glass splinter-1"></span>
      <span class="glass splinter-2"></span>
      <span class="glass splinter-3"></span>
    </div>
    <div class="skills-card-content glass">
      <h1>GITHUB</h1>
      <h2>SOME OF MY FAVORITES</h2>
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
@import '@/assets/sass/_glass.scss';

.skills-card {
  .skills-card-content {
    font-family: 'News Cycle', sans-serif;
    padding: 1.5rem 2rem 2rem 2rem;
    z-index: 3;
  }
  .project-cards {
    max-width: 44rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
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
  .splinters {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .splinter-1 {
      position: absolute;
      top: -3rem;
      left: 4rem;
      width: 6rem;
      height: 6rem;
      z-index: 4;
    }
    .splinter-2 {
      position: absolute;
      bottom: 3.5rem;
      right: -4rem;
      width: 8rem;
      height: 8rem;
      z-index: 2;
    }
    .splinter-3 {
      position: absolute;
      bottom: -2.5rem;
      left: -3rem;
      width: 7rem;
      height: 7rem;
      z-index: 2;
    }
  }
}
</style>

<script setup>
import ProjectCard from '@/components/LandingPage/Glassmorphism/GitCard.vue'
import GitSettings from '@/assets/json/git-projects.json'
</script>
