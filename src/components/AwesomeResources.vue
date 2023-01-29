<template>
  <div class="resources-container">
    <div class="header">
      <h1>#Awesome resources</h1>
      <span>
        Some awesome and helpful tools I regularly use while programing.
      </span>
      <span> (Aka just a List of Links I want to have fast access to.) </span>
      <br /><br />
    </div>
    <div class="resources">
      <ResourceCard
        v-for="item in ResourceList"
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
  margin-bottom: 3rem;
  .resources {
    grid-row-start: 2;
    grid-row-end: 4;
    margin: 1rem 0 5rem 0;
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

<script setup lang="ts">
import ResourceCard from '@/components/ResourceCard.vue'
import ResourceList from '@/assets/json/awesome-resources.json'
</script>
