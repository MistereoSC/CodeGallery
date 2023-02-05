<template>
  <div class="resources-container">
    <div class="header">
      <h1>#Awesome Tools</h1>
      <span>
        Some awesome and helpful tools I regularly use while programing.
      </span>
      <span> (Aka just a List of Links I want to have fast access to.) </span>
      <br /><br />
    </div>
    <div class="resources">
      <ResourceCard
        v-for="item in ResourceList.tools"
        :key="item.id"
        :title="item.title"
        :url="item.url"
        :src="item.previewUrl"
        >{{ item.description }}</ResourceCard
      >
    </div>
    <div class="header">
      <h1>#Learning Resources</h1>
      <span>
        Some awesome sites that teach coding and help improving coding skills.
      </span>
      <br /><br />
    </div>
    <div class="resources">
      <ResourceCard
        v-for="item in ResourceList.resources"
        :key="item.id"
        :title="item.title"
        :url="item.url"
        :src="item.previewUrl"
        >{{ item.description }}</ResourceCard
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resources-container {
  margin: 2rem 0;
  .resources {
    margin: 0 1rem 5rem 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
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

<script setup>
import ResourceCard from '@/components/ResourceCard.vue'
import ResourceList from '@/assets/json/awesome-resources.json'
</script>
