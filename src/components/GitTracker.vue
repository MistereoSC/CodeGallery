<template>
  <div class="resources-container">
    <div class="header">
      <h1>#My GitHub</h1>
      <span> All of my GitHub repositories at a glance </span>
    </div>
    <div class="resources">
      <GitCard
        v-for="item in repos"
        :title="item.title"
        :url="item.url"
        :ignorePreview="item.ignorePreview"
        :gitName="item.gitName"
        >{{ item.description }}</GitCard
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resources-container {
  margin-bottom: 3rem;
  .resources {
    grid-row-start: 2;
    grid-row-end: 4;
    margin: 1rem 0 5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .header {
    text-align: center;
  }
}

@media (max-width: 1370px) {
  .header {
    display: flex;
    flex-direction: column;
  }
}
</style>

<script>
import GitCard from '@/components/ProjectCard.vue'
import GitSettings from '@/assets/json/git-projects.json'
export default {
  components: {GitCard},
  data() {
    return {
      repos: [],
      settings: {},
      error: false,
    }
  },
  async created() {
    const res = await fetch(
      'https://api.github.com/users/' + GitSettings.name + '/repos?sort=updated'
    )
      .then((resp) => resp.json())
      .then((data) => {
        return data
      })
      .catch((err) => {
        return {message: err}
      })

    if (res.message) {
      //TODO: handle error
      console.error('Error fetching GitHub repos')
      this.error = true
    } else {
      for (let index = 0; index < res.length; index++) {
        const el = res[index]
        if (GitSettings.ignored.includes(el.name)) {
          continue
        }
        let ig = false
        if (GitSettings.ignoredImages.includes(el.name)) {
          ig = true
        }
        let ob = {
          title: el.name,
          description: el.description,
          url: el.html_url,
          ignorePreview: ig,
          gitName: GitSettings.name,
        }
        this.repos.push(ob)
      }
    }
  },
}
</script>
